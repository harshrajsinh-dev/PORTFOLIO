import { assets } from "../assets/assets"

export default function Skill() {
 const skills = [
    "Frontend",
    "Backend",
    "Databases",
    "Cloud",
    "Other",
  ]

    return (
     <div className="mb-16 ">

          <div className="flex items-center gap-4 mb-3 ">
            <h3 className="text-2xl font-bold tracking-wide text-slate-900 flex items-center gap-4">
              Skills
              {/* 1rem = 16px */}
            </h3>
            <img className="h-[2rem] w-[3rem] " src={assets.RightArrow} alt="" />
          </div>

          <div className="flex flex-wrap justify-end gap-3">
            {skills.map((skill, i) => (
              <>
                <span
                  key={i}
                  className="w-full md:w-auto px-4 py-2 text-l font-bold rounded-xl bg-blue-200 text-black/60 hover:bg-gradient-to-r from-sky-300 to-indigo-600 hover:text-white cursor-pointer "
                >
                  {skill}

                </span>
              </>
            ))}
          </div>
        </div>
  )
}