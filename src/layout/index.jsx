
import Sidebar from '../components/Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function MainLaoyut() {
  return (
    <div className='bg-[#FAFAFB]'>
    <Header />
    <div className='flex gap-3'>
    <Sidebar />
    <Outlet />
    </div>
    </div>
  )
}
