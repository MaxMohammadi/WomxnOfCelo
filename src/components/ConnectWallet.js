import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

export default function ConnectWallet() {
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

  return (
    <div>
      {blockchain.account.toString().substring(0, 4)}..
      {blockchain.account.toString().substring(38, 42)}
    </div>
  );
}
