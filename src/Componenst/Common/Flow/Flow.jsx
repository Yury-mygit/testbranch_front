import React from 'react';
import cl from './Flow.module.scss'

import Block from './Block/Block';
import Rhombus from './Rhombus/Rhombus';
import Ivent from './Ivent/Ivent';


let states = {
    new : 'new order'
}

// let defaultStatus = {
//     'data':                {'status':'notreached',   'text':'Данные'},
//     'request':             {'status':'notreached','text':'Запрос'},
//     'responce':            {'status':'notreached','text':'Ответ'},
//     'choiceStatus':        {'status':'notreached','text':'pg_status=?'},
//     'error':               {'status':'notreached','text':'Error','testBefore':"error"},
//     'choiceIs3DSRequired': {'status':'notreached','text':'pg_3ds=?','testBefore':"ok"},
//     'finalWithout3DS':     {'status':'notreached','text':'Данные'},
//     'dataAfter3DS':        {'status':'notreached','text':'Данные'},
//     'requestAfter3DS':     {'status':'notreached','text':'Данные'},
//     'responceAfter3DS':    {'status':'notreached','text':'Данные'},
//     'choicePaymentStatus': {'status':'notreached','text':'Данные'},
//     'paymentFail':         {'status':'notreached','text':'Данные'},
//     'paymentSuccess':      {'status':'notreached','text':'Данные'},
// }

let newOrder  =   {
        IvetnPayStart:              {id:0,    status:'current',      text:'Начало оплаты'},
        requestB3DS:                {id:1,    status:'notreached',   text:'Запрос'},
        responceB3DS:               {id:2,    status:'notreached',   text:'Ответ'},
        choiceStatusB3DS:           {id:3,    status:'notreached',   text:'pg_status=?'},
        errorB3DS:                  {id:4,    status:'notreached',   text:'ошибка','testBefore':"error"},
        choiceIs3DSRequired:        {id:5,    status:'notreached',   text:'pg_3ds=?','testBefore':"ok"},
        successFinalWithout3DS:     {id:6,    status:'notreached',   text:'Завершен успешно'},
        requestUserTo3ds:           {id:7,    status:'notreached',   text:'Отправка на 3DS'},
        waitingForParesMd:          {id:8,    status:'notreached',   text:'Ожи-ние pares/md'},
        choiceParesMd:              {id:9,    status:'notreached',   text:'pares/md?'},
        errorNotReceivedParesMd:    {id:10,    status:'notreached',   text:'Ошибка платежа'},
        requestA3DS:                {id:11,    status:'notreached',   text:'Отправка запроса'},
        responceA3DS:               {id:12,    status:'notreached',   text:'Получение ответа'},
        choiceA3DS:                 {id:13,    status:'notreached',   text:'Платеж успешный?'},        
        IventFail:                  {id:14,    status:'notreached',   text:'ошибка'},
        IventSuccess:               {id:15,    status:'notreached',   text:'Завершен успешно'},
}


let sendedNotReceivedOrder  =  {
        IvetnPayStart:              {id:0,    status:'completed',      text:'Начало оплаты'},
        requestB3DS:                {id:1,    status:'current',   text:'Запрос'},
        responceB3DS:               {id:2,    status:'notreached',   text:'Ответ'},
        choiceStatusB3DS:           {id:3,    status:'notreached',   text:'pg_status=?'},
        errorB3DS:                  {id:4,    status:'notreached',   text:'ошибка','testBefore':"error"},
        choiceIs3DSRequired:        {id:5,    status:'notreached',   text:'pg_3ds=?','testBefore':"ok"},
        successFinalWithout3DS:     {id:6,    status:'notreached',   text:'Завершен успешно'},
        requestUserTo3ds:           {id:7,    status:'notreached',   text:'Отправка на 3DS'},
        waitingForParesMd:          {id:8,    status:'notreached',   text:'Ожи-ние pares/md'},
        choiceParesMd:              {id:9,    status:'notreached',   text:'pares/md?'},
        errorNotReceivedParesMd:    {id:10,    status:'notreached',   text:'Ошибка платежа'},
        requestA3DS:                {id:11,    status:'notreached',   text:'Отправка запроса'},
        responceA3DS:               {id:12,    status:'notreached',   text:'Получение ответа'},
        choiceA3DS:                 {id:13,    status:'notreached',   text:'Платеж успешный?'},        
        IventFail:                  {id:14,    status:'notreached',   text:'ошибка'},
        IventSuccess:               {id:15,    status:'notreached',   text:'Завершен успешно'},
    
}

let erroRreceivedBefore3DSOrder  = 
    {
        'data':                {'status':'completed',   'text':'Данные'},
        'request':             {'status':'completed',   'text':'Запрос'},
        'responce':            {'status':'completed','text':'Ответ'},
        'choiceStatus':        {'status':'completed','text':'pg_status=?'},
        'error':               {'status':'current','text':'Error','testBefore':"error"},
        'choiceIs3DSRequired': {'status':'notreached','text':'pg_3ds=?','testBefore':"ok"},
        'finalWithout3DS':     {'status':'notreached','text':'Данные'},
        'dataAfter3DS':        {'status':'notreached','text':'Данные'},
        'requestAfter3DS':     {'status':'notreached','text':'Данные'},
        'responceAfter3DS':    {'status':'notreached','text':'Данные'},
        'choicePaymentStatus': {'status':'notreached','text':'Данные'},
        'paymentFail':         {'status':'notreached','text':'Данные'},
        'paymentSuccess':      {'status':'notreached','text':'Данные'}, 
}

let complitedWithout3DSOrder  = 
    {
        'data':                {'status':'completed',   'text':'Данные'},
        'request':             {'status':'completed',   'text':'Запрос'},
        'responce':            {'status':'completed',   'text':'Ответ'},
        'choiceStatus':        {'status':'completed',   'text':'pg_status=?'},
        'error':               {'status':'notreached',  'text':'Error','testBefore':"error"},
        'choiceIs3DSRequired': {'status':'completed',   'text':'pg_3ds=?','testBefore':"ok"},
        'finalWithout3DS':     {'status':'current',     'text':'Данные'},
        'dataAfter3DS':        {'status':'notreached','text':'Данные'},
        'requestAfter3DS':     {'status':'notreached','text':'Данные'},
        'responceAfter3DS':    {'status':'notreached','text':'Данные'},
        'choicePaymentStatus': {'status':'notreached','text':'Данные'},
        'paymentFail':         {'status':'notreached','text':'Данные'},
        'paymentSuccess':      {'status':'notreached','text':'Данные'}, 
}

let dataFor3DSOrder  = 
    {
        'data':                {'status':'completed',   'text':'Данные'},
        'request':             {'status':'completed',   'text':'Запрос'},
        'responce':            {'status':'completed',   'text':'Ответ'},
        'choiceStatus':        {'status':'completed',   'text':'pg_status=?'},
        'error':               {'status':'notreached',  'text':'Error','testBefore':"error"},
        'choiceIs3DSRequired': {'status':'completed',   'text':'pg_3ds=?','testBefore':"ok"},
        'finalWithout3DS':     {'status':'completed',     'text':'Данные'},
        'dataAfter3DS':        {'status':'current','text':'Данные'},
        'requestAfter3DS':     {'status':'notreached','text':'Данные'},
        'responceAfter3DS':    {'status':'notreached','text':'Данные'},
        'choicePaymentStatus': {'status':'notreached','text':'Данные'},
        'paymentFail':         {'status':'notreached','text':'Данные'},
        'paymentSuccess':      {'status':'notreached','text':'Данные'}, 
}

let daаtaFor3DSOrder  = 
    {
        'data':                {'status':'completed',   'text':'Данные'},
        'request':             {'status':'completed',   'text':'Запрос'},
        'responce':            {'status':'completed',   'text':'Ответ'},
        'choiceStatus':        {'status':'completed',   'text':'pg_status=?'},
        'error':               {'status':'notreached',  'text':'Error','testBefore':"error"},
        'choiceIs3DSRequired': {'status':'completed',   'text':'pg_3ds=?','testBefore':"ok"},
        'finalWithout3DS':     {'status':'completed',     'text':'Данные'},
        'dataAfter3DS':        {'status':'current','text':'Данные'},
        'requestAfter3DS':     {'status':'notreached','text':'Данные'},
        'responceAfter3DS':    {'status':'notreached','text':'Данные'},
        'choicePaymentStatus': {'status':'notreached','text':'Данные'},
        'paymentFail':         {'status':'notreached','text':'Данные'},
        'paymentSuccess':      {'status':'notreached','text':'Данные'}, 
}


const Flow = ({status}) => {

    // console.log(newOrder ,erroRreceivedBefore3DSOrder  )

    let params = newOrder

    if (status=='new order') params = newOrder

    params = sendedNotReceivedOrder

    return (
        <div className={cl.wrapper}>
            <div className={[cl.line ,cl.ofs70].join(' ')}> 
                {/* <Block text = {params.data.text}  arrowOn={0}  status={params.data.status} />  */}
               <Ivent text = {params.IvetnPayStart.text} status={params.IvetnPayStart.status}/>
            </div>
            <div className={[cl.line ,cl.ofs50].join(' ')}> 
                <Block text = {params.requestB3DS.text} status={params.requestB3DS.status} /> 
            </div>
            <div className={[cl.line ,cl.ofs50].join(' ')}> 
                <Block text = {params.responceB3DS.text}status={params.responceB3DS.status} /> 
            </div>
            <div className={[cl.line ,cl.ofs50].join(' ')}> 
                <Rhombus  text = {params.choiceStatusB3DS.text}    status={params.choiceStatusB3DS.status}  /> 
            </div>
            <div className={cl.line}> 
                <Ivent text = {params.errorB3DS.text} testBefore="error" status={params.errorB3DS.status}/> 
                <Rhombus text = {params.choiceIs3DSRequired.text} testBefore="ok" status={params.choiceIs3DSRequired.status}/>
            </div>
            <div className={[cl.line, cl.ofs60, cl.w240].join(' ')}> 
                <Ivent testBefore="0" text = {params.successFinalWithout3DS.text}  status={params.successFinalWithout3DS.status} /> 
                <Block testBefore="1" text = {params.requestUserTo3ds.text}  status={params.requestUserTo3ds.status} /> 
            </div>
            <div className={[cl.line, cl.ofs165].join(' ')}> 
                <Block text = {params.waitingForParesMd.text} status={params.waitingForParesMd.status} /> 
            </div>
            <div className={[cl.line, cl.ofs150].join(' ')}> 
                <Rhombus text = {params.choiceParesMd.text} status={params.choiceParesMd.status}/>  
            </div>
            <div className={[cl.line, cl.ofs140, cl.w240].join(' ')}> 
                <Ivent testBefore="нет" text = {params.errorNotReceivedParesMd.text} status={params.errorNotReceivedParesMd.status} />
                <Block testBefore="да" text = {params.requestA3DS.text}  status={params.requestA3DS.status} />
            </div>
            <div className={[cl.line, cl.ofs245].join(' ')}> 
                <Block text = {params.responceA3DS.text}  status={params.responceA3DS.status}/>  
            </div>
            <div className={[cl.line, cl.ofs230].join(' ')}> 
                <Rhombus text = {params.choiceA3DS.text} testBefore="ok"status={params.choiceA3DS.status}/>  
            </div>
            <div className={[cl.line, cl.ofs180, cl.w240].join(' ')}> 
                <Ivent testBefore="нет" text = {params.IventFail.text} status={params.IventFail.status} />
                <Ivent testBefore="да" text = {params.IventSuccess.text} status={params.IventSuccess.status} /> 
            </div>
        </div>
    );
};

export default Flow;
export {states}



