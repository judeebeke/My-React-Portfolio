import React from "react";
import { socialLinks } from "../../localstore/LocalData";
import { hoverLinkTransition } from "../../../style";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1 className="text-7xl font-bold">Jude Ebeke</h1>
        <p className="text-3xl text-lowDark">I'm a <span className="text-main">Frontend Web Developer</span></p>
        <ul className="flex gap-x-10">
          {socialLinks.map((link) => {
            return <li className={`text-3xl hover:text-main ${hoverLinkTransition}`} key={link.id}><a href={link.socialNetwork} target='_blank' rel="noreferrer">{link.socialIcons}</a></li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
