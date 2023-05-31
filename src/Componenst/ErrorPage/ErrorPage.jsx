import React, { useEffect } from 'react';
import { useRouteError } from "react-router-dom"
import {useNavigate, useLocation} from "react-router-dom";



const ErrorPage = () => {

    const navigate = useNavigate();
    useEffect(()=>{
        setInterval(()=>navigate('/home'),5000)
    },[])

    const error = useRouteError();
    // console.error(error);
    return (
        <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p>Вы будите перенаправлены на главнус страницу через 5 минут</p>
      </div>
    );
};

export default ErrorPage;