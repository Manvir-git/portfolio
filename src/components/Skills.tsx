import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JAVA", image: "images/skills/java.jpg" },
        { name: "C++", image: "images/skills/cpp.jpg" },
        { name: "Python", image: "images/skills/python.jpg" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "JavaScript", image: "images/skills/js.jpg" },
        { name: "HTML", image: "images/skills/html.jpg" },
        { name: "CSS", image: "images/skills/css.jpg" },
        { name: "PHP", image: "images/skills/php.jpg" }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React.js", image: "images/skills/react.png" },
        { name: "Node.js", image: "images/skills/node.png" },
        { name: "Laravel", image: "images/skills/laravel.png" },
        { name: "Angular", image: "images/skills/angular.png" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "MongoDB", image: "images/skills/mongodb.png" },
        { name: "Firebase", image: "images/skills/firebase.png" },
        { name: "GitHub", image: "images/skills/github.png" },
        { name: "Figma", image: "images/skills/figma.png" },
        { name: "OpenAI", image: "images/skills/openai.png" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills fade-in">
      <h2>My Skills</h2>
      <div className="skills-content">
        {categories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category.title}</h3>
            <div className="skill-cards">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-card">
                  <img src={skill.image} alt={`${skill.name} Logo`} />
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 