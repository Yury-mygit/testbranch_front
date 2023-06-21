import React from 'react';
import {adapter, mdCheck, pareqCheck} from "../../../library/library"
import cl from './PayAfter3DS.module.scss'

import ScreenRequest from '../../Common/ScreenRequest/ScreenRequest';
import ScreenResponse from '../../Common/ScreenResponse/ScreenResponse';

const PayAfter3DS = ({
    paramsForPay, 
    payBefore3dsResponse, 
    payAfter3dsResponse, 
    paresResponse, 
    sigPayAfter3DS,
    doPayAfter3DS
}) => {
    return (
        <div className={cl.wrapper}>
            <div>
                <h4>Проведение платежа </h4>
                <div>
                    После прохождения 3DS и получения pares, мозможно провести сам платеж. Для этого, на url <br /> 
                    https://api.paybox.money/g2g/paymentAcs
                </div>
            </div>



            <div className={cl.content}>

            <ScreenRequest params = {
            [
                {'name':'MD',             'data':adapter(payBefore3dsResponse,['data','pg_3d_md'])},
                {'name':'pg_3d_pares',    'data':adapter(paresResponse, ['data','pg_3d_pares'])},
                {'name':'pg_payment_id:', 'data': adapter(payBefore3dsResponse, ['data','pg_payment_id'])},
                {'name':'pg_merchant_id', 'data': paramsForPay.find((value) => {return value.inputID=='pg_merchant_id'}).data},
                {'name':'pg_salt',        'data': 'abcde'},
                {'name':'pg_sig:',        'data': sigPayAfter3DS(
                    {
                        'pg_3d_md':mdCheck(payBefore3dsResponse),
                        'pg_3d_pares':adapter(payBefore3dsResponse,['data','pg_3d_pares']),
                        'pg_payment_id':adapter(payBefore3dsResponse,['data','pg_3d_md']),
                        'pg_merchant_id':paramsForPay.find((value) => {return value.inputID=='pg_merchant_id'}).data,
                        'pg_salt':'abcde',
                    },
                    'paymentAcs',
                    paramsForPay.find((value) => {return value.inputID=='secret_key'}).data

                )},
            ]}
            />

            <ScreenResponse                            
            view ={ payAfter3dsResponse.isSuccess && !payAfter3dsResponse.isUninitialized 
                    ? payAfter3dsResponse.data.xml
                    : undefined}
            
            />



            </div>
            
            <button
            onClick={()=>doPayAfter3DS()}
            >Провести платеж после завершения 3ДС</button>

        </div>
    );
};

export default PayAfter3DS;