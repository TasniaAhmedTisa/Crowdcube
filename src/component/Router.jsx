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
                loader: () => fetch('http://localhost:5000/addcampaign')
            },
            {
                path:"addcamp",
                element:<NewCamp></NewCamp>
            },
            {
                path:"/my-campaigns",
                element:<MyCamp></MyCamp>
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
            }

        ]

    },
    {
        path:"*",
        element:<Error></Error>,
    }

]) 

export default Router;