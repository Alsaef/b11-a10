import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { ToastContainer, toast } from 'react-toastify';
import AddPage from './Pages/AddPage.jsx';
import BrowseListings from './Pages/BrowseListings.jsx';
import RoommateDetails from './Pages/RoommateDetails.jsx';
import Private from './Private/Private.jsx';
import MyList from './Pages/MyList.jsx';
import EditPage from './Pages/EditPage.jsx';
import NotFoundPage from './Pages/NotFoundPage.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Contact from './Pages/Contact.jsx';
import DashboardRoot from './Root/DashboardRoot.jsx';
import Overview from './Pages/Overview.jsx';
import AllItem from './Pages/AllItem.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>, children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/browse",
        element: <BrowseListings></BrowseListings>,
      },
      {
        path: "/details/:id",
        element: <RoommateDetails></RoommateDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ]
  },
  {
    path: 'dashboard',
    element: <Private><DashboardRoot></DashboardRoot></Private>,
    children: [
      {
        index: true,
        element: <Overview></Overview>
      },
      {
        path: "/dashboard/add-roommate-post",
        element: <AddPage></AddPage>
      },
      {
        path: "/dashboard/my-posts",
        element: <MyList></MyList>
      },
      {
        path: "/dashboard/all-aoommates",
        element: <AllItem></AllItem>
      },
         {
        path: "/dashboard/edit/:id",
        element:<EditPage ></EditPage>,
        loader: ({ params }) => fetch(`https://server-10-nu.vercel.app/api/v2/roommates/${params.id}`)
      },

    ]
  },
  {
    path: '*',
    element: <NotFoundPage></NotFoundPage>
  }
]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
