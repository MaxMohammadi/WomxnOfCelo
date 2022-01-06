import React from "react";
import "../styles/hero-section.scss";
import WelcomeTo from "./WelcomeTo";
import { motion } from "framer-motion";
import Bombs from "./Bombs";
import { useEffect, useState} from "react";
import { useContractKit, useGetConnectedSigner } from '@celo-tools/use-contractkit';
import "../styles/common.scss";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
}) {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const getConnectedSigner = useGetConnectedSigner();
  const { account, performActions, connect, destroy } = useContractKit();
  const [minting, setMinting] = useState(false);

  useEffect(() => {
    if (account) destroy().then(console.log).catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function mint(qty) {
    // let reciept;
    // try {
    //   setMinting(true);
    //   await performActions(async (kit) => {
    //     const signer = await getConnectedSigner();
    //     const balance = await signer.getBalance();
    //     const cApe = (
    //       new Contract(deployment.address, deployment.abi, signer) as CeloApes
    //     ).connect(signer);
    //     const price = await cApe.cost();
    //     const totalPrice = price.mul(qty);

    //     if (totalPrice.gte(balance)) {
    //       toast.warning(
    //         'Low CELO Balance!',
    //         `You are short of ${utils.formatEther(
    //           totalPrice.sub(balance).toString()
    //         )} CELO only. Hurry and topup your wallet to mint Apes!`
    //       );
    //       return;
    //     }

    //     reciept = await (
    //       await cApe.mint(await signer.getAddress(), qty, { value: totalPrice })
    //     ).wait();
    //     console.log(reciept);
    //     toast.success(
    //       'Horrah! You are now part of Kingdom',
    //       undefined,
    //       reciept.transactionHash
    //     );
    //   });
    // } catch (error) {
    //   console.error(error);
    //   toast.error('Oops! Something went wrong', error.message);
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
            {!account ? (
              <div className="dropdown d-inline-flex align-items-center justify-content-center align-self-center">
                <button type="button" className="btn w-full" onClick={() => connect().catch(console.error)}>
                  Connect wallet
                </button>
              </div>
            ) : (
              <div className="dropdown d-inline-flex align-items-center justify-content-center align-self-center flex-col space-y-4">
                <br/>
                <br/>
                <br/>
                <br/>
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
                        <a href="#/" className={classNames(
                          active ? 'bg-gray-100 text-gray-900 py-10' : 'text-gray-100 btn py-10',
                          'block px-4 py-2 text-sm btn py-10'
                        )} onClick={() => mint(1).catch(console.error)}>
                          1 Womxn
                        </a>
                        </div>
                      )}
                    </Menu.Item>

                    <Menu.Item className="space-y-4">
                      {({ active }) => (
                        <div>
                        <a href="#/" className={classNames(
                          active ? 'bg-gray-100 text-gray-900 py-10' : 'text-gray-100',
                          'block px-4 py-2 text-sm btn py-10'
                        )} onClick={() => mint(1).catch(console.error)}>
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
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
            )}
          </div>
        </Menu>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </motion.div>
  );
}
