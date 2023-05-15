import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { navLinks } from "../localstore/LocalData";
import { hoverLinkTransition } from "../../style";

const MobileNav = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const openMobileActiveHandler = () => {
    setIsMobileMenuActive(true);
  };

  const closeMobileActiveHandler = () => {
    setIsMobileMenuActive(false);
  };

  return (
    <nav className="mobileNav">
      <div className="mobileNavBtn">
        {!isMobileMenuActive ? 
        <span className="text-2xl text-main cursor-pointer" onClick={openMobileActiveHandler}><GiHamburgerMenu /></span> : 
        <span className="text-2xl text-main cursor-pointer" onClick={closeMobileActiveHandler}><GrClose /></span>}
      </div>
      <ul className={`${isMobileMenuActive ? "flex flex-col gap-y-6 pl-8 bg-white pt-5" : "hidden"}`}>
        {navLinks.map((link) => {
          return (
            <li className={`flex justify-center items-center text-2xl text-center text-dark hover:text-main ${hoverLinkTransition}`}>
              <a href={`#${link.navLinksRef}`} className="flex justify-center items-center gap-x-2">
                {link.navLinksIcons} {link.navLinkText}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNav;
