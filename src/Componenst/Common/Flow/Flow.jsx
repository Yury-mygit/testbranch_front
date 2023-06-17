import React from 'react';
import cl from './Flow.module.scss'

import Block from './Block/Block';
import Rhombus from './Rhombus/Rhombus';
import Ivent from './Ivent/Ivent';





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
        IvetnPayStart:              {id:0,    status:'completed',    text:'Начало оплаты'},
        requestB3DS:                {id:1,    status:'completed',      text:'Запрос'},
        responceB3DS:               {id:2,    status:'completed',   text:'Ответ'},
        choiceStatusB3DS:           {id:3,    status:'completed',   text:'pg_status=?'},
        errorB3DS:                  {id:4,    status:'error',   text:'ошибка','testBefore':"error"},
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

let complitedWithout3DSOrder  = 
    {
        IvetnPayStart:              {id:0,    status:'completed',    text:'Начало оплаты'},
        requestB3DS:                {id:1,    status:'completed',      text:'Запрос'},
        responceB3DS:               {id:2,    status:'completed',   text:'Ответ'},
        choiceStatusB3DS:           {id:3,    status:'completed',   text:'pg_status=?'},
        errorB3DS:                  {id:4,    status:'notreached',   text:'ошибка','testBefore':"error"},
        choiceIs3DSRequired:        {id:5,    status:'completed',   text:'pg_3ds=?','testBefore':"ok"},
        successFinalWithout3DS:     {id:6,    status:'current',   text:'Завершен успешно'},
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

let dataFor3DSOrder  = 
    {
        IvetnPayStart:              {id:0,    status:'completed',    text:'Начало оплаты'},
        requestB3DS:                {id:1,    status:'completed',      text:'Запрос'},
        responceB3DS:               {id:2,    status:'completed',   text:'Ответ'},
        choiceStatusB3DS:           {id:3,    status:'completed',   text:'pg_status=?'},
        errorB3DS:                  {id:4,    status:'notreached',   text:'ошибка','testBefore':"error"},
        choiceIs3DSRequired:        {id:5,    status:'completed',   text:'pg_3ds=?','testBefore':"ok"},
        successFinalWithout3DS:     {id:6,    status:'notreached',   text:'Завершен успешно'},
        requestUserTo3ds:           {id:7,    status:'current',   text:'Отправка на 3DS'},
        waitingForParesMd:          {id:8,    status:'notreached',   text:'Ожи-ние pares/md'},
        choiceParesMd:              {id:9,    status:'notreached',   text:'pares/md?'},
        errorNotReceivedParesMd:    {id:10,    status:'notreached',   text:'Ошибка платежа'},
        requestA3DS:                {id:11,    status:'notreached',   text:'Отправка запроса'},
        responceA3DS:               {id:12,    status:'notreached',   text:'Получение ответа'},
        choiceA3DS:                 {id:13,    status:'notreached',   text:'Платеж успешный?'},        
        IventFail:                  {id:14,    status:'notreached',   text:'ошибка'},
        IventSuccess:               {id:15,    status:'notreached',   text:'Завершен успешно'}, 
}

let waitingForParesMd  = 
    {
        IvetnPayStart:              {id:0,    status:'completed',    text:'Начало оплаты'},
        requestB3DS:                {id:1,    status:'completed',      text:'Запрос'},
        responceB3DS:               {id:2,    status:'completed',   text:'Ответ'},
        choiceStatusB3DS:           {id:3,    status:'completed',   text:'pg_status=?'},
        errorB3DS:                  {id:4,    status:'notreached',   text:'ошибка','testBefore':"error"},
        choiceIs3DSRequired:        {id:5,    status:'completed',   text:'pg_3ds=?','testBefore':"ok"},
        successFinalWithout3DS:     {id:6,    status:'notreached',   text:'Завершен успешно'},
        requestUserTo3ds:           {id:7,    status:'completed',   text:'Отправка на 3DS'},
        waitingForParesMd:          {id:8,    status:'current',   text:'Ожи-ние pares/md'},
        choiceParesMd:              {id:9,    status:'notreached',   text:'pares/md?'},
        errorNotReceivedParesMd:    {id:10,    status:'notreached',   text:'Ошибка платежа'},
        requestA3DS:                {id:11,    status:'notreached',   text:'Отправка запроса'},
        responceA3DS:               {id:12,    status:'notreached',   text:'Получение ответа'},
        choiceA3DS:                 {id:13,    status:'notreached',   text:'Платеж успешный?'},        
        IventFail:                  {id:14,    status:'notreached',   text:'ошибка'},
        IventSuccess:               {id:15,    status:'notreached',   text:'Завершен успешно'},  
}

let errorNotReceivedParesMd  = 
    {
        IvetnPayStart:              {id:0,    status:'completed',    text:'Начало оплаты'},
        requestB3DS:                {id:1,    status:'completed',      text:'Запрос'},
        responceB3DS:               {id:2,    status:'completed',   text:'Ответ'},
        choiceStatusB3DS:           {id:3,    status:'completed',   text:'pg_status=?'},
        errorB3DS:                  {id:4,    status:'notreached',   text:'ошибка','testBefore':"error"},
        choiceIs3DSRequired:        {id:5,    status:'completed',   text:'pg_3ds=?','testBefore':"ok"},
        successFinalWithout3DS:     {id:6,    status:'notreached',   text:'Завершен успешно'},
        requestUserTo3ds:           {id:7,    status:'completed',   text:'Отправка на 3DS'},
        waitingForParesMd:          {id:8,    status:'completed',   text:'Ожи-ние pares/md'},
        choiceParesMd:              {id:9,    status:'completed',   text:'pares/md?'},
        errorNotReceivedParesMd:    {id:10,    status:'error',   text:'Ошибка платежа'},
        requestA3DS:                {id:11,    status:'notreached',   text:'Отправка запроса'},
        responceA3DS:               {id:12,    status:'notreached',   text:'Получение ответа'},
        choiceA3DS:                 {id:13,    status:'notreached',   text:'Платеж успешный?'},        
        IventFail:                  {id:14,    status:'notreached',   text:'ошибка'},
        IventSuccess:               {id:15,    status:'notreached',   text:'Завершен успешно'},  
}
let requestA3DS  = 
    {
        IvetnPayStart:              {id:0,    status:'completed',    text:'Начало оплаты'},
        requestB3DS:                {id:1,    status:'completed',      text:'Запрос'},
        responceB3DS:               {id:2,    status:'completed',   text:'Ответ'},
        choiceStatusB3DS:           {id:3,    status:'completed',   text:'pg_status=?'},
        errorB3DS:                  {id:4,    status:'notreached',   text:'ошибка','testBefore':"error"},
        choiceIs3DSRequired:        {id:5,    status:'completed',   text:'pg_3ds=?','testBefore':"ok"},
        successFinalWithout3DS:     {id:6,    status:'notreached',   text:'Завершен успешно'},
        requestUserTo3ds:           {id:7,    status:'completed',   text:'Отправка на 3DS'},
        waitingForParesMd:          {id:8,    status:'completed',   text:'Ожи-ние pares/md'},
        choiceParesMd:              {id:9,    status:'completed',   text:'pares/md?'},
        errorNotReceivedParesMd:    {id:10,    status:'notreached',   text:'Ошибка платежа'},
        requestA3DS:                {id:11,    status:'current',   text:'Отправка запроса'},
        responceA3DS:               {id:12,    status:'notreached',   text:'Получение ответа'},
        choiceA3DS:                 {id:13,    status:'notreached',   text:'Платеж успешный?'},        
        IventFail:                  {id:14,    status:'notreached',   text:'ошибка'},
        IventSuccess:               {id:15,    status:'notreached',   text:'Завершен успешно'},  
}
let responceA3DS  = 
    {
        IvetnPayStart:              {id:0,    status:'completed',    text:'Начало оплаты'},
        requestB3DS:                {id:1,    status:'completed',      text:'Запрос'},
        responceB3DS:               {id:2,    status:'completed',   text:'Ответ'},
        choiceStatusB3DS:           {id:3,    status:'completed',   text:'pg_status=?'},
        errorB3DS:                  {id:4,    status:'notreached',   text:'ошибка','testBefore':"error"},
        choiceIs3DSRequired:        {id:5,    status:'completed',   text:'pg_3ds=?','testBefore':"ok"},
        successFinalWithout3DS:     {id:6,    status:'notreached',   text:'Завершен успешно'},
        requestUserTo3ds:           {id:7,    status:'completed',   text:'Отправка на 3DS'},
        waitingForParesMd:          {id:8,    status:'completed',   text:'Ожи-ние pares/md'},
        choiceParesMd:              {id:9,    status:'completed',   text:'pares/md?'},
        errorNotReceivedParesMd:    {id:10,    status:'notreached',   text:'Ошибка платежа'},
        requestA3DS:                {id:11,    status:'completed',   text:'Отправка запроса'},
        responceA3DS:               {id:12,    status:'current',   text:'Получение ответа'},
        choiceA3DS:                 {id:13,    status:'notreached',   text:'Платеж успешный?'},        
        IventFail:                  {id:14,    status:'notreached',   text:'ошибка'},
        IventSuccess:               {id:15,    status:'notreached',   text:'Завершен успешно'},  
}
let finishFail  = 
    {
        IvetnPayStart:              {id:0,    status:'completed',    text:'Начало оплаты'},
        requestB3DS:                {id:1,    status:'completed',      text:'Запрос'},
        responceB3DS:               {id:2,    status:'completed',   text:'Ответ'},
        choiceStatusB3DS:           {id:3,    status:'completed',   text:'pg_status=?'},
        errorB3DS:                  {id:4,    status:'notreached',   text:'ошибка','testBefore':"error"},
        choiceIs3DSRequired:        {id:5,    status:'completed',   text:'pg_3ds=?','testBefore':"ok"},
        successFinalWithout3DS:     {id:6,    status:'notreached',   text:'Завершен успешно'},
        requestUserTo3ds:           {id:7,    status:'completed',   text:'Отправка на 3DS'},
        waitingForParesMd:          {id:8,    status:'completed',   text:'Ожи-ние pares/md'},
        choiceParesMd:              {id:9,    status:'completed',   text:'pares/md?'},
        errorNotReceivedParesMd:    {id:10,    status:'notreached',   text:'Ошибка платежа'},
        requestA3DS:                {id:11,    status:'completed',   text:'Отправка запроса'},
        responceA3DS:               {id:12,    status:'completed',   text:'Получение ответа'},
        choiceA3DS:                 {id:13,    status:'completed',   text:'Платеж успешный?'},        
        IventFail:                  {id:14,    status:'error',   text:'ошибка'},
        IventSuccess:               {id:15,    status:'notreached',   text:'Завершен успешно'},  
}
let finishSuccess  = 
    {
        IvetnPayStart:              {id:0,    status:'completed',    text:'Начало оплаты'},
        requestB3DS:                {id:1,    status:'completed',      text:'Запрос'},
        responceB3DS:               {id:2,    status:'completed',   text:'Ответ'},
        choiceStatusB3DS:           {id:3,    status:'completed',   text:'pg_status=?'},
        errorB3DS:                  {id:4,    status:'notreached',   text:'ошибка','testBefore':"error"},
        choiceIs3DSRequired:        {id:5,    status:'completed',   text:'pg_3ds=?','testBefore':"ok"},
        successFinalWithout3DS:     {id:6,    status:'notreached',   text:'Завершен успешно'},
        requestUserTo3ds:           {id:7,    status:'completed',   text:'Отправка на 3DS'},
        waitingForParesMd:          {id:8,    status:'completed',   text:'Ожи-ние pares/md'},
        choiceParesMd:              {id:9,    status:'completed',   text:'pares/md?'},
        errorNotReceivedParesMd:    {id:10,    status:'notreached',   text:'Ошибка платежа'},
        requestA3DS:                {id:11,    status:'completed',   text:'Отправка запроса'},
        responceA3DS:               {id:12,    status:'completed',   text:'Получение ответа'},
        choiceA3DS:                 {id:13,    status:'completed',   text:'Платеж успешный?'},        
        IventFail:                  {id:14,    status:'notreached',   text:'ошибка'},
        IventSuccess:               {id:15,    status:'current',   text:'Завершен успешно'},  
}

let states = {
    newOrder:                     'newOrder', 
    sendedNotReceivedOrder:       'sendedNotReceivedOrder', 
    erroRreceivedBefore3DSOrder:  'erroRreceivedBefore3DSOrder', 
    complitedWithout3DSOrder:     'complitedWithout3DSOrder', 
    dataFor3DSOrder: 'dataFor3DSOrder', 
    waitingForParesMd: 'waitingForParesMd', 
    errorNotReceivedParesMd: 'errorNotReceivedParesMd', 
    requestA3DS: 'requestA3DS', 
    responceA3DS: 'responceA3DS', 
    finishFail: 'finishFail', 
    finishSuccess: 'finishSuccess', 
    
}


const Flow = ({status}) => {

    // console.log(newOrder ,erroRreceivedBefore3DSOrder  )

    let params = newOrder

    if (status=='new order') params = newOrder

    // params = finishSuccess

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



