import { useEffect, useRef, useState } from "react"


const Nav = () => {
  const tabs = ["Home", "Projects", "About", "Contact"];
  const [activeTab, setActiveTab] = useState(0);

  const tabsRef = useRef([]);
  const pillRef = useRef(null);

  useEffect(() => {
    const el = tabsRef.current[activeTab];
    if (!el || !pillRef.current) return;

    pillRef.current.style.width = `${el.offsetWidth}px`;
    pillRef.current.style.height = `${el.offsetHeight}px`;
    pillRef.current.style.transform = `translate(${el.offsetLeft}px, ${el.offsetTop}px)`;
  }, [activeTab]);

  return (
    <nav className="relative flex border  border-black/20 bg-white/50 backdrop-blur-xs rounded-full gap-2 text-sm">
      <div
        ref={pillRef}
        className="absolute bg-black/10 rounded-full transition-all duration-300 pointer-events-none"
      />

      {tabs.map((item, i) => (
        <a
          key={i}
          ref={(el) => (tabsRef.current[i] = el)}
          href={`#${item.toLowerCase()}`}
          onClick={() => setActiveTab(i)}
          className="relative z-10 px-5 py-2 outline-none font-medium text-black/50 hover:text-black"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
