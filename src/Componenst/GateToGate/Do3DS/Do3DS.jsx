import React from 'react';
import cl from './Do3DS.module.scss'
import { adapter, mdCheck, pareqCheck } from '../../../library/library';

import Form3ds from './Form3ds/Form3ds';

const Do3DS = ({payBefore3dsResponse, paresResponse, sendUserTo3DS}) => {

    let params = {
        "md" :            mdCheck(payBefore3dsResponse),
        'pg_3d_pareq':    pareqCheck(payBefore3dsResponse),
        'TermUrl':adapter(payBefore3dsResponse, ['data','TermUrl']),
        }
    let url = adapter(payBefore3dsResponse, ['data','pg_3d_acsurl'])

    return (
        <div className={cl.chapter}>
       
            <div className={cl.description}>
                <h4>Отправить запрос на 3DS на сервер платежной системы</h4>
                <p>
                На данном этапе нужно показать пользователю форму, в которую будут забиры паоаметры, полученные на предыдушем этапе. 
                Форма может быть простой и выполнять автосабмит. Делается это для того, чтобы в ответ на субмит формы получит редирект
                на страничцу ввода OTP. Сабмит формы выполняется методом пост по ссылке из pg_3d_acsurl полученной в предыдушем запросе. 
                </p>
                <p>
                TermUrl - ссылка, на которую вернется сообщение с параметрами md и PaRes после успешного 3DS
                </p>  
            </div>
             
            <div className={cl.content}>
                <Form3ds
                    params = {params}
                    url 
                    sendUserTo3DS = {sendUserTo3DS}
                />     

            </div>
             
            {/* <button
                onClick={()=>sendUserTo3DS()}
                >Пройти по сылке выполнить 3DS
            </button> */}
            {/* <div>После выполнения запроса и проходжения 3дс запрашиваем pares </div> */}         
        
        
        </div> 
    );
};

export default Do3DS;