import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ProfileDown() {
    const [open,setOpen]=useState(false)

  return (
    <>
    <div className="flex items-center gap-1 relative"  onClick={() => setOpen(!open)}>
        <div className="w-5 h-5 bg-red-500 rounded-full"></div>
        <IoIosArrowDown size={16} />

    {open && (
        <div className=" absolute top-8 bg-red-400 w-[200px] py-4 px-3 left-[-170px] flex flex-col gap-3 rounded-lg">
          <Link to={'/profile'}>Eltaj Mammadzada</Link>
          <Link to={'/settings'}>Settings</Link>
          <Link to={'/help'}>Help</Link>
          <Link to={'/logout'}>Log Out</Link>
        </div>
      )}
      </div>
    </>
  )
}
