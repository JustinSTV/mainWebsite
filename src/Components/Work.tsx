import React from 'react'
import "./CSS/Work.css"

const Work = () => {

  const projects = [
    {
      title: "React Movie Search",
      description: "Using API to search for movies and display them in a list. You can click on a movie to see more details.",
      technologies: ["React", "CSS"],
      github: "https://github.com/JustinSTV/react_movieSearch",
      // live: "https://google.com",
    },
    {
      title: "Rock Paper Scissors Game",
      description: "My first project using Vanilla JavaScript. It's a simple game of Rock Paper Scissors versus computer.",
      technologies: ["HTML", "CSS", "Vanilla JavaScript"],
      github: "https://github.com/JustinSTV/rock_paper_scissors",
      live: "https://rock-paper-scissors-gules-ten.vercel.app/",
    },
    {
      title: "E-Maitinimas App",
      description: "During my internship we were tasked to develop an app based on e-maitinimas.lt website.",
      technologies: ["React-Native", "Expo", "TypeScript", "Node.js", "MySQL"],
    },
    {
      title: "Portfolio Website",
      description: "This website was created to showcase my skills and projects.",
      technologies: ["React", "TypeScript", "Vite", "CSS"],
      github: "https://github.com",
      live: "https://google.com",
    },
    {
      title: "Menu Project",
      description: "School project where we had to create a menu for a restaurant.",
      technologies: ["Vanilla JavaScript", "HTML", "CSS"],
      github: "https://github.com",
      live: "https://google.com",
    }

  ]


  return (
    <div className='work-section'>
      <h1 className="big-heading">Projects</h1>
      <div className="project-cards">
        {/* nuo cia vienas cardas */}
        {projects.map((project, index) => (
          <div className="one-project-card" key={index}>
            <h2 className='project-title'>{project.title}</h2>
            <p className='project-description'>{project.description}</p>
            <p className='project-tech'>
              {project.technologies.join(", ")}
            </p>
            <div className="project-buttons">
              {project.github && (
                <button
                  className="one-project-button"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  View Code
                </button>
              )}
              {project.live && (
                <button
                  className="one-project-button"
                  onClick={() => window.open(project.live, "_blank")}
                >
                  Live Demo
                </button>
              )}
            </div>
          </div>
        ))}
        {/* iki cia vienas cardas */}
      </div>
    </div>
  )
}

export default Work