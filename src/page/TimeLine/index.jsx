 import TimeLineCard from "../../components/TimlineCard";


 export default function Timeline() {
   return (
     <div className="flex-1 py-5 overflow-y-auto h-[calc(100vh-82px)]">
       <TimeLineCard />
     </div>
   )
 }

// import { VList } from "virtua";

// export default function Timeline() {
//   return (
//     <VList style={{ height: 800 }}>
//     {Array.from({ length: 1000 }).map((_, i) => (
//       <div
//         key={i}
//         style={{
//           height: Math.floor(Math.random() * 10) * 10 + 10,
//           borderBottom: "solid 1px gray",
//           background: "white",
//         }}
//       >
//         {i}
//       </div>
//     ))}
//   </VList>
//   )
// }

