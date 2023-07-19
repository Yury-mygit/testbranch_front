import React, { useState } from 'react';
import cl from './Form.module.scss'
import Block from './Block/Block';
import AutoResizableTextarea from '../AutoResizableTextarea/AutoResizableTextarea';
import { useSelector, useDispatch } from 'react-redux';


const Form = ({status=[], setStatus=()=>{}}) => {

    // const count = useSelector((state) => state.counter.value)
    // console.log(  useSelector((state) => state.paymentPageData.data) )

    status = useSelector((state) =>state.paymentPageData.data)

    let uniqPatamTypes = [...new Set(status.map(i=>i.type))]
    let uniqPatamTypesText = [...new Set(status.map(i=>i.typeText))]
    
    const [inputType, setInputType] = useState('form')

    const formViewHandler   = () => setInputType('form')
    const objectViewHandler = () => setInputType('object')

    return(
        <div className={cl.wrapper}>
            <h4 className={cl.title}> Данные запроса </h4>
            <div>
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
                            status
                                .filter(item=>item.type==itemType)
                                .map((item)=>{
                                return(
                                    <Block  
                                        item = {item}
                                        status = {status}
                                        setStatus = {setStatus}
        
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
                    <AutoResizableTextarea></AutoResizableTextarea>
                )
            }

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