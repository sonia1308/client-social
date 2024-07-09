
import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <>
    <div className="lg:w-[50%] md:w-[60%] sm:w-[65%] lg:flex md:flex sm:flex hidden">
        <input type="search" name="search" id="search" className="py-3 px-3 border border-solid border-[#dfdfe2] bg-[#FAFAFB] placeholder:text-[#92929D] placeholder:text-sm rounded-2xl w-full" placeholder="Search" />
    </div>
    <div className="lg:hidden md:hidden sm:hidden block">
        <CiSearch size={24} />
    </div>
    </>
  )
}
