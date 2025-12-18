import React from 'react'

const ProjectCard = ({title, link, descr, tools, image}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className='block'>
        <div className="relative cursor-pointer group overflow-hidden rounded-xl border border-gray-200/20 shadow-2xl shadow-black">
            <img src={image} alt="Project Image" className="w-full h-100 object-cover transition-transform duration-300 group-hover:scale-110"/>
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center p-6">
                <div className="absolute bottom-0 left-0 p-5">
                    <h6 className="text-lg mb-1 text-white leading-normal">{title}</h6>
                    <p className="text-xs text-gray-200/40 text-justify">{descr}</p>
                    <div className="flex flex-wrap gap-3 mt-3">
                        {tools.map((item, index) => (
                            <span key={index} className="max-w-max bg-gray-400 p-2 rounded-2xl text-white">{item}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </a>
  )
}

export default ProjectCard