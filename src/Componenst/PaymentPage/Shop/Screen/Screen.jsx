import React from 'react';
import cl from './Screen.module.scss'

const Screen = ({payRequestAnswer, result}) => {
    return (
        <div className={cl.wrapper}>
            <h2> Обмен данными </h2>
            <div className={cl.screenField}>
                <div className={cl.screen}>
                    <h4>Ответ на запрос о проведении платежа</h4>
                    <div>{payRequestAnswer}</div> 
                </div>
                <div className={cl.screen}>
                    <h4>Сообшение о результате платежа</h4>
                    <div>{result}</div> 
                </div>
            </div>
            
        </div>
    );
};

export default Screen;