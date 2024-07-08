import SuggestedEvents from "./components/SuggestedEvents";
import SuggestedProfile from "./components/SuggestedProfile";
import SuggestedUI from "./components/SuggestedUI";


export default function RightSidebar() {
  return (
    <div className="pt-4">
        <SuggestedProfile />
        <SuggestedUI />
        <SuggestedEvents />
    </div>
  )
}
