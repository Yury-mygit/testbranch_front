import React,{useState,useRef, useEffect} from 'react';
import cl from './PaymentWidget.module.scss'
import Shop from './Shop/Shop';
import Desc from './Desc/Desc';
import Listing from './Listing/Listing';
import Screen from './Screen/Screen';
import Menu from './Menu/Menu';


import { useGetPaymentQuery, usePayMutation } from '../../API/paymentAPI';

    (function (p, a, y, b, o, x) {
      o = p.createElement(a);
      x = p.getElementsByTagName(a)[0];
      o.async = 1;
      o.src = 'https://static.paybox.money/v1/paybox/pbwidget.js?' + 1 * new Date();
      x.parentNode.insertBefore(o, x);
  
    })(document, 'script');


  

const prtintOnScreen = (data,link)=>{
    for(const key in data) {
        if (typeof key === 'object') {
            console.log('sddsa')
            for(const inner in key) {
                link.current.innerHTML += `<div>${inner} - ${data[inner]}</div>`;
            }
        }
        link.current.innerHTML += `<div>${key} - ${data[key]}</div>`;
    }
}

let timerId

const PaymentWidget = () => {

    const [amount, setAmount]=useState(0)
    const inputEl = useRef();

    let aa = <input 
    value={amount}
    onChange={(e)=>setAmount(e.target.value)}
    />

    // const [newPay,{data, isLoading}] = usePayMutation()

    const pay = (amount) => {
        var data = {
        token: 'GuyueDCjFrQnGmANMyIv6QV7U2G1s0gh',
        payment: {
            amount: amount,
            order: '3434',
            language: 'ru', // Язык виджета
            description: 'Описание заказа',
            test: 1,  // testing mode
            options: {
                callbacks: {
                    result_url: "http://8c98-46-39-54-110.ngrok-free.app/api/wresult",
                 },
                user: {
                    email: "user@test.com",
                    phone: "+79104769733",
                },
            },
        },
        successCallback: function (a,b,c) {
            console.log("Платеж прошел успешно") 
            console.log(a,b,c)   
            let pg_payment_id = document.getElementsByClassName('panel__text').innerHTML
            prtintOnScreen(data,inputEl)
        },
        errorCallback: function (payment) {
            console.log("Платеж не прошел")
            
        }
        }


        inputEl.current.innerHTML += '<br><br>'
        var widget = new PayBox(data);
        widget.create();
        // handler()
    }

    // const handler = async () => {
    //     console.log('sdsd')
    //     await  newPay({'amount':amount}).unwrap()
    // }


    return (
        <div className={cl.wrapper}>



            <div className={cl.menu}>
                <Menu />
                
            </div>

            {/* <button onClick={handler}>
                    ddd
                </button> */}
            {/* <button onClick={()=>console.log('result =' ,result)}>
                    ddd
                </button> */}
           
            <div className = {cl.content}>
                <div id='title'> </div>
                <div className={cl.title}>
                    <h2>Платежный виджет</h2>
                </div>
                
                <Desc />

                <div id='example'> </div>
                <div className={cl.title}>
                    <h3>Пример реализации</h3>   
                </div>

                <div className={cl.shop}>
                    <Shop pay={pay} amount={amount} setAmount={setAmount} />
                    <Screen inputEl={inputEl}/>
                </div>

                <div id='listing'> </div>
                <Listing inputEl={inputEl}/>
            </div>
            


        </div>
    );
};

export default PaymentWidget;

