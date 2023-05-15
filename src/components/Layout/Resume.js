import React from "react";
import Heading from "../UI/Heading";
import { infoParaStyles, thirdHeadingStyles, buttonStyles, fourthHeadingStyles, hoverLinkTransition } from "../../style";

const Resume = () => {
  return (
    <section className="section" id='resume'>
      <Heading headingTitle="RESUME" />
      <button className={`${buttonStyles} ${hoverLinkTransition} p-3`}>Download CV</button>
      <aside className="flex flex-col justify-center items-center border-r-2 border-l-2 w-9/12 border-main border-solid">
        <h3 className={thirdHeadingStyles}>Summary</h3>
        <div className="px-4">
          <h4 className={fourthHeadingStyles}>Jude Ebeke</h4>
          <p className={`${infoParaStyles}`}>
            A town hall different from bala blu, blue blu bulaba. broom broom
            broom brooooooooom. Bala blu blue blu bulaba. A town hall different
            from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala
            blu blue blu bulaba. The farmers will make more money.
          </p>
        </div>
      </aside>
    </section>
  );
};

export default Resume;
