import { HiDotsHorizontal } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiSave2Line } from "react-icons/ri";
export default function TimeLineCard() {
  return (
    <div className="bg-[#1C1C24] rounded-2xl py-5 px-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-500" />
          <div>
            <h4 className="text-[#FAFAFB] text-sm font-semibold">Eltaj Mammmadzada</h4>
            <span className="text-[#696974] text-xs font-normal">12 April at 09.28 PM</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
        <HiDotsHorizontal color="#92929D" size={24} />
        <CiStar size={24} color="#92929D"  />    
        </div>
      </div>
      <div>
        <p className="text-[#B5B5BE]">A Great Way To Generate All The Motivation You Need To Get Fit</p>
       <div><span className="text-blue-500">Project url:</span> <Link className="text-blue-300" to={'/'}>https://github.com/</Link></div>
       <div className="flex items-center gap-3 py-3">
        <span className="bg-blue-300 text-blue-500 py-1 px-1 rounded-md">nodejs</span>
        <span className="bg-blue-300 text-blue-500 py-1 px-1 rounded-md">javascript</span>
        <span className="bg-blue-300 text-blue-500 py-1 px-1 rounded-md">php</span>
        <span className="bg-blue-300 text-blue-500 py-1 px-1 rounded-md">angular</span>
        <span className="bg-blue-300 text-blue-500 py-1 px-1 rounded-md">typescript</span>
       </div>
      </div>
      <div className="flex items-center gap-6 py-5 border-t border-b border-l-0 border-r-0 border-solid border-[#292932]">
       <div className="flex items-center gap-3">
       <FaRegCommentAlt size={24} color="#92929D"/>
        <span className="text-[#D5D5DC] text-sm font-normal">7 comments</span>
       </div>
       <div className="flex items-center gap-3">
       <RiSave2Line size={24} color="#92929D"/>
        <span className="text-[#D5D5DC] text-sm font-normal">saved</span>
       </div>
      </div>
      <div className="flex items-center gap-2 pt-3">
        <div className="w-10 h-10 rounded-full bg-red-500"></div>
        <input type="text" placeholder="Write your comment…" className="rounded-[19px] border border-[#F1F1F5] border-solid bg-[#FAFAFB] py-3 px-3 w-full outline-none focus:border-blue-500 placeholder:text-[#92929D] placeholder:text-sm placeholder:font-normal" />
      </div>
    </div>
  );
}