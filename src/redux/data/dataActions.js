// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

const fetchNTFIDSuccess = (payload) => {
  return {
    type: "CHECK_LIST_NFT_ID_SUCCESS",
    payload: payload,
  };
};

const fetchNTFIDFailed = (payload) => {
  return {
    type: "CHECK_LIST_NFT_ID_FAILED",
    payload: payload,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();
      // let cost = await store
      //   .getState()
      //   .blockchain.smartContract.methods.cost()
      //   .call();

      dispatch(
        fetchDataSuccess({
          totalSupply,
          // cost,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};

export const fetchNTFID = () => {
  return async (dispatch) => {
    try {
      let listNFTID = await store
        .getState()
        .blockchain.smartContract.methods.walletOfOwner(
          store.getState().blockchain.account
        )
        .call();

      dispatch(
        fetchNTFIDSuccess({
          listNFTID,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchNTFIDFailed("Could not load data from contract."));
    }
  };
};
