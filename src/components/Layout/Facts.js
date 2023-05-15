import React from 'react'
import Heading from '../UI/Heading';
import { skillSet } from '../localstore/LocalData';
import { hoverLinkTransition, sectionParaStyles } from '../../style';

const Facts = () => {
  return (
    <section className='section'>
      <Heading headingTitle="SKILLS" />
      <ul className='grid grid-cols-2 gap-x-16 gap-y-12 md:px-24 text-center md:text-start md:grid-cols-2 lg:grid-cols-3 md:gap-x-28 md:gap-y-14 lg:gap-x-38 lg:gap-y-20 xl:gap-x-40 xl:gap-y-20 mt-6'>
        {skillSet.map(skill => {
            return(
                <li key={skill.id} className={`flex flex-col justify-center items-center text-8xl font-extrabold text-gray ${hoverLinkTransition} lg:text-9xl hover:scale-125 focus:scale-125 ${skill.color}`}>
                  <a href={skill.link} target='_blank' rel="noreferrer">{skill.icon}</a>
                  <p className={sectionParaStyles}>{skill.name}</p>
                </li>
            )
        })}
      </ul>

    </section>
  )
}

export default Facts;
