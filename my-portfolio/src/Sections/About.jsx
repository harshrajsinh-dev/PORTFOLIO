import React from "react"
import { assets } from "../assets/assets"

export default function About() {
  const skills = [
    "Frontend",
    "Backend",
    "Databases",
    "Cloud",
    "Other",
  ]

  return (
    <section className="scroll-mt-32 max-w-5xl mx-auto px-4 py-16">
      <div className="relative">
        {/* Name */}
        <div className="text-2xl md:text-4xl mb-10 bg-gradient-to-r from-black via-slate-800 to-black bg-clip-text text-transparent transition-all duration-500 animate-fadeIn hover:tracking-wide font-['poppins'] font-[600] uppercase">
          Harshrajsinh Y. Gohil
        </div>

        {/* Description */}
        <p className="text-slate-700 max-w-2xl mb-14 leading-relaxed text-base md:text-lg animate-fadeIn">
          I’m a{" "}
          <span className="relative font-semibold text-black after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
            Full-stack developer
          </span>{" "}
          focused on building reliable, scalable web applications with clean
          architecture and thoughtful UX.
        </p>

        {/* Skills */}
        <div className="mb-16 ">

          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold tracking-wide text-slate-900 flex items-center gap-4">
              Skills
              {/* 1rem = 16px */}
            </h3>
            <img className="h-[2rem] w-[3rem] " src={assets.RightArrow} alt="" />
          </div>

          <div className="flex flex-wrap gap-3 float-right">
            {skills.map((skill, i)  => (
              <>
                <span
                  key={i}
                  className="px-4 py-2 text-l font-bold rounded-xl bg-blue-200 text-black/60 hover:bg-gradient-to-r from-sky-300 to-indigo-600 hover:text-white cursor-pointer "
                >
                  {skill}

                </span>
            </>
            ))}
        </div>
        </div>
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-bold tracking-wide text-slate-900 flex items-center gap-4">
            Work Stack
            {/* 1rem = 16px */}
          </h3>
          <img className="h-[2rem] w-[3rem] " src={assets.RightArrow} alt="" />
        </div>
      </div>
    </section>
  )
}
