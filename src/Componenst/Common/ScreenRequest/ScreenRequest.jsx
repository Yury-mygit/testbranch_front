import React from 'react';
import cl from './ScreenRequest.module.scss'

const ScreenRequest = ({params, url}) => {

    // console.log(params)

   

    return (
        <div className={cl.request}>
            <h3>Запрос</h3>
            <h4>Адрес запроса</h4>
            <div>{url}</div>
            <h4 >Параметры</h4>
            <hr />
            <div>  {'$request  = [    '} </div>
            {params.map((item,index)=>{
                return( <div key={index}>{item.name} : {item.data?item.data:"undefined"}</div>)
            })}
            <div>  {']'} </div>

        </div> 
    );
};

export default ScreenRequest;