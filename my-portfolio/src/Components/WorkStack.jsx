import { assets } from "../assets/assets";

export default function WorkStack() {

    return (
    <div className="flex items-center gap-4">
          <h3 className="text-2xl font-bold tracking-wide text-slate-900 flex items-center gap-4">
            Work Stack
            {/* 1rem = 16px */}
          </h3>
          <img className="h-[2rem] w-[3rem] " src={assets.RightArrow} alt="" />
        </div>
      
        )}