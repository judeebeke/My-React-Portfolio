import React, { useState } from 'react';
import Heading from '../UI/Heading';
import { sectionParaStyles, hoverLinkTransition } from '../../style';
import GraphicsDesignProjects from '../projects/GraphicsDesignProjects';
import WebDevProjects from '../projects/WebDevProjects';

const PastProjects = () => {
  const [activeProjectView, setActiveProjectView] = useState('web');

    const projectStyles = `font-semibold text-lg hover:text-main`;
  return (
    <section className='section' id="project">
      <Heading headingTitle="PORTFOLIO" />
        <p className={sectionParaStyles}>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.</p>
        <div className='flex flex-row gap-x-4 pt-8'>
            <button className={`${projectStyles} ${hoverLinkTransition} ${activeProjectView === 'web' ? "text-main" : "text-lowDark"}`} onClick={()=> {setActiveProjectView("web")}}>WEB DEV</button>
            <button className={`${projectStyles} ${hoverLinkTransition} ${activeProjectView === 'graphics' ? "text-main" : "text-lowDark"}`} onClick={()=> {setActiveProjectView("graphics")}}>GRAPHICS DESIGN</button>
        </div>
        <section>
        {activeProjectView === 'web' && <WebDevProjects />}
        {activeProjectView === 'graphics' && <GraphicsDesignProjects />}
        </section>
    </section>
  )
}

export default PastProjects;
