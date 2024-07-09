import SidebarLinks from "./SidebarLinks";
import { FaArrowTrendUp } from "react-icons/fa6";
import { SiCoursera } from "react-icons/si";
import { FaLayerGroup,FaBlog,FaUserFriends } from "react-icons/fa";
import { MdEventAvailable,MdForum,MdOutlineDesignServices,MdOutlineFeed } from "react-icons/md";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <aside className="h-[calc(100vh-82px)] w-[calc(10vw+90px)] flex-col lg:flex hidden py-3 pl-3 bg-[#FFF]">
      <Link to={'/profile'} className="py-5">
      <div className="flex flex-col">
        <span className="text-[#171725] text-sm font-semibold">Eltaj Mammadzada</span>
        <span className="text-[#92929D] text-xs font-normal">@eltajmammadzada</span>
      </div>
      </Link>
      <SidebarLinks href={'/'} content={'Feed'} icon={<MdOutlineFeed size={20} color="#92929D" />} />
      <SidebarLinks href={'/trends'} content={'Trends'} icon={<FaArrowTrendUp size={20} color="#92929D" />} />
      <SidebarLinks href={'/friends'} content={'Friends'} icon={<FaUserFriends size={20} color="#92929D" />} />
      <SidebarLinks href={'/courses'} content={'Courses'} icon={<SiCoursera size={20} color="#92929D" />} />
      <SidebarLinks href={'/challenges'} content={'UI design'} icon={<MdOutlineDesignServices size={20} color="#92929D" />} />
      <SidebarLinks href={'/event'} content={'Events'} icon={<MdEventAvailable size={20} color="#92929D" />} />
      <SidebarLinks href={'/group'} content={'Group'} icon={<FaLayerGroup size={20} color="#92929D" />} />
      <SidebarLinks href={'/blog'} content={'Blog'} icon={<FaBlog size={20} color="#92929D" />} />
      <SidebarLinks href={'/forums'} content={'Forums'} icon={<MdForum size={20} color="#92929D" />} />
    </aside>
  )
}
