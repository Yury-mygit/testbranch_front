import React from 'react';
import cl from './Screen.module.scss'

const Screen = ({inputEl}) => {
    return (
        <div className={cl.wrapper}>
            <h2> Обмен данными </h2>
            <div ref={inputEl}></div>
        </div>
    );
};

export default Screen;