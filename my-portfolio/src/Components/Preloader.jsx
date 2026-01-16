import React from 'react'
import { assets } from '../assets/assets'

const Preloader = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-screen bg-[#F9FAF8] flex items-center justify-center z-[1000]'>
            <img src={assets.preloaderGif} alt="Harshrajsinh Gohil"
                className='h-60 w-60 object-contain'
            />
        </div>
    )
}

export default Preloader    