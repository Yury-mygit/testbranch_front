import React, { useEffect, useState } from 'react';
import {params, adapter, doXMLView, clearLocalStorage} from "../../library/library"
import { server } from '../../settings';
import cl from './GateToGate.module.scss'

import { usePayMutation, useLazyGetParesQuery, usePayAfter3dsMutation } from '../../API/gateAPI';
import md5 from 'md5'

// import ScreenRequest from '../Common/ScreenRequest/ScreenRequest';
// import ScreenResponse from '../Common/ScreenResponse/ScreenResponse';

import PayBefore3DS from './PayBefore3DS/PayBefore3DS';
import Do3DS from './Do3DS/Do3DS';
import PayAfter3DS from './PayAfter3DS/PayAfter3DS';
import Flow,{flowStates} from '../Common/Flow/Flow';

let timerId

const GateToGate = () => {

    const [paramsForPay, setParamsForPay] = useState(params)
    const [flowParams, setFlowParams] = useState(flowStates.newOrder)
    const [data3ds, setData3ds ] = useState({})
    const [paresRequest, paresResponse]                   = useLazyGetParesQuery();
    const [payBefore3dsRequest, payBefore3dsResponse]     = usePayMutation()
    const [payAfter3dsRequest, payAfter3dsResponse]       = usePayAfter3dsMutation()
    

    // Проверка сохраненых данных в браузере
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('payBefore3dsResponse'));
        // let paresdata = JSON.parse(localStorage.getItem('paresResponse'));
        // if (data){
            // console.log(data.data.pg_status                )
        //     // setFlowParams(flowStates.new)
        // } 
        // console.log(data)
        if (data!= null){
            if (data.data.pg_status == 'ok' && data.data.pg_3ds == '1'){
                setFlowParams(flowStates.dataFor3DSOrder)
               
            }
        }
       
        
    },[])
    

    // Отправка запроса на платеж до 3DS
    const doPayBefore3DS = () => {

        reset()
        let object = {}
        paramsForPay
            .filter(i=>{
                return ( 
                    i.checked==true && 
                    // i.inputID!='secret_key' && 
                    i.inputID!='pg_signature'
                )
            }).forEach(item=> object[item.inputID]=item.data)  

        payBefore3dsRequest(object).unwrap()
        setFlowParams(flowStates.responceB3DS)
    }


    // ОБработка ответа на запроса на платеж до 3DS
    useEffect(()=>{      
        if (!payBefore3dsResponse.isUninitialized && payBefore3dsResponse.isSuccess){
            localStorage.setItem('payBefore3dsResponse', JSON.stringify(payBefore3dsResponse)); 
            if (payBefore3dsResponse.data.pg_status == 'ok' && payBefore3dsResponse.data.pg_3ds == 1){
                setFlowParams(flowStates.dataFor3DSOrder)
            }
        }         
    },[payBefore3dsResponse])


    // Отправка пользователя на 3DS
    const sendUserTo3DS = ()=>{       
        timerId = setInterval(() => {
            paresRequest(adapter(payBefore3dsResponse, ['data','paument_number']))
        }, 3000);  

        window.open(`${server}/g2g/perform3ds?id=`+adapter(payBefore3dsResponse, ['data','paument_number']), '_blank');
    }

    // Приемщик парамтров 3DS
    useEffect(()=>{
        if (!paresResponse.isUninitialized && paresResponse.isSuccess && !paresResponse.isFetching) 
        {
            if (paresResponse.data.pares!='no data')
                {
                    setTimeout(() => { clearInterval(timerId); ()=>{}; }, 0);
                    localStorage.setItem('paresResponse', JSON.stringify(payBefore3dsResponse)); 
                }
            console.log(paresResponse)
        }   
    },[paresResponse])

    // Платеж после прохождения 3DS
    const doPayAfter3DS = () => {
        // work
        // payAfter3dsRequest({
        //     'id': adapter(payBefore3dsResponse, ['data','paument_number']), 
        //     'secret_key':paramsForPay.find((value) => {return value.inputID=='secret_key'}).data,
        //     'pg_merchant_id':paramsForPay.find((value) => {return value.inputID=='pg_merchant_id'}).data
        // })

        // //test
        payAfter3dsRequest({
            'id': 100001, 
            'secret_key':paramsForPay.find((value) => {return value.inputID=='secret_key'}).data,
            'pg_merchant_id':paramsForPay.find((value) => {return value.inputID=='pg_merchant_id'}).data
        })
    }

    const reset = () => {
        clearLocalStorage()
        setFlowParams(flowStates.newOrder)
        // console.log('reset',flowParams)
    }
  



    // Вычисление подписи
    useEffect(()=>{
        let c = structuredClone(paramsForPay)
        let ob = paramsForPay.find((value) => {return value.inputID=='pg_signature'})
        ob = paramsForPay.indexOf(ob)

        let newSig = sigPayBefore3DS()
        if (c[ob].data!=newSig) {
            c[ob].data = newSig
            setParamsForPay(c)
        }
    },[paramsForPay])
    
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

    const sigPayAfter3DS = (data,scriptname,secret_key) => {
   
        let arrdata =[]

        for (let key in data) {
            arrdata[key] = data[key]
        }

        let temp =  Object.keys(arrdata).sort().map(i=>{return arrdata[i] } ).join(';')

        temp = scriptname.concat(';',temp,';',secret_key)
        // console.log(temp)
        return (md5(temp))
    }

   

    // let xmlview = filter(payBefore3dsResponse,'xml')
    // console.log(xmlview)

    return (
        <div className={cl.wrapper}> 

            <div className={cl.content}>

                <div className={cl.data}>

                    <PayBefore3DS 
                        paramsForPay = {paramsForPay}
                        setParamsForPay = {setParamsForPay}
                        doPayBefore3DS = {doPayBefore3DS} 
                        xml = {doXMLView(adapter(payBefore3dsResponse,['data','xml']),cl.line)}                      
                    />

                    <Do3DS  
                        payBefore3dsResponse   = {payBefore3dsResponse}
                        paresResponse          = {paresResponse}
                        sendUserTo3DS          = {sendUserTo3DS}
                    />                                          
                                            
                    <PayAfter3DS  
                        payBefore3dsResponse  = {payBefore3dsResponse}
                        payAfter3dsResponse = {payAfter3dsResponse}
                        paresResponse = {paresResponse}
                        paramsForPay = {paramsForPay}
                        sigPayAfter3DS = {sigPayAfter3DS}
                        doPayAfter3DS ={doPayAfter3DS}
                    />
                </div>
                <Flow
                    status = {flowParams}
                    reset = {reset}
               />
            </div>          
                     
        </div>
    );
};

export default GateToGate;



// Структуры файлов
// payBefore3dsRequest {
//     endpointName: "pay"
//     isError: false
//     isLoading: true
//     isSuccess: false
//     isUninitialized: false
//     originalArgs: {pg_card_pan: '2200150543546300', pg_card_year: '29', pg_card_month: '05', pg_card_cvc: '243', pg_card_name: 'YURIY', …}
//     requestId: "De_F-0YswlaU0Zm3SbBqR"
//     reset: ƒ ()
//     startedTimeStamp: 1687070466206
//     status: "pending"
// }

// payBefore3dsRequest {
//    data: 
//     TermUrl: "https://8c98-46-39-54-110.ngrok-free.app/api/g2g/result3ds/100021"
//     paument_number: 100021
//     pg_3d_acsurl: "https://secure.paybox.money/v2/user/3ds-page/24d466a5-55c8-4060-8f73-c4ef11b1de06"
//     pg_3d_md: ""
//     pg_3d_pareq: "eJydkU2PmzAQhv8L5yWYjyQQKVq1Ih9EmGwIgZhLZYwTTDAgMEmg6n8vUQ/dw6qHniyN5xm988xPSTxLJ5UWkmaYOpiBuWWCKZDeJNbqdqutCnZlSUGlhWg6+ibVTSUqUhUhbVpWlS9uok5e/SJrKLWPR9rcaRM0uGwde/w2zDnVganKs+mFyIapXuREnSeyOtMNk5CEppr+l4Z UZFV68t2RzISo24Wi6Gkrp6064awhVVlSIiZNp3D8XuMG8yXe+oBs4cztrQzpsEPRk6NolyW87Uh5uqPIG1xt/cBHc4i3sHd1vyI8LPy158Vnv0q0w/KLAH/2+BSjxj2npZDHOBNScQXXTLmrCinYWFWuWGS0ef9KwvJ/FNhY4A9MbvR1GtrvAN7uivjkB0EUAryxbgG3AI7iGmnr8bW6MNxBJ6/YJx0PdC5EHE2BG3g30k/zRAN3dP5euzp6jkpy0ltdovt1zIscnf060Ywf6Sbr4yhcnVSvIGVckMLvUTQdjqeD5dlXPQ7gY2+vhJeHHPUA7O01dyPn6WmOgAEaPDvLkTZmtZ3BYQ/2j3lsz5yRTws4fDPgEWheFOducDBghATKVzpi4OnlEOw3Xo54eIM5ZJeD9Os3MzDkGQ=="
//     pg_3ds: "1"
//     pg_datetime: "2023-06-18T06:41:21+00:00"
//     pg_payment_id: "863927286"
//     pg_salt: "uK3xKe7rEBIMZ3vU"
//     pg_sig: "86a7e4544f71722b703d3af561f51399"
//     pg_status: "ok"
//     xml: "<?xml version=\\\"1.0\\\" encoding=\\\"utf-8\\\"?>\n<response><pg_payment_id>863927286</pg_payment_id><pg_status>ok</pg_status><pg_3ds>1</pg_3ds><pg_3d_md/><pg_3d_acsurl>https://secure.paybox.money/v2/user/3ds-page/24d466a5-55c8-4060-8f73-c4ef11b1de06</pg_3d_acsurl><pg_3d_pareq>eJydkU2PmzAQhv8L5yWYjyQQKVq1Ih9EmGwIgZhLZYwTTDAgMEmg6n8vUQ/dw6qHniyN5xm988xPSTxLJ5UWkmaYOpiBuWWCKZDeJNbqdqutCnZlSUGlhWg6+ibVTSUqUhUhbVpWlS9uok5e/SJrKLWPR9rcaRM0uGwde/w2zDnVganKs+mFyIapXuREnSeyOtMNk5CEppr+l4ZUZFV68t2RzISo24Wi6Gkrp6064awhVVlSIiZNp3D8XuMG8yXe+oBs4cztrQzpsEPRk6NolyW87Uh5uqPIG1xt/cBHc4i3sHd1vyI8LPy158Vnv0q0w/KLAH/2+BSjxj2npZDHOBNScQXXTLmrCinYWFWuWGS0ef9KwvJ/FNhY4A9MbvR1GtrvAN7uivjkB0EUAryxbgG3AI7iGmnr8bW6MNxBJ6/YJx0PdC5EHE2BG3g30k/zRAN3dP5euzp6jkpy0ltdovt1zIscnf060Ywf6Sbr4yhcnVSvIGVckMLvUTQdjqeD5dlXPQ7gY2+vhJeHHPUA7O01dyPn6WmOgAEaPDvLkTZmtZ3BYQ/2j3lsz5yRTws4fDPgEWheFOducDBghATKVzpi4OnlEOw3Xo54eIM5ZJeD9Os3MzDkGQ==</pg_3d_pareq><pg_datetime>2023-06-18T06:41:21+00:00</pg_datetime><pg_salt>uK3xKe7rEBIMZ3vU</pg_salt><pg_sig>86a7e4544f71722b703d3af561f51399</pg_sig></response>\n"
//     [[Prototype]]: Object
//   endpointName: "pay"
//   fulfilledTimeStamp: 1687070485623
//   isError: false
//   isLoading: false
//   isSuccess: true
//   isUninitialized: false
//   originalArgs: {pg_card_pan: '2200150543546300', pg_card_year: '29', pg_card_month: '05', pg_card_cvc: '243', pg_card_name: 'YURIY', …}
//   requestId: "De_F-0YswlaU0Zm3SbBqR"
//   reset: ƒ ()
//   startedTimeStamp: 1687070466206
//   status: "fulfilled"
// }
// paresRequest{
//     currentData: 
//       pares: "no data"
//     [[Prototype]]: Object
//     data: 
//       pares : "no data"
//     [[Prototype]]: Object
//     endpointName: "getPares"
//     fulfilledTimeStamp: 1687089333224
//     isError: false
//     isFetching: false
//     isLoading: false
//     isSuccess: true
//     isUninitialized: false
//     originalArgs: 100033
//     requestId: "pYkqN8_2kqtp1vVnBuicB"
//     startedTimeStamp : 1687089329521
//     status: "fulfilled"
// }