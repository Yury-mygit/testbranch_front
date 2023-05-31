import React, { useEffect, useState } from 'react';
import { mypublickey, mytoken} from './keys';


import cl from './Kit.module.scss'


  let JSTokenResponse = ''
  let JSPaymentOptions = {}
  let JSPayResult = {}
  let JSTransactionOptionsBankCardToken={}
  let JSErrorObject = {}

  const getToken = async () => {
      console.log('gethering token')
      // console.log(FreedomPaySDK)
      const JSTokenizeOptionsBankCard = {
          type: 'bank_card',
          options: {
            card_number: "4111111111111111",
            card_holder_name: "test",
            card_exp_month: "12",
            card_exp_year: "24"
          }
      };
      
      try {
          JSTokenResponse = await FreedomPaySDK.tokenize(JSTokenizeOptionsBankCard);
          console.log('JSTokenResponse:',JSTokenResponse)
          
      }  catch(JSErrorObject) {}
  }

 const getPayObject = () => {
  JSPaymentOptions = {
      order_id: "1111",
      auto_clearing: 0, 
      amount: 10, 
      currency: "RUB", 
      description: "Описание заказа",
      test: 1,
      options: {
        // custom_params: {},
        user: {
          email: "yury.myworkmail@gmail.com",
          phone: "+79104768733"
        }
      },
    };

   console.log('JSPaymentOptions:',JSPaymentOptions) 
 }


 const getTokenCVV = () => {
  JSTransactionOptionsBankCardToken = {
      type: 'tokenized_card',
      options: {
        token: JSTokenResponse.token,
        card_cvv: 123
      }
    };
    console.log('JSTransactionOptionsBankCardToken:',JSTransactionOptionsBankCardToken) 
 }


 const pay = async ()=> {
  console.log('Оплата >>>')
  try {
      JSPayResult = await FreedomPaySDK.charge(
        JSPaymentOptions, JSTransactionOptionsBankCardToken
      );
    
      if (JSPayResult.payment_status === "need_confirm") {
        // FreedomPay делает обработку 3ds проверки
        JSPayResult = await FreedomPaySDK.confirmInIframe(JSPayResult, "3dsForm");
        // или
        // JSPayResult = await FreedomPaySDK.confirm3ds1(JSPayResult, JS3dsv1AcsOptions);
      }
    
    } catch( JSErrorObject) {}

    console.log('JSPayResult:',JSPayResult)
    console.log('JSErrorObject:',JSErrorObject)
 }

 let check = () => {
  console.log('================================')
  console.log('Проверка')
  console.log('JSPayResult', JSPayResult)
  console.log('JSPaymentOptions', JSPaymentOptions)
  console.log('JSTransactionOptionsBankCardToken', JSTransactionOptionsBankCardToken)
  // console.log(JSPayResult)
 }



 const script = document.createElement('script');
 script.src = "https://static.paybox.money/sdk/stable/js-sdk-1.0.0.js"
 document.body.appendChild(script);
 script.onerror = function() {
  alert( "Ошибка: " + this.src );
};
script.onload = function() {
 FreedomPaySDK.setup(mypublickey, mytoken);
}

 


const Kit = () => {

  





   

    return (
      <div className={cl.wrapper} >
        <section>
          <h2>SDK</h2>
        </section>       
        <section>
          <h3>JS SDK</h3>
          <p>
            JS SDK - библиотека, которая позволяет взаиможействовать с API SDK для проведения платежей. 
          </p>

          <h4>Этапы проведения платежи</h4>
          <div>
            <h4>
              2. Получене токена карты
            </h4>
            <div>
              Токен карты - уникальный зашифровонный код карты плательщика. 
              Для его получения необходимо сформировать структуру данных с
              даннмим карты и выполнить метод tokenize обьекта FreedomPaySDK
            </div>
            <div>
              <h4>Листинг</h4>
              <code>
              
                <pre>
                {
                    

                      " const JSTokenizeOptionsBankCard = " + "{" + `\r\n`  + 
                      "     type: 'bank_card'," + `\r\n`  + 
                      "     options: \{"+`\r\n`  + 
                      "       card_number: \"4111111111111111\"," + `\r\n`  + 
                      "       card_holder_name: \"test\", "  + `\r\n`  + 
                      "       card_exp_month: \"12\", "+ `\r\n`  + 
                      "       card_exp_year: \"24\" " + `\r\n`  + 
                      "     }" + `\r\n`  +
                      " };" +`\r\n`  +
                    
                      " try { " + `\r\n`  +
                      "     JSTokenResponse = await FreedomPaySDK.tokenize(JSTokenizeOptionsBankCard);"+ `\r\n`  +
                      "     console.log('JSTokenResponse:',JSTokenResponse)" + `\r\n`  +
                          
                      " }  catch(JSErrorObject) {}         "          + `\r\n`    
                      
                }
                </pre>
              </code>
            </div>
           
          </div>
          <button onClick={()=>getToken()}>Получить токен</button>
          <button onClick={()=>getPayObject()}>Создание объекта платежа</button>
          <button onClick={()=>getTokenCVV()}>Создание токена с CVV</button>
          <button onClick={()=>pay()}>Оплата</button>
          <button onClick={()=>check()}>JSPayResult</button>
        </section>
        <section>
          <h3>API SDK</h3>
          <p>
            API SDK - Интсрумент, позволяющей проводить оплату с использование токенизайии карты плательщика. 
            Обратите внимание, может быть необходимо провести 3DS 
          </p>
        </section>  


      </div>
       
    );
};

export default Kit;