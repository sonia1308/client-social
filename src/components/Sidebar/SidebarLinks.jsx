import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

export default function SidebarLinks({href,content,icon,...props}) {
  return (
    <Link to={href} {...props} className='flex items-center gap-5 text-[#171725] text-sm font-semibold capitalize py-4 mb-1'>{icon}{content}</Link>
  )
}

SidebarLinks.propTypes ={
    href:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired,
    props:PropTypes.object
}