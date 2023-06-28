import React from 'react';
import cl from './Shop.module.scss'
import {AutoResizableTextarea} from '../../Common/AutoResizableTextarea/AutoResizableTextarea'
import Screen from './Screen/Screen';
import Form from '../../Common/Form/Form';
import DemoShop from './DemoShop/DemoShop';
import ScreenRequest from '../../Common/ScreenRequest/ScreenRequest';
import ScreenResponse from '../../Common/ScreenResponse/ScreenResponse';

const Shop = ({
    pay,
    amount, 
    setAmount, 
    payRequestAnswer, 
    
    payStart, 
    payStop,

    paramsForPay, 
    setParamsForPay,
    sig
}) => {
    return (
        <div className={cl.wrapper}>
            <h3 className={cl.title}>Пример реализации.</h3>
            <div className={cl.process}>
                <DemoShop 
                    setAmount={setAmount}
                />
                
                <Form 
                                status={paramsForPay} 
                                setStatus={setParamsForPay}
                                sig = {sig} 
                            />


                <ScreenRequest
                    params = {paramsForPay} 
                />

                

                <ScreenResponse 
                    view={
                        payRequestAnswer.isSuccess && !payRequestAnswer.isUninitialized 
                        ?payRequestAnswer.data.xml
                        : undefined
                    }
                />
            </div>
            
            
            <div className={cl.actionButtons}>
                <button
                    onClick={()=>payStart(amount)}
                > Оплатить {amount} рублей
                </button>
           
                <button
                    onClick={()=>payStop()}
                >
                    Сбросить
                </button>
            </div>
        </div>
    );
};

export default Shop;