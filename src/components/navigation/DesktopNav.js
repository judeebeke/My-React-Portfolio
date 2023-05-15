import React, {useState} from "react";
import { navLinks } from "../localstore/LocalData";

const DesktopNav = () => {
  const [currentNav, setCurrentNav] = useState(null);
  const [isNavFull, setIsNavFull] = useState(false);

  const openNavFullHandler = (linkId) => {
    setCurrentNav(linkId);
    setIsNavFull(true)
  }

  const closeNavFullHandler = () => {
    setCurrentNav(null);
    setIsNavFull(false)
  }

  return (
    <nav className="desktopNav">
      <ul className="list-none flex flex-col gap-y-6">
        {navLinks.map((link) => {
          return (
            <li className={`${currentNav === link.navLinkText && isNavFull ? "w-auto" : "w-14"}  p-4 text-center text-dark bg-gray hover:bg-main hover:text-white rounded-full transition duration-600 ease-in-out`} key={link.navLinkText} onMouseEnter={()=>{openNavFullHandler(link.navLinkText)}} onMouseLeave={closeNavFullHandler}>
              <a href={`#${link.navLinksRef}`} className={`flex justify-center items-center text-xl`}>
                {link.navLinksIcons}
              <span className={`${currentNav === link.navLinkText && isNavFull ? "block ml-2" : "hidden ml-6"}`}>{link.navLinkText}
              </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopNav;
