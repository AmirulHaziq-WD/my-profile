import React from 'react'
import ProjectCard from './Project/ProjectCard'
import { projects } from '../constant/ProjectData'

const Projects = () => {
  return (
    <section className="flex flex-col w-full mx-5 px-12">
      <div className="w-full">
        <h1 className="text-6xl text-white text-center p-2 mb-1.5">My Projects</h1>
        <p className="text-md text-gray-300 text-center p-2">A collection of projects that showcase my skills and passion for development</p>
      </div>
      <div className="w-full flex items-center justify-center p-6 gap-10">
        {projects?.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            link={item.link}
            descr={item.descr}
            tools={item.tools}
            image={item.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects