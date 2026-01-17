import React from "react";
import { assets } from "../assets/assets";
import "./../index.css";
const Preloader = () => {
    return (

        //     <div className="main-circle fixed inset-0 bg-[#F9FAF8] flex items-center justify-center z-[1000]">


        //         <div className="main-chain relative h-52 w-52 flex items-center justify-center">

        //             {/* Yeh SVG border draw karshe */}
        //             <svg width="210" height="210" viewBox="0 0 210 210" className="h-full w-full">
        //                 <defs>
        //                     <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        //                         <stop offset="0%" stopColor="#7dd3fc" />   {/* sky-300 */}
        //                         <stop offset="100%" stopColor="#4f46e5" /> {/* indigo-600 */}
        //                     </linearGradient>
        //                 </defs>
        //                 <circle
        //                     cx="105"
        //                     cy="105"
        //                     r="100"
        //                     stroke="url(#circleGradient)"
        //                     strokeWidth="4"
        //                     fill="none"
        //                     // Animation properties directly inline
        //                     style={{
        //                         strokeDasharray: 628, // Circle ni total length
        //                         strokeDashoffset: 628, // Pehle hide karo
        //                         animation: 'draw-border 2.5s ease-out forwards' // Animation apply karo
        //                     }}
        //                 />
        //             </svg>


        //             {/* Center GIF - Badha par display thase */}
        //             <img
        //                 src={assets.preloaderGif}
        //                 alt="Harshrajsinh Gohil"
        //                 className="relative z-10 h-48 w-48 object-contain rounded-full"
        //             />

        //         </div>

        //         {/* Keyframes mate style tag - no config needed */}
        //         <style>{`
        //     @keyframes draw-border {
        //         to {
        //             stroke-dashoffset: 0;
        //         }
        //     }
        // `}</style>
        //     </div>
        <div className="main-circle fixed inset-0 bg-[#F9FAF8] flex items-center justify-center z-[1000] flex-col gap-10">
            <div className="relative h-56 w-56 flex items-center justify-center">

                {/* SVG Border */}
                <svg
                    viewBox="0 0 210 210"
                    className="absolute inset-0 h-full w-full"
                    style={{ rotate: "-90deg" }}
                >
                    <defs>
                        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7dd3fc" />
                            <stop offset="100%" stopColor="#4f46e5" />
                        </linearGradient>
                    </defs>

                    <circle
                        cx="105"
                        cy="105"
                        r="100"
                        stroke="url(#circleGradient)"
                        strokeWidth="4"
                        fill="none"
                        style={{
                            strokeDasharray: 628,
                            strokeDashoffset: 628,
                            animation: "draw-border 2.5s ease-out forwards",
                        }}
                    />
                </svg>

                {/* Center GIF */}
                <img
                    src={assets.preloaderGif}
                    alt="Harshrajsinh Gohil"
                    className="relative z-10 h-48 w-48 object-contain rounded-full"
                />
            </div>

            {/* Animation */}
            <style>{`
    @keyframes draw-border {
      to {
        stroke-dashoffset: 0;
      }
    }
  `}</style>

            asdf
        </div>

    );
};

export default Preloader;
