import React, { useState } from "react";
import "../styles/pop-up.scss";
export default function ComingSoonPopUp({ showPopup, setShowPopup }) {
  const dayX = new Date("November 23, 2021 00:00:00").getTime();
  const today = Date.now();
  const [mintAmount, setmintAmount] = useState(1);
  const [showMint, setShowMint] = useState(dayX > today ? !false : !true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      onClick={handleClosePopup}
      className={`${
        showPopup ? "opacity-100 " : "pointer-events-none opacity-0"
      } transition-all duration-300 fixed z-40 bg-black bg-opacity-70 top-0 left-0 w-screen h-screen flex justify-center items-center`}
    >
      <div
        className="popup relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          onClick={handleClosePopup}
          className="popup-close absolute top-10 right-10 lg:-top-2.5 lg:-right-2"
        >
          x
        </button>
        {!showMint && (
          <p className="text-white text-7xl uppercase  font-guera">Coming soon!:)</p>
        )}
        {showMint && (
          <div className="popup-mint relative">
            <p className="text-white  uppercase text-xl lg:text-5xl ">Sale live now!</p>
            <p className="text-myRed  uppercase text-xl lg:text-5xl">Bomb Kicks!</p>
            <p className="py-4 text-center uppercase text-white font-bold">
              8888 NFTS (1 ICP / NFT)
            </p>
            <div className="popup-mint-form">
              <div className="popup-mint-item">
                <p className="balance mr-auto">My ICP Balance</p>
                <p className="text-orange">0 ICP</p>
              </div>
              <div className="popup-mint-item relative">
                <p className="">Mint Amount</p>
                <div className="ml-auto mr-14 ;g:mr-20 flex">
                  <button
                    disabled={mintAmount <= 1}
                    onClick={() => {
                      setmintAmount((prev) => prev - 1);
                    }}
                    className="  cursor-pointer w-2"
                  >
                    -
                  </button>
                  <p className="text-white px-3 text-lg">{mintAmount}</p>
                  <button
                    onClick={() => {
                      setmintAmount((prev) => prev + 1);
                    }}
                    className=" cursor-pointer w-2"
                  >
                    +
                  </button>
                </div>
                <button className="bg-orange  font-bold h-full absolute top-0 right-0 pr-6">
                  MAX
                </button>
              </div>
              <div className="popup-mint-item">
                {" "}
                <p className="balance mr-auto">Total Price</p>
                <p className="text-orange">{mintAmount * 1} ICP</p>
              </div>
              <button className="popup-mint-item popup-mint-button"> Mint now </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
