import React from 'react'
import { MdOutlineEmail, MdFolder } from "react-icons/md";

const About = () => {
  return (
    <section className="flex w-full items-center justify-center px-12">
      <div className="flex gap-10 items-center w-full p-10">
        <div className="w-full my-auto p-4">
          <div className="flex gap-4">
            <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking tighter">
              <span className="text-md">Hello{" "}</span> I'm 
            </h1>
            <span className="text-orange-400 text-3xl md:text-6xl font-bold flex leading-normal tracking tighter">Amirul Haziq</span>
          </div>
          <h3 className="text-orange-200 font-semibold text-2xl tracking-tight my-1">Frontend Developer and Software Engineer</h3>
          <p className="w-150 text-sm md:text-xl tracking-tight text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod nulla ut felis pharetra consequat. Cras sit amet pellentesque risus, et dapibus nisi. Phasellus quam enim, ultricies nec felis in, vestibulum scelerisque quam.
          </p>
          <div className="flex gap-5 items-center justify-center mt-4">
            <button className="bg-orange-500 rounded-4xl border-4 border-orange-600 hover:bg-orange-500/40 p-3 text-white text-lg font-semibold flex gap-2 justify-center items-center"> <MdOutlineEmail size={30}/> Contact me</button>
            <button className="bg-orange-500 rounded-4xl border-4 border-orange-600 hover:bg-orange-500/40 p-3 text-white text-lg font-semibold flex gap-2 justify-center items-center"> <MdFolder size={30}/> My Projects</button>
          </div>
        </div>
        <div className="w-[60%] my-4 p-6 flex flex-col gap-y-2 items-center justify-center">
          <img src="/images/1.jpeg" alt="me" className="border border-gray-800 shadow-xl shadow-black/30 rounded-2xl w-90 h-90 object-cover"/>
          <p className="text-xs text-white italic">I like coding, cats and ice tea. {":)"}</p>
        </div>
      </div>
    </section>
  )
}

export default About