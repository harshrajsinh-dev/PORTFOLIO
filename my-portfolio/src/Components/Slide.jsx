import React from 'react'
import { assets } from '../assets/assets'

const Slide = () => {
    return (
        <div className='relative'>
            <h3>Title</h3>
         
            <div>
                {/* code - iframe */}
      <div className="relative p-10 flex justify-center">
  {/* Laptop Frame */}
  <div className="w-full max-w-5xl border-[18px] border-black rounded-2xl overflow-hidden shadow-xl">
    <iframe
      src="https://harshrajsinh-two.vercel.app/"
      scrolling="no"
      className="w-full h-[75vh]"
    />
  </div>

  {/* Bigger Mobile Frame */}
  <div className="absolute -right-0 top-0 w-[320px] border-[14px] border-black rounded-[2.5rem] overflow-hidden shadow-2xl bg-black">
    <iframe
      src="https://harshrajsinh-two.vercel.app/"
      scrolling="no"
      className="w-full h-[550px]"
    />
  </div>
</div>

            </div>
            
            <p>Description</p>

        </div>
    )
}

export default Slide