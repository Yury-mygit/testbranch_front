import React,{useState,useRef, useEffect} from 'react';
import cl from './PaymentPage.module.scss'
import DemoShop from './Shop/DemoShop/DemoShop';
import Form from '../Common/Form/Form';
import Desc from './Desc/Desc';
import ScreenResponse from '../Common/ScreenResponse/ScreenResponse';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, mutateParams, update } from '../../features/paymentPageData/paymentPageDataSlice';


import { usePayMutation,useLazyGetPaymentStatusQuery } from '../../API/paymentAPI';


let timerId

const PaymentPage = () => {
    const [amount, setAmount]=useState(5)
    // const [paramsForPay, setParamsForPay] = useState(initialSatate)

    const [PayStatusRequest, payStatusResponse] = useLazyGetPaymentStatusQuery();
    const [payRequest,payResponse] = usePayMutation()

    const payStart = () => {
        payRequest({'amount':10})
    }

    const payStop = () => {
        setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 0);
    }

    useEffect(()=>{
        if(!payStatusResponse.isUninitialized && payStatusResponse.isSuccess)
        {
            if (payStatusResponse.data[0].pg_status=='success') 
            setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 0);
        } 
    },[payStatusResponse])
      
    useEffect(()=>{
        if(payResponse.isSuccess && !payResponse.isUninitialized ) {
            // console.log('data!',payResponse.data)
            if(payResponse.data.paystatus =="created") {
                window.open(payResponse.data.url,'_blank');
                timerId = setInterval(() => {
                    PayStatusRequest(payResponse.data.id)
                    // console.log('waiting for result')
                    }, 3000); 
            }   
        }
        
    },[payResponse])

    
    return (
        <div className={cl.wrapper}>
            
            <h2 className={cl.globslTitle}>Платежная страница</h2>

            <div className={cl.main}>
                <div className={cl.demoShop}>
                    <DemoShop 
                        setAmount={setAmount}
                        payStart = {payStart}
                        amount = {amount}
                    />
                </div>
                <div className={cl.form}>
                    
                    <Form 
                        // status={paramsForPay} 
                        // setStatus={setParamsForPay}
                        // sig = {sigPayBefore3DS} 
                    />
                </div>
                <div className={cl.screenResponse}>
                    <ScreenResponse 
                        view={
                            payResponse.isSuccess && !payResponse.isUninitialized 
                            ?payResponse.data.xml
                            : undefined
                        }
                    />
                </div>

                
                      

               
            </div>
               
            <Desc />

            {/* <Listing /> */}
        </div>
    );
};

export default PaymentPage;