import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";

export default function Bildiris() {
  const [open,setOpen]=useState(false)
  return (
    <div onClick={() => setOpen(!open)} className=" relative">
      <IoIosNotifications size={24} />
      {open && (
        <div className=" absolute top-8 bg-red-400 w-[200px] py-4 px-3 left-[-170px] flex flex-col gap-3 rounded-lg">
          <span>notifation</span>
        </div>
      )}
    </div>
  )
}
