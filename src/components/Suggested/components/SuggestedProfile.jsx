import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";

export default function SuggestedProfile() {
  return (
    <div className="w-[330px] bg-white py-3 mb-3 rounded-lg">
      <div className="flex px-5 py-2 items-center justify-between border-b border-t-0 border-l-0 border-r-0 border-solid border-[#F1F1F5]">
        <span className="text-sm font-normal">Suggested Developer</span>
        <Link to={'/'} className="text-[#0062FF] text-xs font-normal">SEE ALL</Link>
      </div>

      <Link to={'/'}>
      <div className="px-5 flex items-center justify-between">
      <div className="my-3 flex items-center gap-2">
        <div className="w-10 h-10 bg-red-500 rounded-full"></div>
         <div className="flex flex-col">
          <span className="text-[#171725] text-sm font-semibold">Eltaj Mammadzada</span>
          <span className="text-[#92929D] text-xs font-normal">@eltajmammadzada</span>
         </div>
      </div>
      <CiStar size={24} />
      </div>
      </Link>
      <Link to={'/'}>
      <div className="px-5 flex items-center justify-between">
      <div className="my-3 flex items-center gap-2">
        <div className="w-10 h-10 bg-red-500 rounded-full"></div>
         <div className="flex flex-col">
          <span className="text-[#171725] text-sm font-semibold">Eltaj Mammadzada</span>
          <span className="text-[#92929D] text-xs font-normal">@eltajmammadzada</span>
         </div>
      </div>
      <CiStar size={24} />
      </div>
      </Link>
      <Link to={'/'}>
      <div className="px-5 flex items-center justify-between">
      <div className="my-3 flex items-center gap-2">
        <div className="w-10 h-10 bg-red-500 rounded-full"></div>
         <div className="flex flex-col">
          <span className="text-[#171725] text-sm font-semibold">Eltaj Mammadzada</span>
          <span className="text-[#92929D] text-xs font-normal">@eltajmammadzada</span>
         </div>
      </div>
      <CiStar size={24} />
      </div>
      </Link>
    </div>
  )
}
