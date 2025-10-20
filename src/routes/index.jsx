import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage';
import OurServicess from '../pages/OurServices';
import Catalogs from '../pages/Catalogs';
import Sites from '../pages/Sites';
import Photo from '../pages/Photo';
import Contacts from '../pages/Contacts';
import '../scss/styles.scss';
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
   {
    path: '/ourservices',
    element: <OurServicess />,
  },
  {
    path: '/catalogs',
    element: <Catalogs />,
  },
  {
    path: '/sites',
    element: <Sites />,
  },
  {
    path: '/photo',
    element: <Photo />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
  }

]);