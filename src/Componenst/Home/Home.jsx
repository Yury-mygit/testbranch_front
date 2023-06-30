import React, {useState, useEffect } from 'react';
import cl from './Home.module.scss'

 
const merchantInitData = [
    // {id:1, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'pg_merchant_id', labelText:'Номер магазина', data:541637},
    {id:2, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'secret_key',     labelText:'Секретный ключ', data:'***********'},
    {id:3, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'url',            labelText:'Адрес еднпойнта', data:'https://api.paybox.money/init_payment.php'},
]
   
const Home = () => {
    const [sortedArray, setSortedArray]      = useState([])
    const [sortedString, setSortedString]   = useState('no data')
    const [merchantString, setMerchantString]  = useState('init_payment.php;parse eor;9SgDhuBrKetRfYjY')
    const [merchantData, setMerchantData] = useState(merchantInitData)  

    useEffect(()=>{
        let url     = merchantData.filter(i=>i.inputID=='url')[0].data
        let secret  = merchantData.filter(i=>i.inputID=='secret_key')[0].data
        setSortedString(   sortedArray.makeString(url, secret )   )   
       
    },[sortedArray,merchantData])

    return (
        <div className={cl.wrapper}>
            <p>
               Провека подписи - проверить, корректно ли генерируется подпись, проверить вашу подпись по параметрам, которые вы передвете.
            </p>
            <p>
               Тестовая среда - отправка запросов в тестовую среду поможет разобраться, почему возникла та или иная ошибка
            </p>
            <p>
               Интерактивные платежи - позволят в живую провести платеж, ывидеть, каккими сообщениями обмениваются системы
            </p>
        

        </div>    
    );
};

export default Home;




