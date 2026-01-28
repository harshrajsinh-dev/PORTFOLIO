

import { assets } from "../assets/assets";


export default function WorkStack() {
  return (
    <section className="text-slate-900 rounded-2xl">
      <h3 className="text-2xl font-bold tracking-wide text-slate-900 flex items-center gap-4">
        Work Stack
        <img className="h-[2rem] w-[3rem] " src={assets.RightArrow} alt="" />
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-10 mt-10">
        {assets.stack.map(({ icon: Icon, name, color }) => (
          <div
            key={name}
            className="flex items-center gap-3 opacity-60 hover:opacity-100 transition grayscale-100 hover:grayscale-0 cursor-pointer">
              {
                name == 'GSAP' ?
                <img src={Icon} alt="GSAP" className="w-5 h-5"/>
                :
                <Icon className="text-3xl" color={color} />
              }
            {/* <Icon className="text-xl" color={color} /> */}
            <span className="text-sm font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
