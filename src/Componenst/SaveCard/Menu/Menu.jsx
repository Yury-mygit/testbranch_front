import React from 'react';
import cl from './Menu.module.scss'

const Menu = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <ul >
                    <li><a href = '#title'>Описание</a></li>
                    <li><a href = '#example'>Пример реализации</a></li>
                    <li><a href = '#listing'>Листинг</a></li>
                </ul>
            </div>
           
        </div>
    );
};

export default Menu;