import React from "react";
import "../styles/hero-section.scss";
import WelcomeTo from "./WelcomeTo";
import { motion } from "framer-motion";
import Bombs from "./Bombs";
import { useEffect, useState } from "react";
// import { Contract} from '@ethersproject/contracts';
import {
  useContractKit,
  useGetConnectedSigner,
} from "@celo-tools/use-contractkit";
import "../styles/common.scss";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import web3 from "web3";
import WomxnOfCelo from "./../abi/WomxnOfCelo.json";
// import { getDeployment, NETWORK } from '..';

import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/data/dataActions";
import { connect } from "../redux/blockchain/blockchainActions";
import ReactLoading from "react-loading";

export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const dispatch = useDispatch();
  const getConnectedSigner = useGetConnectedSigner();
  const [minting, setMinting] = useState(false);
  const blockchain = useSelector((state) => state.blockchain);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  const mint = (mintAmount) => {
    try {
      let cost = CONFIG.WEI_COST;
      let gasLimit = CONFIG.GAS_LIMIT;
      let totalCostWei = String(cost * mintAmount);
      let totalGasLimit = String(gasLimit * mintAmount);
      setIsLoading(true);
      blockchain.smartContract.methods
        .mint(mintAmount)
        .send({
          gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once("error", (err) => {
          console.log(err);
          setIsLoading(false);
        })
        .then((receipt) => {
          setIsLoading(false);
          alert(
            "Congratulations! You have successfully minted your Womxn of Celo NFT. Check your transaction history to view it!"
          );
          dispatch(fetchData(blockchain.account));
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div id="hero-section" className="relative">
      <div className="my-container relative splash">
        <div className="bombs relative  lg:block">
          <Bombs />
        </div>
        <WelcomeTo
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          userAddress={userAddress}
          setUserAddress={setUserAddress}
        />

        <Menu>
          <div className="btn-center">
            {blockchain.account === "" ||
            blockchain.account === undefined ||
            blockchain.smartContract === null ? (
              <div className="dropdown d-inline-flex align-items-center justify-content-center align-self-center">
                <button
                  type="button"
                  className="btn w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                  }}
                >
                  Connect wallet
                </button>
              </div>
            ) : (
              <div className="dropdown d-inline-flex align-items-center justify-content-center align-self-center flex-col space-y-4">
                <br />
                <br />
                <br />
                <br />
                <Menu.Button type="button" className="btn w-full">
                  Mint Now!
                </Menu.Button>

                {isLoading ? (
                  <ReactLoading
                    className="w-full"
                    style={{ backgroundColor: "none" }}
                    type={"spinningBubbles"}
                    color={"white"}
                    width={80}
                    height={80}
                  />
                ) : (
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="flex-col space-y-4">
                      <Menu.Item className="space-y-4">
                        {({ active }) => (
                          <div className="space-y-4">
                            <a
                              href="#/"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900 py-10"
                                  : "text-gray-100 btn py-10",
                                "block px-4 py-2 text-sm btn py-10"
                              )}
                              onClick={() => mint(1)}
                            >
                              1 Womxn
                            </a>
                          </div>
                        )}
                      </Menu.Item>

                      <Menu.Item className="space-y-4">
                        {({ active }) => (
                          <div>
                            <a
                              href="#/"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900 py-10"
                                  : "text-gray-100",
                                "block px-4 py-2 text-sm btn py-10"
                              )}
                              onClick={() => mint(5)}
                            >
                              5 Womxn
                            </a>
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                )}
                <br />
                <br />
                <br />
                <br />
              </div>
            )}
          </div>
        </Menu>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </motion.div>
  );
}
