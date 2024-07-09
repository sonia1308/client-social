
import Sidebar from '../components/Sidebar'
import Header from './Header'
import RightSidebar from '../components/Suggested'
import { Outlet } from 'react-router-dom'

export default function MainLaoyut() {
  return (
    <div className='bg-[#FAFAFB]'>
    <Header />
    <div className='flex mr-4 gap-3'>
    <Sidebar />
    <Outlet />
    <RightSidebar />
    </div>
    </div>
  )
}
