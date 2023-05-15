import React from 'react'
import Heading from '../UI/Heading';
import { sectionParaStyles, infoParaStyles, thirdHeadingStyles } from '../../style';
import mypicture from "../assets/images/mypassport.jpg"
import { personalData } from './../localstore/LocalData';

const About = () => {
  return (
    <section className='section section-title' id="about">
        <Heading headingTitle="ABOUT" />
        <p className={sectionParaStyles}>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.</p>
        <div className='flex flex-wrap justify-center items-center gap-8 content-between mt-6 lg:flex-nowrap lg:items-start lg:justify-between'>
            <img src={mypicture} className='w-full h-9/12 lg:w-80' alt="Jude Ebeke" />
            <div>
              <h3 className={thirdHeadingStyles}>Graphics Designer & Web Developer.</h3>
              <p className={infoParaStyles}>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money.</p>
              <div>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6'>
                {personalData.map(data => {
                  return (
                    <li key={data.id} className='text-xl'><span className='text-main text-2xl'>&gt;</span> <strong>{data.type}:   </strong>{data.value}</li>
                  )
                })}
                </ul>
              </div>
              <p className={`${infoParaStyles} pt-4`}>A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.</p>
            </div>
        </div>
    </section>
  )
}

export default About
