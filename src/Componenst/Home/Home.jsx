import React, {useState, useEffect } from 'react';
import { Link} from "react-router-dom";
import cl from './Home.module.scss'

import { useSelector, useDispatch } from 'react-redux'
 
// const merchantInitData = [
//     // {id:1, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'pg_merchant_id', labelText:'Номер магазина', data:541637},
//     {id:2, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'secret_key',     labelText:'Секретный ключ', data:'***********'},
//     {id:3, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'url',            labelText:'Адрес еднпойнта', data:'https://api.paybox.money/init_payment.php'},
// ]
   
const Home = () => {
    // const [sortedArray, setSortedArray]      = useState([])
    // const [sortedString, setSortedString]   = useState('no data')
    // const [merchantString, setMerchantString]  = useState('init_payment.php;parse eor;9SgDhuBrKetRfYjY')
    // const [merchantData, setMerchantData] = useState(merchantInitData)  

    // useEffect(()=>{
    //     let url     = merchantData.filter(i=>i.inputID=='url')[0].data
    //     let secret  = merchantData.filter(i=>i.inputID=='secret_key')[0].data
    //     setSortedString(   sortedArray.makeString(url, secret )   )   
       
    // },[sortedArray,merchantData])

    return (
        <div className={cl.wrapper}>
            <h3>
              Добрый день, коллеги! Приложение APIhelp поможет Вам выполнить следующие действия:
            </h3>
            <p>
              <Link to={`/sig`}  className={cl.link} style={s}>Проверка подписи</Link> - проверить, корректно ли генерируется подпись, проверить вашу подпись по параметрам, которые вы передвете. <br/>

               Подпись запроса - зашифрованная строка, создающаяся из открытх и закрытых данных, которая позволяет проверить и идентифицировать запрос. 
               Подпись передается в каждом запросе, и генерируется автоматически по определенному алгоритму. Хранить ее не нужно.
               
            </p>
            <p>
              <Link to={`/testenv`}  className={cl.link} style={s}>Тестовая среда</Link> - отправка запросов в тестовую среду поможет разобраться, почему возникла та или иная ошибка
            </p>
            <div>
              <Link to={`/interactivepayments`}  className={cl.link} style={s}>Интерактивные платежи</Link> - позволят в живую провести платеж, увидеть, каккими сообщениями обмениваются системы
              <ul className={cl.list}>
                    <li><Link to={`/page`} className={cl.link} style={s}>      Страница</Link></li>
                    <li><Link to={`/widget`} className={cl.link} style={s}>    Виджет</Link></li>
                    <li><Link to={`/sdk`} className={cl.link} style={s}>       SDK</Link></li>
                    <li><Link to={`/card_save`} className={cl.link} style={s}> Сохранение карт</Link></li>
                    <li><Link to={`/reсurrent`} className={cl.link} style={s}> Реккуренты</Link></li>
                    <li><Link to={`/direct`} className={cl.link} style={s}>    Безакцепты</Link></li>
                    <li><Link to={`/g2g`} className={cl.link} style={s}>       Г2Г</Link></li>
              </ul>

            </div>
            <div>
      
      </div>

        </div>    
    );
};

export default Home;




let s = {
  color:'black',
  fontWeight: "800",
  // textDe
}