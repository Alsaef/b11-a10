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


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>, children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element:<Private><AddPage></AddPage></Private>,
      },
      {
        path: "/browse",
        element: <BrowseListings></BrowseListings>,
      },
      {
        path: "/details/:id",
        element: <Private><RoommateDetails></RoommateDetails></Private>,
      },
      {
        path: "/my-listings",
        element: <div>My Listings</div>,
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
  }
]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer/>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
