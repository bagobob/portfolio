import React from 'react';
import Backend from './Backend';
import Devops from './Devops';
import Frontend from './Frontend';
import "./skills.css";
import SoftSkill from './SoftSkill';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical and soft skill</span>

        <div className="skills__container container grid">
        <Frontend />

        <Backend />

        <Devops />

        <SoftSkill />
        </div>

    </section>
  )
}

export default Skills