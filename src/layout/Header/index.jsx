import Logo from "./components/logo";
import Search from "./components/search";

import ProfileDown from "./components/profile";
import Bildiris from "./components/Bildiris";

export default function Header() {
  return (
    <div className="flex items-center py-4 px-5 justify-between">
        <div className="flex items-center gap-3 w-full">
        <Logo />
        <Search />
        </div>
      <div className="flex items-center gap-4">
        <Bildiris />
        <ProfileDown />
      </div>
    </div>
  );
}
