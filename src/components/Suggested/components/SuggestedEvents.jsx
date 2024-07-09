import { BsCalendarEvent } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
export default function SuggestedEvents() {
  return (
    <div className="my-4 py-5 bg-white rounded-lg">
      <div>
        <span className="flex px-3 items-center gap-2 text-[#171725] text-sm font-normal tracking-[0.1px] border-b border-t-0 border-l-0 border-r-0 pb-2 border-solid border-[#F1F1F5]">Events</span>
        <span className="flex px-3 items-center gap-2 text-[#171725] text-sm font-normal tracking-[0.2px] py-1"><BsCalendarEvent /> 10 Events invites</span>
        <span className="flex px-3 items-center gap-2 text-[#171725] text-sm font-normal tracking-[0.2px] py-1"><FaBirthdayCake /> Prada’s Invitation Birthday</span>
      </div>
    </div>
  )
}
