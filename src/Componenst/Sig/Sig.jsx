import React, {useState, useEffect } from 'react';
import cl from './Sig.module.scss'
import AutoResizableTextarea from '../Common/AutoResizableTextarea/AutoResizableTextarea';
import Form from '../Common/Form/Form';
import StringComparison from './StringComparison/StringComparison';
import { useSelector, useDispatch } from 'react-redux';
 
const merchantInitData = [
    // {id:1, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'pg_merchant_id', labelText:'Номер магазина', data:541637},
    {id:2, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'secret_key',     labelText:'Секретный ключ', data:'***********'},
    {id:3, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'url',            labelText:'Адрес еднпойнта', data:'https://api.paybox.money/init_payment.php'},
]
   
const Sig = () => {

    let params = useSelector((state) =>state.paymentPageData)

    const [sortedArray, setSortedArray]      = useState([])
    const [sortedString, setSortedString]   = useState('no data')
    const [merchantString, setMerchantString]  = useState('init_payment.php;parse eor;9SgDhuBrKetRfYjY')
    const [merchantData, setMerchantData] = useState(merchantInitData)  

    useEffect(()=>{
        let url     = merchantData.filter(i=>i.inputID=='url')[0].data
        let secret  = merchantData.filter(i=>i.inputID=='secret_key')[0].data
        setSortedString(   sortedArray.makeString(url, secret )   )   
       
    },[sortedArray,merchantData])
    
    useEffect(()=>{
        let url     = merchantData.filter(i=>i.inputID=='url')[0].data
        let secret  = merchantData.filter(i=>i.inputID=='secret_key')[0].data
        setSortedString(   sortedArray.makeString(url, secret )   )   
    },[])

    // console.log(params)

    return (
        <div className={cl.wrapper}>
            <h4>Проверка подписи</h4>

            <div className={cl.lineOne}>
              <Form outerClass={cl.left}/>

               <div className={cl.right}>
                    <div className={cl.sign}>
                        <h4>Подпись</h4>
                        {
                            // sortedArray
                            // .makeString( merchantData
                            //     .filter(i=>i.inputID=='url')[0].data , merchantData.filter(i=>i.inputID=='secret_key')[0].data)
                            // .makeSig()
                            params.sig
                            // 
                        }
                    </div>                               

                    <div className={cl.lineTwo}>
                        <h4>Вычисленная строка </h4>
                        <p> {sortedString} </p>
                    </div>

                    <div className={cl.lineThree}>
                        <h4>Пользовательская строка</h4>
                        <div className={cl.textarea}>
                            <AutoResizableTextarea 
                                set  = {setMerchantString}
                                jsontext = {merchantString}
                                addClass={cl.text}
                                answer='string'
                            />
                        </div>
                    </div>

                    <div className={cl.lineFour}>
                        <h4>Сравнение строк</h4>
                        <div className={cl.stringComparison}>
                            <StringComparison 
                                string1={sortedString}   
                                string2={merchantString}   
                            />
                        </div>
                    </div>
                </div> 

            </div>                    
          
        </div>    
    );
};

export default Sig;




