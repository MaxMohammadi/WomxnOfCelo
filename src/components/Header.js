import React, { useEffect, useState, useContext } from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import { Link as Anchor } from "react-scroll";
import "../styles/header.scss";
import Socials from "./Socials";
// import ConnectWallet from "./ConnectWallet";
import { useContractKit } from "@celo-tools/use-contractkit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

export default function Header({
  userAddress,
  showMenu,
  setShowMenu,
  scrolled,
}) {
  const [rendered, setRendered] = useState(false);
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  useEffect(() => {
    window && setRendered(true);
  }, []);
  const links = [
    { href: "about-us", text: "About" },
    { href: "team", text: "Team" },
    { href: "roadmap", text: "Roadmap" },
    { href: "faq", text: "FAQ" },
  ];

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
    className: "anchor text-white font-mont ",
  };

  // const { address: addr, connect } = useContractKit();
  // const address = typeof addr === "string" ? addr.toLowerCase() : addr;

  // useEffect(() => {
  //   if (!address) {
  //     return;
  //   }

  //   // registerUser({ address });
  // }, [address]);

  return (
    <div
      id="header"
      className={` ${scrolled ? "bg-opacity-80 py-3 shadow-lg" : "py-7"}`}
    >
      <div className="my-container justify-between flex items-center">
        <div className="w-1/4 lg:w-1/8 flex-shrink-0 lg:hidden">
          <Logo wide={false} />
        </div>

        <Burger showMenu={showMenu} setShowMenu={setShowMenu} />

        <div className="hidden lg:block lg:w-1/3 flex justify-center">
          <Logo wide={false} />
        </div>

        <div className="hidden lg:flex justify-evenly  lg:w-1/3 flex-grow ">
          {links.map((l, i) => (
            <Anchor key={i} to={l.href} {...linkProps}>
              {l.text}
            </Anchor>
          ))}
        </div>

        <div className="hidden lg:flex lg:w-1/3 text-xs xl:text-base font-bold lg:gap-6   xl:gap-10 items-center  flex-shrink-0 min-w-max">
          <Socials />

          {blockchain.account === "" ||
          blockchain.account === undefined ||
          blockchain.smartContract === null ? (
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
          ) : (
            <Link to="/" className="app-header__profile">
              <span className="btn w-full">
                {" "}
                {blockchain.account.toString().substring(0, 4)}..
                {blockchain.account.toString().substring(38, 42)}
              </span>
            </Link>
          )}

          {/* <ConnectWallet /> */}
          {/* {rendered && ( */}
          {/* <ConnectWallet /> */}
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
