import React, { useState } from 'react';
import cl from './Form.module.scss'
import Block from './Block/Block';
import AutoResizableTextarea from '../AutoResizableTextarea/AutoResizableTextarea';
import { useSelector, useDispatch } from 'react-redux';
import { setChecked, update, reset } from '../../../features/paymentPageData/paymentPageDataSlice';


const Form = ({outerClass=''}) => {
    const dispatch = useDispatch();

    // const count = useSelector((state) => state.counter.value)
    // console.log(  useSelector((state) => state.paymentPageData.data) )

    let params = useSelector((state) =>state.paymentPageData.data)

    // console.log(params)

    let uniqPatamTypes = [...new Set(params.map(i=>i.type))]
    let uniqPatamTypesText = [...new Set(params.map(i=>i.typeText))]
    
    const [inputType, setInputType] = useState('form')

    const formViewHandler   = () => setInputType('form')
    const objectViewHandler = () => setInputType('object')

    let text = params.map(item=>`${item.inputID}:${item.data}`).join(' ')

    // console.log(text)

        // var str = "pg_user_id:test0006 pg_user_phone:79104769733 pg_user_email:yury.myworkmail@gmail.com pg_user_ip:185.102.131.54 pg_order_id:test0012321123 pg_amount:10 pg_currency:undefined pg_auto_clearing:123123 pg_3ds_challenge:0 pg_save_card:0 pg_description:Описание заказа pg_salt:abcde pg_signature:e0953a4a2b5cd1f0a9dd7f0542ef9321 pg_merchant_id:541637 secret_key:i0soXJL1pPQayDSs pg_result_url:https://416b-46-39-54-23.ngrok-free.app/api/g2g/result";

    // Разбиваем строку по пробелам
    var pairs = text.split(" ");

    // Создаем пустой объект
    var obj = {};

    // Проходимся по каждой паре ключ-значение
    for (var i = 0; i < pairs.length; i++) {
        // Разбиваем пару по символу ":"
        var pair = pairs[i].split(":");
        
        // Если у нас есть две части (ключ и значение), добавляем в объект
        if (pair.length === 2) {
            obj[pair[0]] = pair[1];
        }
    }

    // Преобразуем объект в JSON
    var json = JSON.stringify(obj, null, 4);

    return(
        <div className={[cl.wrapper, outerClass].join(' ')}>
            <h4 className={cl.title}> Данные запроса </h4>
            <div className=''>
                <button onClick={formViewHandler}> форма </button>
                <button onClick={objectViewHandler}> обьект </button>
            </div>


            {   
                inputType == 'form' ? 
                    uniqPatamTypes.map((itemType,index)=>{
                        return(
                            <div key = {index}>
                                <h4 className={cl.groupTitle} >{uniqPatamTypesText[index]}</h4>
                                <div className={cl.groupData}>
                                {
                                    params
                                        .filter(item=>item.type==itemType)
                                        .filter(item=>item.inputID!=='pg_signature')
                                        .map((item)=>{
                                        return(
                                            <Block  
                                                item = {item}
                
                                                key={item.id}
                                            />
                                        )    
                                    })
                                } 
                                </div>                     
                                                    
                            </div>   
                        )   
                    })
                : 
                    (
                        <AutoResizableTextarea
                        jsontext = {json}
                        />
                    )
            }

            <button onClick={()=>dispatch(reset())}
            >Сбросить</button>

        </div>
    );
};

export default Form;





// return before chengs
// return (
//     <div className={cl.form}>







//     <h4 className={cl.title} >Данные карты</h4>
//     {
//         status.filter(item=>item.type=='cardData').map((item)=>{
//             return(
//                 <Block  
//                         item = {item}
//                         status = {status}
//                         setStatus = {setStatus}
//                         sig={sig}
//                         key={item.id}
//                     />
    
//             )
//         })
//     }
//     <hr />

    

    
//     <h4 className={cl.title} >Данные платежа</h4>
//     <div>
//         {status.filter(item=>item.type=='paymentData').map((item)=>{
//             return(
//                 <Block  
//                     item = {item}
//                     status = {status}
//                     setStatus = {setStatus}
//                     sig={sig}
//                     key={item.id}
                    
//                 />
//             )
//         })
//         }
//     </div>


//     <hr />
//     <h4 className={cl.title} >Данные мерчанта</h4>
//         {
//             status.filter(item=>item.type=='merchantData').map((item)=>{
//                 return(
//                     <Block  
//                     item = {item}
//                     status = {status}
//                     setStatus = {setStatus}
//                     sig={sig}
//                     key={item.id}
//                 />
//                 )
//             })
//         }
//     <hr />

// </div>
// );