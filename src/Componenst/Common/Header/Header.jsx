import React from 'react';
import cl from './Header.module.scss'
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    let location = useLocation()
    let positions 

    switch (location.pathname.slice(1)) {
        case 'value':
            
            break;
    
        default: 
            break;
    }
    // console.log(location.pathname.slice(1))
    return (
        <div className={cl.wrapper}>
            <Link to={`/home`}  className={cl.link} style={s}>     Главная</Link>
            <Link to={`/sig`}  className={cl.link} style={s}>     Проверка подписи</Link>
            <Link to={`/testenv`}  className={cl.link} style={s}>     Тестовая среда</Link>
           
            <MyComponent></MyComponent>

            <div>
                {/* {location} */}
            </div>


        </div>
    );
};

export default Header;

let s = {
    color:'black',
    // textDe
}


function MyComponent() {
    const [isHovered, setIsHovered] = React.useState(false);
    
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    
    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={()=>{}}>
            {/* <span className={cl.link}>Интерактивные платежи</span> */}
            <Link to={`/interactivepayments`}  className={cl.link} style={s}>Интерактивные платежи</Link>
            {isHovered ? (
                <div className={cl.list} onMouseLeave={()=>{handleMouseLeave()}}>
                
                <ul  >
                    <li><Link to={`/page`} className={cl.link} style={s}>      Страница</Link></li>
                    <li><Link to={`/widget`} className={cl.link} style={s}>    Виджет</Link></li>
                    <li><Link to={`/sdk`} className={cl.link} style={s}>       SDK</Link></li>
                    <li><Link to={`/card_save`} className={cl.link} style={s}> Сохранение карт</Link></li>
                    <li><Link to={`/reсurrent`} className={cl.link} style={s}> Реккуренты</Link></li>
                    <li><Link to={`/direct`} className={cl.link} style={s}>    Безакцепты</Link></li>
                    <li><Link to={`/g2g`} className={cl.link} style={s}>       Г2Г</Link></li>
                </ul>
                </div>  

            ) : null}
        </div>
    );
}