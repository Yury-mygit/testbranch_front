import React from 'react';
import cl from './PayBefore3DS.module.scss'
import { filter } from '../../../library/library';

import DeskriptionPay3DS from './DeskriptionPay3DS/DeskriptionPay3DS';
import Form from '../../Common/Form/Form';
import ScreenRequest from '../../Common/ScreenRequest/ScreenRequest';
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
            
            {/* <ScreenRequest 
                params = {
                    paramsForPay.filter(item=>item.checked).map((item)=>{
                        return({'name':item.inputID, 'data':item.data})
                    })
                    }
                url = 'https://api.paybox.money/g2g/payment'
                /> */}
                
           
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