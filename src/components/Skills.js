import React from 'react';

function Skills() {
  const skills = [
    { name: 'Java', img: require('../images/java.png') },
    { name: 'Python', img: require('../images/python.jpg') },
    { name: 'JavaScript', img: require('../images/javascript.png') },
    { name: 'TypeScript', img: require('../images/sql.png') },
    { name: 'React', img: require('../images/react.png') },
    { name: 'Node.js', img: require('../images/node.png') },
    { name: 'Firebase', img: require('../images/firebase.png') },
    { name: 'CSS', img: require('../images/html-css.jpg') },
    { name: 'Git', img: require('../images/git.png') },
  ];

  return (
    <div className="d-flex overflow-auto py-3 px-2 gap-4 scroll-div">
      {skills.map((skill, index) => (
        <div key={index} className="text-center flex-shrink-0">
          <img
            src={skill.img}
            alt={skill.name}
            className="img-fluid mb-1 mx-3"
            style={{ maxHeight: '100px', objectFit: 'contain', borderRadius: '50%', aspectRatio:1 }}
          />
        </div>
      ))}
    </div>
  );
}

export default Skills;