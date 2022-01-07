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
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [minting, setMinting] = useState(false);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  if (
    blockchain.account === "" ||
    blockchain.account === undefined ||
    blockchain.smartContract === null
  ) {
    return (
      <button
        type="button"
        className="button"
        onClick={(e) => {
          e.preventDefault();
          dispatch(connect());
          getData();
        }}
      >
        Connect wallet
      </button>
    );
  }

  async function mint(qty) {
    // try {
    //   setMinting(true);
    //   await performActions(async (kit) => {
    //     const networkId = await web3.eth.net.getId();
    //     const deployedNetwork = WomxnOfCelo.networks[networkId];
    //     const contract = new kit.registry.Contract(
    //       WomxnOfCelo.abi,
    //       deployedNetwork && deployedNetwork.address
    //     );
    //     const tx = await contract.mint(qty, { from: account });
    //     console.log(tx);
    //     // const signer = await getConnectedSigner();
    //     // const balance = await signer.getBalance();
    //   });
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   setMinting(false);
    // }
  }

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
                            onClick={() => mint(1).catch(console.error)}
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
                            onClick={() => mint(5).catch(console.error)}
                          >
                            5 Womxn
                          </a>
                        </div>
                      )}
                    </Menu.Item>

                    {/* <Menu.Item>
                      {({ active }) => (
                        <div>
                        <a href="#/" className={classNames(
                          active ? 'bg-gray-100 text-gray-900 btn w-full py-10' : 'text-gray-100 btn w-full py-10',
                          'block px-4 py-2 text-sm btn w-full py-10'
                        )} onClick={() => mint(1).catch(console.error)}>
                          1 Womxn
                        </a>
                        </div>
                      )}
                    </Menu.Item> */}
                  </Menu.Items>
                </Transition>
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
