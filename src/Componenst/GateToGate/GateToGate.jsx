import React, { useEffect, useState } from 'react';
import {params, filter} from "../../library/library"
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
    const [data3ds, setData3ds ] = useState({})
    const [paresRequest, paresResponse]                   = useLazyGetParesQuery();
    const [payBefore3dsRequest, payBefore3dsResponse]     = usePayMutation()
    const [payAfter3dsRequest, payAfter3dsResponse]       = usePayAfter3dsMutation()

    const [flowParams, setFlowParams] = useState(flowStates.newOrder)
    // Проверка сохраненых данных в браузере
    useEffect(()=>{

        let data = JSON.parse(localStorage.getItem('payBefore3dsResponse'));
        let paresdata = JSON.parse(localStorage.getItem('paresResponse'));

       
        // if (data){
        //     console.log(data)
            
        //     // setFlowParams(flowStates.new)
        // }
    },[])

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
    
    // Прием запроса на платеж до 3DS
    useEffect(()=>{       
        if (!payBefore3dsResponse.isUninitialized, payBefore3dsResponse.isSuccess){
            // setFlowParams(flowStates.\)
            localStorage.setItem('payBefore3dsResponse', JSON.stringify(payBefore3dsResponse)); 
        }

        // // if (!payBefore3dsResponse.isUninitialized, payBefore3dsResponse.isSuccess){
        // //     setData3ds({...payBefore3dsResponse.data}) 
        // // }
             
    },[payBefore3dsResponse])

    // Приемщик парамтров 3DS
    useEffect(()=>{
        if (!paresResponse.isUninitialized && paresResponse.isSuccess && !paresResponse.isFetching) 
        {
            if (paresResponse.data.pares!='no data')
                {
                    setTimeout(() => { clearInterval(timerId); ()=>{}; }, 0);
                    console.log("stop timer pares reseived")

                    localStorage.setItem('paresResponse', JSON.stringify(payBefore3dsResponse)); 
                }
            console.log(paresResponse)
        }   
    },[paresResponse])

  

  
    const doPayBefore3DS = () => {
        let object = {}

        localStorage.removeItem("payBefore3dsResponse");
        localStorage.removeItem("flowStatus");

        setFlowParams('new order')

        let data = paramsForPay
            .filter(i=>{
                return ( 
                    i.checked==true && 
                    // i.inputID!='secret_key' && 
                    i.inputID!='pg_signature'
                )
            }).forEach(item=> object[item.inputID]=item.data)  

        payBefore3dsRequest(object).unwrap()
        // temp = JSON.parse(localStorage.getItem('user'));
        // if(!temp) console.log('dfsfs')
        // console.log(temp)

        // if (!JSON.parse(localStorage.getItem('payBefore3dsResponse')))    
        // setFlowParams(prev=>{
        //     prev.data.status='completed'
        //     prev.request.status='current'
        //     return prev
        // })
    }

    const sendUserTo3DS = ()=>{       
        timerId = setInterval(() => {
   
            paresRequest(payBefore3dsResponse.data.paument_number)
            
            console.log('waiting for Pares')
            
            }, 3000);  

        window.open("https://8c98-46-39-54-110.ngrok-free.app/api/g2g/perform3ds?id="+payBefore3dsResponse.data.paument_number, '_blank');
    }
    
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

    const doPayAfter3DS = () => {
        // work
        payAfter3dsRequest({
            'id': payBefore3dsResponse.data.paument_number, 
            'secret_key':paramsForPay.find((value) => {return value.inputID=='secret_key'}).data,
            'pg_merchant_id':paramsForPay.find((value) => {return value.inputID=='pg_merchant_id'}).data
        })

        // //test
        // payAfter3dsRequest({
        //     'id': 100291, 
        //     'secret_key':paramsForPay.find((value) => {return value.inputID=='secret_key'}).data,
        //     'pg_merchant_id':paramsForPay.find((value) => {return value.inputID=='pg_merchant_id'}).data
        // })
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
                        xml = {filter(payBefore3dsResponse,'xml')}                      
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
                    />
                </div>
                <Flow
                    status = {flowParams}
               />
            </div>          
                     
        </div>
    );
};

export default GateToGate;