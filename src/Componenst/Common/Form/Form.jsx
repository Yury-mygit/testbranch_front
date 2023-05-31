import React from 'react';
import cl from './Form.module.scss'
import Block from './Block/Block';



const Form = ({status, setStatus, sig}) => {

    let uniqPatamTypes = [...new Set(status.map(i=>i.type))]
    let uniqPatamTypesText = [...new Set(status.map(i=>i.typeText))]
    


    return(
        <div className={cl.wrapper}>
            <h4 className={cl.title}> Данные запроса </h4>
            {
                uniqPatamTypes.map((itemType,index)=>{
                return(
                    <div key = {index}>
                        <h4 className={cl.groupTitle} >{uniqPatamTypesText[index]}</h4>                     
                        {
                            status
                                .filter(item=>item.type==itemType)
                                .map((item)=>{
                                return(
                                    <Block  
                                        item = {item}
                                        status = {status}
                                        setStatus = {setStatus}
                                        sig={sig}
                                        key={item.id}
                                    />
                                )    
                            })
                        }                       
                    </div>   
                )   
                })
                
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