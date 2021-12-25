import React, { useEffect, useState } from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import { Link as Anchor } from "react-scroll";
import "../styles/header.scss";
import Socials from "./Socials";
import ConnectWallet from "./ConnectWallet";

export default function Header({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
  showMenu,
  setShowMenu,
  scrolled,
}) {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    window && setRendered(true);
  }, []);
  const links = [
    { href: "about-us", text: "About" },
    { href: "team", text: "Team" },
    { href: "roadmap", text: "Roadmap" },
    // { href: "market", text: "Market" },
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
          {rendered && (
            <ConnectWallet
              header
              showPopup={showPopup}
              setShowPopup={setShowPopup}
              setUserAddress={setUserAddress}
              userAddress={userAddress}
            />
          )}
        </div>
      </div>
    </div>
  );
}
