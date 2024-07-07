import { useParams } from "react-router-dom"


export default function Details() {
    const {id,slug} =useParams()
  return (
    <div>Details id:{id}/slug:{slug}</div>
  )
}
