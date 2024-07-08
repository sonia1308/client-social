import { createBrowserRouter } from "react-router-dom";
import Notfound from "../page/Notfound";
import Group from "../page/Group";
import Articles from "../page/Articles";
import Details from "../page/Articles/details";
import Timeline from "../page/TimeLine";
import Events from "../page/Events";
import Forums from "../page/Forums";
import Profile from "../page/Profile";
import Trends from "../page/Trends";
import Friends from "../page/Friends";
import Courses from "../page/Coures";
import Challenges from "../page/Challenges";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Forget from "../auth/Forget";



const routes =createBrowserRouter([
    {
        path:'/',
        element:<Timeline />,
    },
    {
        path:'/login',
        element:<Login />,
    },
    {
        path:'/register',
        element:<Register />,
    },
    {
        path:'/forget',
        element:<Forget />,
    },
    {
        path:'/group',
        element:<Group />,
    },
    {
        path:'/event',
        element:<Events />,
    },
    {
        path:'/forums',
        element:<Forums />,
    },
    {
        path:'/profile',
        element:<Profile />,
    },
    {
        path:'/trends',
        element:<Trends />,
    },
    {
        path:'/friends',
        element:<Friends />,
    },
    {
        path:'/courses',
        element:<Courses />,
    },
    {
        path:'/challenges',
        element:<Challenges />,
    },
    {
        path:'/blog',
        element:<Articles />,
    },
    {
        path:'/blog/:id/:slug',
        element:<Details />,
    },
    {
        path:'*',
        element:<Notfound />,
    }
])


export default routes