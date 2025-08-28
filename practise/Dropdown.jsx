import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Dropdown() {
  const [sidebar, setsidebar] = useState(false)
  const sidebarRef = useRef(null)

  useEffect(()=>{
    function handleClickOutside(e){
      if(sidebarRef.current && !sidebarRef.current.contains(e.target){
        setsidebar(false)
      })
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div>
      <div className="border max-w-[200px] relative">
        <button onClick={()=> setsidebar(!sidebar)}>{sidebar? <FaTimes/>: <FaBars/>}</button>
        <div ref={sidebarRef} className={`border leading-10 absolute top-full w-full tansform transition-transform duration-300 ${sidebar ? "translate-x-0" : "-translate-x-full"}`}>
          <ul>
            <li>Home </li>
            <li>About</li>
            <li>Contact</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
