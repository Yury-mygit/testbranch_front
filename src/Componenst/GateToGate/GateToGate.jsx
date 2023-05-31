import React, { useEffect, useState } from 'react';
import {params} from "../../library/library"
import cl from './GateToGate.module.scss'


import { usePayMutation, useLazyGetParesQuery, usePayAfter3dsMutation } from '../../API/gateAPI';
import md5 from 'md5'

// import ScreenRequest from '../Common/ScreenRequest/ScreenRequest';
// import ScreenResponse from '../Common/ScreenResponse/ScreenResponse';

import PayBefore3DS from './PayBefore3DS/PayBefore3DS';
import Do3DS from './Do3DS/Do3DS';
import PayAfter3DS from './PayAfter3DS/PayAfter3DS';
import Flow from '../Common/Flow/Flow';

let timerId

let temp = {}

const GateToGate = () => {

    const [paramsForPay, setParamsForPay] = useState(params)

    const [flowParams, setFlowParams] = useState({
        'data':{'status':'current','text':'Данные'},
        'request':{'status':'notreached','text':'Запрос'},
        'responce':{'status':'notreached','text':'Ответ'},
        'choiceStatus':{'status':'notreached','text':'pg_status=?'},
        'error':{'status':'notreached','text':'Error','testBefore':"error"},
        'choiceIs3DSRequired':{'status':'notreached','text':'pg_3ds=?','testBefore':"ok"},
        'finalWithout3DS':{'status':'notreached','text':'Данные'},
        'dataAfter3DS':{'status':'notreached','text':'Данные'},
        'requestAfter3DS':{'status':'notreached','text':'Данные'},
        'responceAfter3DS':{'status':'notreached','text':'Данные'},
        'choicePaymentStatus':{'status':'notreached','text':'Данные'},
        'paymentFail':{'status':'notreached','text':'Данные'},
        'paymentSuccess':{'status':'notreached','text':'Данные'},
    })

    const [data3ds, setData3ds ] = useState({})

    const [paresRequest, paresResponse]                   = useLazyGetParesQuery();
    const [payBefore3dsRequest, payBefore3dsResponse]     = usePayMutation()
    const [payAfter3dsRequest, payAfter3dsResponse]       = usePayAfter3dsMutation()

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

    useEffect(()=>{
        // console.log(payBefore3dsResponse)
        // console.log('payBefore3dsResponse',payBefore3dsResponse)
        if (!payBefore3dsResponse.isUninitialized, payBefore3dsResponse.isSuccess){
            setFlowParams(prev=>{

                let temp = structuredClone(prev)
                
                temp.request.status='completed'
                temp.responce.status='completed'
                temp.choiceStatus.status='completed'
               
                if(payBefore3dsResponse.data.pg_status=='error')  temp.error.status='completed'
                if(payBefore3dsResponse.data.pg_status=='ok')  {
                    temp.choiceIs3DSRequired.status='completed'
                    if('pg_3ds' in payBefore3dsResponse.data){
                        if(payBefore3dsResponse.data.pg_3ds == 0 ){
                            temp.finalWithout3DS.status='completed'
                        }
                        if(payBefore3dsResponse.data.pg_3ds == 1 ){
                            temp.dataAfter3DS.status='completed'
                            temp.requestAfter3DS.status='current'
                        }
                    }
                }
                // console.log('payBefore3dsResponse',payBefore3dsResponse)
                console.log(temp)
                console.log(payBefore3dsResponse)
    
                return temp
            })
        }
       
        // let temp = JSON.parse(localStorage.getItem('payBefore3dsResponse'));


        if (!payBefore3dsResponse.isUninitialized, payBefore3dsResponse.isSuccess){
            setFlowParams(prev=>{

                let temp = structuredClone(prev)
                
                temp.request.status='completed'
                temp.responce.status='completed'
                temp.choiceStatus.status='completed'
               
                if(payBefore3dsResponse.data.pg_status=='error')  temp.error.status='completed'
                if(payBefore3dsResponse.data.pg_status=='ok')  {
                    temp.choiceIs3DSRequired.status='completed'
                    if('pg_3ds' in payBefore3dsResponse.data){
                        if(payBefore3dsResponse.data.pg_3ds == 0 ){
                            temp.finalWithout3DS.status='completed'
                        }
                        if(payBefore3dsResponse.data.pg_3ds == 1 ){
                            temp.dataAfter3DS.status='completed'
                            temp.requestAfter3DS.status='current'
                        }
                    }
                }
                // console.log('payBefore3dsResponse',payBefore3dsResponse)
                console.log(temp)
                console.log(payBefore3dsResponse)
    
                return temp
            })
        }

        if (!payBefore3dsResponse.isUninitialized, payBefore3dsResponse.isSuccess){
            localStorage.setItem('payBefore3dsResponse', JSON.stringify(payBefore3dsResponse)); 
        }

        // if (!payBefore3dsResponse.isUninitialized, payBefore3dsResponse.isSuccess){
        //     setData3ds({...payBefore3dsResponse.data}) 
        // }
             
    },[payBefore3dsResponse])

    useEffect(()=>{

        let data = JSON.parse(localStorage.getItem('payBefore3dsResponse'));
        let paresdata = JSON.parse(localStorage.getItem('paresResponse'));

       
        if (data){
            // console.log(data)
            setFlowParams(prev=>{

                let temp = structuredClone(prev)
                
                temp.request.status='completed'
                temp.responce.status='completed'
                temp.choiceStatus.status='completed'
               
                if(data.data.pg_status=='error')  temp.error.status='completed'
                if(data.data.pg_status=='ok')  {
                    temp.choiceIs3DSRequired.status='completed'
                    if('pg_3ds' in data.data){
                        if(data.data.pg_3ds == 0 ){
                            temp.finalWithout3DS.status='completed'
                        }
                        if(data.data.pg_3ds == 1 ){
                            temp.dataAfter3DS.status='completed'
                            temp.requestAfter3DS.status='current'
                        }
                    }
                }
                // console.log('payBefore3dsResponse',payBefore3dsResponse)
                // console.log(temp)
                // console.log(payBefore3dsResponse)
    
                return temp
            })
        }
    },[])

    const doPayBefore3DS = () => {
        let object = {}
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

        if (!JSON.parse(localStorage.getItem('payBefore3dsResponse')))    
        setFlowParams(prev=>{
            prev.data.status='completed'
            prev.request.status='current'
            return prev
        })
    }




    const sendUserTo3DS = ()=>{
        
        
        timerId = setInterval(() => {
   
            paresRequest(payBefore3dsResponse.data.paument_number)
            
            console.log('waiting for Pares')
            
            }, 3000);  

        window.open("https://8c98-46-39-54-110.ngrok-free.app/api/g2g/perform3ds?id="+payBefore3dsResponse.data.paument_number, '_blank');
        // window.location.href = "https://8c98-46-39-54-110.ngrok-free.app/api/g2g/perform3ds?id=" + payBefore3dsResponse.data.paument_number;
    
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


    // console.log('data', data3ds)

    return (
        <div className={cl.wrapper}> 

            <h3>Оплата c G2G</h3>

            <div className={cl.content}>

               <Flow
                    params = {flowParams}
               
               />

                <div className={cl.data}>

                    <PayBefore3DS 
                        paramsForPay = {paramsForPay}
                        setParamsForPay = {setParamsForPay}
                        sigPayBefore3DS = {sigPayBefore3DS}
                        payBefore3dsResponse = {payBefore3dsResponse}
                        doPayBefore3DS = {doPayBefore3DS}                       
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
            </div>

            
            
         
                                                            
            
                     
        </div>
    );
};

export default GateToGate;