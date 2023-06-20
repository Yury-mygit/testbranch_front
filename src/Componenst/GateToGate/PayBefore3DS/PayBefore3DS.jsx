import React from 'react';
import cl from './PayBefore3DS.module.scss'
import DeskriptionPay3DS from './DeskriptionPay3DS/DeskriptionPay3DS';
import Form from '../../Common/Form/Form';
import ScreenResponse from '../../Common/ScreenResponse/ScreenResponse';

const PayBefore3DS = ({paramsForPay, setParamsForPay, xml, doPayBefore3DS}) => {
    return (
        <div className={cl.wrapper}>
        <DeskriptionPay3DS />
        <div className={cl.content}>
            <Form 
                status={paramsForPay} 
                setStatus={setParamsForPay} 
            /> 
           
            <ScreenResponse                            
                xml = {xml}
            />
           
        </div>

       
            <button
            onClick={()=>doPayBefore3DS()}
            >Отправить первичный запрос на проведение платежа
            </button>
           
            
        

    </div>
    );
};

export default PayBefore3DS;