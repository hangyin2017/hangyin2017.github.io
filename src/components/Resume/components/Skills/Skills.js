import React from 'react';
import Item from './components/Item';

const Skills = () => {
  const skills = [
    {
      icon: 'html5',
      text: 'HTML5',
    },
    {
      icon: 'css3-alt',
      text: 'CSS3',
    },
    {
      icon: 'js',
      text: 'Javascript ES6',
    },
    {
      icon: 'sass',
      text: 'Sass',
    },
    {
      icon: 'react',
      text: 'React',
    },
    {
      icon: 'java',
      text: 'Java',
    },
    {
      icon: 'git',
      text: 'git',
    },
  ];
  return (
    <div className="row skills">
      <h3 className="col-12">SKILLS</h3>
      <div className="skills__list col-12">
        {skills.map(skill => (
          <Item icon={skill.icon}>{skill.text}</Item>
        ))}
      </div>
    </div>
  );
};

export default Skills;
