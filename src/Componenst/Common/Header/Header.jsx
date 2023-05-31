import React from 'react';
import cl from './Header.module.scss'
import {  Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={cl.wrapper}>
            <Link to={`/home`}  className={cl.link}>     Главная</Link>
            <Link to={`/page`} className={cl.link}>      Страница</Link>
            <Link to={`/widget`} className={cl.link}>    Виджет</Link>
            <Link to={`/sdk`} className={cl.link}>    SDK</Link>
            {/* <Link to={`/frame`} className={cl.link}>     Фрейм</Link> */}
            
            
            <Link to={`/card_save`} className={cl.link}> Сохранение карт</Link>
            <Link to={`/reсurrent`} className={cl.link}> Реккуренты</Link>
            <Link to={`/direct`} className={cl.link}> Безакцепты</Link>

            {/* <Link to={`/cms`} className={cl.link}> Готовые модулм</Link> */}
            {/* <Link to={`/cms`} className={cl.link}> Телеграм</Link> */}
            <Link to={`/g2g`} className={cl.link}> Г2Г</Link>
            
        </div>
    );
};

export default Header;