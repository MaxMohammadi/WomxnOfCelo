import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/common.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  ContractKitProvider,
  Alfajores,
  ChainId,
  Mainnet,
} from "@celo-tools/use-contractkit";
import "@celo-tools/use-contractkit/lib/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

// import CeloDeployment from './metadata.json';

// export const NETWORK =
//   process.env.REACT_APP_NETWORK === 'celo' ? Mainnet : Alfajores;
//   console.log(`Running on ${NETWORK.name}, Contract Address - ${getDeployment(NETWORK.chainId).address}`
// );

// export function getDeployment(chainId) {
//   return chainId === ChainId.Mainnet ? CeloDeployment : CeloDeployment.alfajores;
// }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ContractKitProvider
          dapp={{
            name: "My awesome dApp",
            description: "My awesome description",
            url: window.location.href.slice(0, window.location.href.length - 1),
          }}
          connectModal={{
            style: {
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                transform: "translate(-50%, -50%)",
                border: "unsert",
                background: "unset",
                padding: "unset",
                color: "black",
              },
              overlay: {
                zIndex: 40,
              },
            },
            overlayClassName: "tw-z-40",
          }}
          // network={NETWORK}
          // networks={[NETWORK]}
        >
          <Router>
            <App />
          </Router>
        </ContractKitProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
