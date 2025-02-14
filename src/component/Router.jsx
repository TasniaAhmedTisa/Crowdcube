import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './Home';
import Campaign from './Campaign';
import NewCamp from './NewCamp';
import MyCamp from './MyCamp';
import Donation from './Donation';
import Login from './Login';
import Registation from './Registation';
import Error from './Error';
import Details from './Details';
import Update from './Update';

const Router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"camp",
                element:<Campaign></Campaign>,
                loader: () => fetch('https://my-project-10-server.vercel.app/addcampaign')
            },
            {
                path:"addcamp",
                element:<NewCamp></NewCamp>
            },
            {
                path:"/my-campaigns",
                element:<MyCamp></MyCamp>,
                loader: () => fetch('https://my-project-10-server.vercel.app/my-campaigns')
            },
            {
                path:"/my-donations",
                element:<Donation></Donation>
            },
            {
                path:"/login",
                element:<Login></Login>,
            },
            {
                path:"/register",
                element:<Registation></Registation>
            },
            {
                path:"/campaign-details/:id",
                element:<Details></Details>
            },
            {
                path:"/update-campaign/:id",
                element:<Update></Update>
            }

        ]

    },
    {
        path:"*",
        element:<Error></Error>,
    }

]) 

export default Router;