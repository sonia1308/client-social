import Logo from "./components/logo";
import Search from "./components/search";

import ProfileDown from "./components/profile";
import Bildiris from "./components/Bildiris";
import { FaBars } from "react-icons/fa"

export default function Header() {
  return (
    <header className="flex items-center py-4 px-5 justify-between bg-[#FFF] shadow-header">
        <div className="flex items-center gap-3 w-full">
        <Logo />
        <Search />
        </div>
      <div className="flex items-center gap-4">
        <FaBars size={24} className="lg:hidden block" />
        <Bildiris />
        <ProfileDown />
      </div>
    </header>
  );
}
