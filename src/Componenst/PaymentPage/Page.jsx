import React,{useState,useRef, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import cl from './Page.module.scss'
import Shop from './Shop/Shop';
import Desc from './Desc/Desc';
import Listing from './Listing/Listing';
import Menu from './Menu/Menu';

import { usePayMutation,useLazyGetPaymentStatusQuery } from '../../API/paymentAPI';

let timerId
let defaultXML = "<?xml version='1.0' encoding='utf-8'?><response>no data load</response>"


const Page = () => {

    const [amount, setAmount]=useState(5)

    const [paramsForPay, setParamsForPay] = useState([
        {id:10, type:'paymentData', typeText:'Данные платежи' ,checked:true, isDisabled:true,  inputID: 'pg_user_id', labelText:'Иден-р пользователя', data: 'test0006',},
        {id:11, type:'paymentData', typeText:'Данные платежи' ,checked:true,  isDisabled:true,   inputID: 'pg_user_phone', labelText:'Телефон пользователя',data: 79104769733,},
        {id:12, type:'paymentData', typeText:'Данные платежи' ,checked:true,  isDisabled:true,   inputID: 'pg_user_email', labelText:'Почта пользователя',data: 'yury.myworkmail@gmail.com'},
        {id:13, type:'paymentData', typeText:'Данные платежи' ,checked:false, isDisabled:false,  inputID: 'pg_user_ip', labelText:'IP пользователя',data: '185.102.131.54',},
        {id:14, type:'paymentData', typeText:'Данные платежи' ,checked:true, isDisabled:true,    inputID: 'pg_order_id', labelText:'Номер заказа мерчанта', data: 'test001',},
        {id:15, type:'paymentData', typeText:'Данные платежи' ,checked:true,  isDisabled:true,   inputID: 'pg_amount', labelText:'Сумма',data: 10,},
        {id:16, type:'paymentData', typeText:'Данные платежи' ,checked:false, isDisabled:false,  inputID: 'pg_currency', labelText:'Валюта',currency: 'RUB',},
        {id:17, type:'paymentData', typeText:'Данные платежи' ,checked:false, isDisabled:false,  inputID: 'pg_auto_clearing', labelText:'Автоклиринг', data:  1,},
        {id:18, type:'paymentData', typeText:'Данные платежи' ,checked:false, isDisabled:false,  inputID: 'pg_3ds_challenge', labelText:'Потребность в 3DS', data: 0},
        {id:19, type:'paymentData', typeText:'Данные платежи' ,checked:false, isDisabled:false,  inputID: 'pg_save_card', labelText:'Сохранить карту', data: 0,},
        {id:20, type:'paymentData', typeText:'Данные платежи' ,checked:true,  isDisabled:true,   inputID: 'pg_description', labelText:'Описание', data: 'Описание заказа',},
        {id:21, type:'paymentData', typeText:'Данные платежи' ,checked:true,  isDisabled:true,   inputID: 'pg_salt', labelText:'Случайная строка',data: 'abcde'},
        {id:22, type:'paymentData', typeText:'Данные платежи' ,checked:true,  isDisabled:true,   inputID: 'pg_signature', labelText:'Подпись (авт ген-я)', data:  'undefined',},
    
        {id:30, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'pg_merchant_id', labelText:'Номер магазина', data:541637},
        {id:31, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'secret_key', labelText:'Секретный ключ', data:'i0soXJL1pPQayDSs'},
        {id:32, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'pg_result_url', labelText:'Адрес ответа', data:'https://416b-46-39-54-23.ngrok-free.app/api/g2g/result'},
    ])


    const [PayStatusRequest, payStatusResponse] = useLazyGetPaymentStatusQuery();
    const [performPaymentRequest,performPaymentResponse] = usePayMutation()

    const payStart = () => {
        performPaymentRequest({'amount':amount})
    }

    const payStop = () => {
        setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 0);
    }

    // const doPayBefore3DS = () => {
    //     let object = {}
    //     let data = paramsForPay
    //         .filter(i=>{
    //             return ( 
    //                 i.checked==true && 
    //                 // i.inputID!='secret_key' && 
    //                 i.inputID!='pg_signature'
    //             )
    //         }).forEach(item=> object[item.inputID]=item.data)  
    //     payBefore3dsRequest(object).unwrap()
    // }

    const sigPayBefore3DS = () => {

        let data = paramsForPay
        .filter(i=>
            {return (i.checked==true && i.inputID!='secret_key' && i.inputID!='pg_signature')})
        .map(i=>{
            let a = {}
            a.data=i.data
            a.inputID=i.inputID
            return {...a }
        })
        .sort((a, b) => a.inputID > b.inputID ? 1 : -1)
        .map(i=>i.data).join(';')
        let secret_key = paramsForPay.filter(i=>i.inputID=='secret_key')[0].data
        data = 'payment;'.concat(data,';',secret_key)

        // console.log('Вычисление', md5(data))
        return (md5(data))         
    }

    useEffect(()=>{
        if(!payStatusResponse.isUninitialized && payStatusResponse.isSuccess)
        {
            if (payStatusResponse.data[0].pg_status=='success') 
            setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 0);
        } 
    },[payStatusResponse])
      

    useEffect(()=>{
        if(performPaymentResponse.isSuccess && !performPaymentResponse.isUninitialized ) {
            console.log('data!',performPaymentResponse.data)
            if(performPaymentResponse.data.paystatus =="created") {
                window.open(performPaymentResponse.data.url,'_blank');
                timerId = setInterval(() => {
                    PayStatusRequest(performPaymentResponse.data.id)
                    console.log('waiting for result')
                    }, 3000); 
            }   
        }
        
    },[performPaymentResponse])

    console.log(paramsForPay)
    return (
        <div className={cl.wrapper}>
            
            <h2 className={cl.globslTitle}>Платежная страница</h2>
               
            <Shop    
                timerId={timerId} 
                amount={amount} 
                setAmount={setAmount} 
                payRequestAnswer={defaultXML}
                 
                payStart = {payStart}
                payStop = {payStop}

                paramsForPay = {paramsForPay}
                setParamsForPay= {setParamsForPay}
                sig = {sigPayBefore3DS}
            />
            <Desc />

            <Listing />
        </div>
    );
};

export default Page;