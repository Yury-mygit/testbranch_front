import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import ErrorPage from './Componenst/ErrorPage/ErrorPage';
import PaymentWidget from './Componenst/Widget/PaymentWidget';
import Page from './Componenst/PaymentPage/Page';
import Kit from './Componenst/Kit/Kit'
import Frame from './Componenst/Frame/Frame'
import SaveCard from './Componenst/SaveCard/SaveCard';
import Home from './Componenst/Home/Home';
import Sig from './Componenst/Sig/Sig';
import Env from './Componenst/Env/Env';
import GateToGate from './Componenst/GateToGate/GateToGate'
import {useNavigate, useLocation} from "react-router-dom";
import { Provider } from 'react-redux';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { store } from './store/store';
import Cms from './Componenst/Cms/Cms';
import Recurrent from './Componenst/Recurrent/Recurrent';
import Direct from './Componenst/Direct/Direct';



const NavToMain = () => {
   const navigate = useNavigate(); 
}

const router = createBrowserRouter([
    {
      path: "/",
      //   element: <div>Hello sdsworld!</div>,
      element: <App/>,
      errorElement: <ErrorPage />,
      children:[
        {
            path:"/home",
            element: <Home/>,
        },
        {
            path:"/sig",
            element: <Sig/>,
        },
        {
            path:"/testenv",
            element: <Env/>,
        },
        {
            path:"/page",
            element: <Page/>,
        },
        {
            path:"/widget",
            element: <PaymentWidget/>,
        },
        {
            path:"/card_save",
            element: <SaveCard/>,
        },
        {
            path:"/frame",
            element: <Frame />,
        },
        {
            path:"/cms",
            element: <Cms/>,
        },
        {
            path:"/sdk",
            element: <Kit/>,
        },
        {
            path:"/g2g",
            element: <GateToGate/>,
        },
        {
            path:"/reсurrent",
            element: <Recurrent/>,
        },
        {
            path:"/direct",
            element: <Direct/>,
        },

      ],
    },
    {
      path: "/widget",
      //   element: <div>Hello sdsworld!</div>,
      element: <App/>,
      errorElement: <ErrorPage />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>    
      <RouterProvider router={router} />
    </Provider>
);

