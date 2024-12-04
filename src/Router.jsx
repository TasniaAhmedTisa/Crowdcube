import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './component/MainLayout';

const Router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                

            }
        ]
            
    }

])
export default Router;