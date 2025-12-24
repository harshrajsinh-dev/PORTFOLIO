import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


const MobileNav = () => {
    const tabs = ["Home", "Projects", "About", "Contact"];

    const [visible, setVisible] = useState(false);

    return (
        <div className='fixed top-0 right-0 flex md:hidden p-4 py-5'>
            <GiHamburgerMenu className="text-3xl" onClick={() => setVisible(!visible)} />
            <div className={`py-5 px-7 w-[70vw] bg-blue-100 h-screen fixed top-0 ${visible ? 'right-0' : '-right-full'}  transition-all duration-300`}>
                <div className="flex justify-end">
                    <div className=" text-4xl p-2  bg-gray-900 text-white rounded-full w-fit" onClick={() => setVisible(!visible)}>
                        <IoMdClose />
                    </div>
                </div>
                <div className="flex flex-col gap-5 text-2xl">
                    {tabs.map((item, i) => (
                        <a
                            key={i}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setVisible(!visible)}
                            className=" px-5 py-2 outline-none font-medium text-black"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>  

        </div>
    )
}

export default MobileNav