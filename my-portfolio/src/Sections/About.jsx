import React from "react"

export default function About() {
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
  ]

  const workStack = [
    { label: "Frontend", value: "React, Bootstrap, Tailwind CSS" },
    { label: "Backend", value: "Node.js, Express" },
    { label: "Database", value: "MongoDB" },
    { label: "Tools", value: "Git, GitHub, VS Code, Figma" },
  ]

  return (
    <section className="scroll-mt-32 max-w-5xl mx-auto px-4 py-16">
      <div className="relative">
        {/* Name */}
        {/* <div className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 animate-fadeIn"> */}
        <div className="text-2xl md:text-4xl mb-10 bg-gradient-to-r from-black via-slate-800 to-black bg-clip-text text-transparent transition-all duration-500 animate-fadeIn hover:tracking-wide  font-['poppins'] font-[600] uppercase">


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
        <div className="mb-16">
          <h3 className="text-lg font-semibold mb-6 tracking-wide text-slate-900">
            Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm rounded-full bg-slate-100 text-slate-700 hover:bg-black hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Work Stack */}
        <div>
          <h3 className="text-lg font-semibold mb-6 tracking-wide text-slate-900">
            Work Stack
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {workStack.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-slate-200 hover:border-black transition"
              >
                <div className="font-medium text-slate-900 mb-1">
                  {item.label}
                </div>
                <div className="text-slate-600 text-sm">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
