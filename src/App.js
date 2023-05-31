import './App.module.scss';
import { useEffect } from 'react';
import PaymentWidget from './Componenst/Widget/PaymentWidget';
import { Outlet, Link } from "react-router-dom";
import cl from './App.module.scss'
import {useNavigate, useLocation} from "react-router-dom";
import Header from './Componenst/Common/Header/Header';



function App() {

  let location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    if(location.pathname == '/') navigate('/home')
  },[])

  

  return (
    <div className="App">
      <Header/>
      <Outlet />
    </div>
  );
}

export default App;
