import React, { useState, useRef } from "react";
import { StoicIdentity } from "ic-stoic-identity";
import "../styles/connectWallet.scss";
import CWalletButton from "./Button";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Portal,
  ChakraProvider,
} from "@chakra-ui/react";

function ConnectWallet({
  showPopup,
  setShowPopup,
  header = false,
  big,
  userAddress,
  setUserAddress,
}) {
  const connectPlugWallet = async () => {
    const nnsCanisterId = "qoctq-giaaa-aaaaa-aaaea-cai";
    const whitelist = [nnsCanisterId];
    if (window.ic?.plug) {
      try {
        const isConnected = await window.ic.plug.requestConnect({
          whitelist,
        });
        console.log(isConnected);
        if (isConnected) {
          const principalId = await window.ic.plug.agent.getPrincipal();
          setUserAddress(principalId.toText());
          console.log("hola", `Plug's user principal Id is ${principalId}`);
        }
      } catch (error) {
        window.alert("connection was refused");
      }
    } else {
      window.alert("Plug Wallet not installed.");
    }
  };

  const connectStoicWallet = async () => {
    await StoicIdentity.load();
    try {
      let identity = await StoicIdentity.connect();
      if (identity) {
        setUserAddress(identity.getPrincipal().toText());
        console.log("hola", identity.getPrincipal().toText());
      }
    } catch (error) {
      window.alert("connection was refused");
    }
  };

  const eventCallback = (resolve) => {
    if (window.earth) {
      resolve(window.earth);
      window.removeEventListener("load", eventCallback(resolve));
    } else {
      window.alert("Earth Wallet not installed.");
      window.removeEventListener("load", eventCallback);
    }
  };

  const injectEarth = () => {
    return new Promise((resolve, reject) => {
      window.addEventListener("load", eventCallback(resolve));
      const event = new Event("load");
      window.dispatchEvent(event);
    });
  };

  const connectEarthWallet = async () => {
    await injectEarth();
    let account = await window.earth.enable();
    if (account) {
      console.log("hola", "Successfully connected to Earth Wallet 🌍", account);
      setUserAddress(account);
    } else {
      window.alert("connection was refused");
    }
  };
  return (
    <ChakraProvider>
      <>
        {!userAddress ? (
          <Popover>
            <PopoverTrigger>
              <button className={`btn ${header ? "" : "outlined"}`}>
                Connect Wallet
              </button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent className="pop-over">
                <PopoverBody>
                  <Button className="wallet-connect-button" onClick={connectPlugWallet}>
                    <img className="icon-logo" src="/imgs/plug-logo.jpg" /> Connect with
                    Plug
                  </Button>
                  <div className="spacer" />
                  <Button className="wallet-connect-button" onClick={connectStoicWallet}>
                    <img className="icon-logo" src="/imgs/stoic-logo.png" /> Connect with
                    Stoic
                  </Button>
                  <div className="spacer" />
                  <Button className="wallet-connect-button" onClick={connectEarthWallet}>
                    <img className="icon-logo" src="/imgs/earth-logo.jpg" /> Connect with
                    Earth
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        ) : (
          <div className="text-white   flex flex-col items-center justify-start">
            {header && (
              <p
                onClick={() => setUserAddress("")}
                className="pb-1 cursor-pointer"
              >{`${userAddress.slice(0, 8)}...${userAddress.slice(-6)}`}</p>
            )}
            <button
              onClick={() => {
                setShowPopup(true);
              }}
              className={`btn bg-orange h-full ${header && "text-xs"}`}
            >
              Mint NFT
            </button>
          </div>
        )}
      </>
    </ChakraProvider>
  );
}

export default ConnectWallet;
