import React from 'react';
import cl from './InteractivePayments.module.scss'
import { Link, useLocation } from "react-router-dom";

const InteractivePayments = () => {
    return (
        <div>
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
    );
};

export default InteractivePayments;

let s = {
    color:'black',
    // textDe
}
