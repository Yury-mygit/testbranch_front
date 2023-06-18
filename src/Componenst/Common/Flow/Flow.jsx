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

// let flowStates = {
//     newOrder:                     'newOrder', 
//     sendedNotReceivedOrder:       'sendedNotReceivedOrder', 
//     erroRreceivedBefore3DSOrder:  'erroRreceivedBefore3DSOrder', 
//     complitedWithout3DSOrder:     'complitedWithout3DSOrder', 
//     dataFor3DSOrder:              'dataFor3DSOrder', 
//     waitingForParesMd:             'waitingForParesMd', 
//     errorNotReceivedParesMd: 'errorNotReceivedParesMd', 
//     requestA3DS: 'requestA3DS', 
//     responceA3DS: 'responceA3DS', 
//     finishFail: 'finishFail', 
//     finishSuccess: 'finishSuccess', 
    
// }

let flowText = {
     text0: {text:'Начать оплату',textBefore:'',},
     text1: {text:'Отправка запроса',textBefore:'',},
     text2: {text:'Получение ответа',textBefore:'',},
     text3: {text:'pg_status=?',textBefore:'',},
     text4: {text:'ошибка',textBefore:'error',},
     text5: {text:'pg_3ds=?',textBefore:'ok',},
     text6: {text:'Завершен успешно',textBefore:'0',},
     text7: {text:'Отправка на 3DS',textBefore:'1',},
     text8: {text:'Ожи-ние pares/md',textBefore:'',},
     text9:{text:'pares/md?',textBefore:'',},
     text10:{text:'Ошибка платежа',textBefore:'нет',},
     text11:{text:'Отправка запроса',textBefore:'да',},
     text12:{text:'Получение ответа',textBefore:'',},
     text13:{text:'Платеж успешный?',textBefore:'',},
     text14:{text:'ошибка',textBefore:'нет',},
     text15:{text:'Завершен успешно',textBefore:'да',},
}


let flowStates2 = [
    {status: 'newOrder', data:{
        IvetnPayStart:              {id:0,     status:'current',       text:flowText.text0.text,   textBefore:flowText.text0.textBefore},
        requestB3DS:                {id:1,     status:'notreached',    text:flowText.text1.text,   textBefore:flowText.text1.textBefore},
        responceB3DS:               {id:2,     status:'notreached',    text:flowText.text2.text,   textBefore:flowText.text2.textBefore},
        choiceStatusB3DS:           {id:3,     status:'notreached',    text:flowText.text3.text,   textBefore:flowText.text3.textBefore },
        errorB3DS:                  {id:4,     status:'notreached',    text:flowText.text4.text,   textBefore:flowText.text4.textBefore },
        choiceIs3DSRequired:        {id:5,     status:'notreached',    text:flowText.text5.text,   textBefore:flowText.text5.textBefore },
        successFinalWithout3DS:     {id:6,     status:'notreached',    text:flowText.text6.text,   textBefore:flowText.text6.textBefore },
        requestUserTo3ds:           {id:7,     status:'notreached',    text:flowText.text7.text,   textBefore:flowText.text7.textBefore },
        waitingForParesMd:          {id:8,     status:'notreached',    text:flowText.text8.text,   textBefore:flowText.text8.textBefore },
        choiceParesMd:              {id:9,     status:'notreached',    text:flowText.text9.text,   textBefore:flowText.text9.textBefore },
        errorNotReceivedParesMd:    {id:10,    status:'notreached',   text:flowText.text10.text,   textBefore:flowText.text10.textBefore},
        requestA3DS:                {id:11,    status:'notreached',   text:flowText.text11.text,   textBefore:flowText.text11.textBefore},
        responceA3DS:               {id:12,    status:'notreached',   text:flowText.text12.text,   textBefore:flowText.text12.textBefore},
        choiceA3DS:                 {id:13,    status:'notreached',   text:flowText.text13.text,   textBefore:flowText.text13.textBefore},        
        IventFail:                  {id:14,    status:'notreached',   text:flowText.text14.text,   textBefore:flowText.text14.textBefore},     
        IventSuccess:               {id:15,    status:'notreached',   text:flowText.text15.text,   textBefore:flowText.text15.textBefore},
    }}, 
    {status:       'requestB3DS', data:{
            IvetnPayStart:              {id:0,     status:'completed',     text:flowText.text0.text,   textBefore:flowText.text0.textBefore},
            requestB3DS:                {id:1,     status:'current',       text:flowText.text1.text,   textBefore:flowText.text1.textBefore},
            responceB3DS:               {id:2,     status:'notreached',    text:flowText.text2.text,   textBefore:flowText.text2.textBefore},
            choiceStatusB3DS:           {id:3,     status:'notreached',    text:flowText.text3.text,   textBefore:flowText.text3.textBefore},
            errorB3DS:                  {id:4,     status:'notreached',    text:flowText.text4.text,   textBefore:flowText.text4.textBefore},
            choiceIs3DSRequired:        {id:5,     status:'notreached',    text:flowText.text5.text,   textBefore:flowText.text5.textBefore},
            successFinalWithout3DS:     {id:6,     status:'notreached',    text:flowText.text6.text,   textBefore:flowText.text6.textBefore},
            requestUserTo3ds:           {id:7,     status:'notreached',    text:flowText.text7.text,   textBefore:flowText.text7.textBefore},
            waitingForParesMd:          {id:8,     status:'notreached',    text:flowText.text8.text,   textBefore:flowText.text8.textBefore},
            choiceParesMd:              {id:9,     status:'notreached',    text:flowText.text9.text,   textBefore:flowText.text9.textBefore},
            errorNotReceivedParesMd:    {id:10,    status:'notreached',   text:flowText.text10.text,   textBefore:flowText.text10.textBefore},
            requestA3DS:                {id:11,    status:'notreached',   text:flowText.text11.text,   textBefore:flowText.text11.textBefore},
            responceA3DS:               {id:12,    status:'notreached',   text:flowText.text12.text,   textBefore:flowText.text12.textBefore},
            choiceA3DS:                 {id:13,    status:'notreached',   text:flowText.text13.text,   textBefore:flowText.text13.textBefore},        
            IventFail:                  {id:14,    status:'notreached',   text:flowText.text14.text,   textBefore:flowText.text14.textBefore},
            IventSuccess:               {id:15,    status:'notreached',   text:flowText.text15.text,   textBefore:flowText.text15.textBefore}, 
    }}, 
    {status:       'responceB3DS', data:{
        IvetnPayStart:              {id:0,    status:'completed',      text:flowText.text0.text,   textBefore:flowText.text0.textBefore      },
        requestB3DS:                {id:1,    status:'completed',      text:flowText.text1.text,   textBefore:flowText.text1.textBefore      },
        responceB3DS:               {id:2,    status:'current',        text:flowText.text2.text,   textBefore:flowText.text2.textBefore      },
        choiceStatusB3DS:           {id:3,    status:'notreached',     text:flowText.text3.text,   textBefore:flowText.text3.textBefore      },
        errorB3DS:                  {id:4,    status:'notreached',     text:flowText.text4.text,   textBefore:flowText.text4.textBefore      },
        choiceIs3DSRequired:        {id:5,    status:'notreached',     text:flowText.text5.text,   textBefore:flowText.text5.textBefore      },
        successFinalWithout3DS:     {id:6,    status:'notreached',     text:flowText.text6.text,   textBefore:flowText.text6.textBefore      },
        requestUserTo3ds:           {id:7,    status:'notreached',     text:flowText.text7.text,   textBefore:flowText.text7.textBefore      },
        waitingForParesMd:          {id:8,    status:'notreached',     text:flowText.text8.text,   textBefore:flowText.text8.textBefore      },
        choiceParesMd:              {id:9,    status:'notreached',     text:flowText.text9.text,   textBefore:flowText.text9.textBefore      },
        errorNotReceivedParesMd:    {id:10,    status:'notreached',   text:flowText.text10.text,   textBefore:flowText.text10.textBefore     },
        requestA3DS:                {id:11,    status:'notreached',   text:flowText.text11.text,   textBefore:flowText.text11.textBefore     },
        responceA3DS:               {id:12,    status:'notreached',   text:flowText.text12.text,   textBefore:flowText.text12.textBefore     },
        choiceA3DS:                 {id:13,    status:'notreached',   text:flowText.text13.text,   textBefore:flowText.text13.textBefore     },        
        IventFail:                  {id:14,    status:'notreached',   text:flowText.text14.text,   textBefore:flowText.text14.textBefore     },
        IventSuccess:               {id:15,    status:'notreached',   text:flowText.text15.text,   textBefore:flowText.text15.textBefore     }, 
    }}, 
    {status:  'erroRreceivedBefore3DSOrder', data:{
        IvetnPayStart:              {id:0,    status:'completed',       text:flowText.text0.text,   textBefore:flowText.text0.textBefore                },
        requestB3DS:                {id:1,    status:'completed',       text:flowText.text1.text,   textBefore:flowText.text1.textBefore           },
        responceB3DS:               {id:2,    status:'completed',       text:flowText.text2.text,   textBefore:flowText.text2.textBefore      },
        choiceStatusB3DS:           {id:3,    status:'completed',       text:flowText.text3.text,   textBefore:flowText.text3.textBefore              },
        errorB3DS:                  {id:4,    status:'error',           text:flowText.text4.text,   textBefore:flowText.text4.textBefore                              },
        choiceIs3DSRequired:        {id:5,    status:'notreached',      text:flowText.text5.text,   textBefore:flowText.text5.textBefore                              },
        successFinalWithout3DS:     {id:6,    status:'notreached',      text:flowText.text6.text,   textBefore:flowText.text6.textBefore                    },
        requestUserTo3ds:           {id:7,    status:'notreached',      text:flowText.text7.text,   textBefore:flowText.text7.textBefore                   },
        waitingForParesMd:          {id:8,    status:'notreached',      text:flowText.text8.text,   textBefore:flowText.text8.textBefore                    },
        choiceParesMd:              {id:9,    status:'notreached',      text:flowText.text9.text,   textBefore:flowText.text9.textBefore             },
        errorNotReceivedParesMd:    {id:10,    status:'notreached',     text:flowText.text10.text,   textBefore:flowText.text10.textBefore                 },
        requestA3DS:                {id:11,    status:'notreached',     text:flowText.text11.text,   textBefore:flowText.text11.textBefore                   },
        responceA3DS:               {id:12,    status:'notreached',     text:flowText.text12.text,   textBefore:flowText.text12.textBefore                   },
        choiceA3DS:                 {id:13,    status:'notreached',     text:flowText.text13.text,   textBefore:flowText.text13.textBefore                   },        
        IventFail:                  {id:14,    status:'notreached',     text:flowText.text14.text,   textBefore:flowText.text14.textBefore         },
        IventSuccess:               {id:15,    status:'notreached',     text:flowText.text15.text,   textBefore:flowText.text15.textBefore                  },
    }}, 
    {status:     'complitedWithout3DSOrder', data:{
        IvetnPayStart:              {id:0,    status:'completed',     text:flowText.text0.text,   textBefore:flowText.text0.textBefore                 },
        requestB3DS:                {id:1,    status:'completed',     text:flowText.text1.text,   textBefore:flowText.text1.textBefore            },
        responceB3DS:               {id:2,    status:'completed',     text:flowText.text2.text,   textBefore:flowText.text2.textBefore        },
        choiceStatusB3DS:           {id:3,    status:'completed',     text:flowText.text3.text,   textBefore:flowText.text3.textBefore              },
        errorB3DS:                  {id:4,    status:'notreached',    text:flowText.text4.text,   textBefore:flowText.text4.textBefore                               },
        choiceIs3DSRequired:        {id:5,    status:'completed',     text:flowText.text5.text,   textBefore:flowText.text5.textBefore                             },
        successFinalWithout3DS:     {id:6,    status:'current',       text:flowText.text6.text,   textBefore:flowText.text6.textBefore                   },
        requestUserTo3ds:           {id:7,    status:'notreached',    text:flowText.text7.text,   textBefore:flowText.text7.textBefore                   },
        waitingForParesMd:          {id:8,    status:'notreached',    text:flowText.text8.text,   textBefore:flowText.text8.textBefore                    },
        choiceParesMd:              {id:9,    status:'notreached',    text:flowText.text9.text,   textBefore:flowText.text9.textBefore             },
        errorNotReceivedParesMd:    {id:10,    status:'notreached',   text:flowText.text10.text,   textBefore:flowText.text10.textBefore                 },
        requestA3DS:                {id:11,    status:'notreached',   text:flowText.text11.text,   textBefore:flowText.text11.textBefore                   },
        responceA3DS:               {id:12,    status:'notreached',   text:flowText.text12.text,   textBefore:flowText.text12.textBefore                   },
        choiceA3DS:                 {id:13,    status:'notreached',   text:flowText.text13.text,   textBefore:flowText.text13.textBefore                   },        
        IventFail:                  {id:14,    status:'notreached',   text:flowText.text14.text,   textBefore:flowText.text14.textBefore         },
        IventSuccess:               {id:15,    status:'notreached',   text:flowText.text15.text,   textBefore:flowText.text15.textBefore                   },
    }}, 
    {status:              'dataFor3DSOrder', data:{
        IvetnPayStart:              {id:0,    status:'completed',     text:flowText.text0.text,   textBefore:flowText.text0.textBefore                 },
        requestB3DS:                {id:1,    status:'completed',     text:flowText.text1.text,   textBefore:flowText.text1.textBefore            },
        responceB3DS:               {id:2,    status:'completed',     text:flowText.text2.text,   textBefore:flowText.text2.textBefore        },
        choiceStatusB3DS:           {id:3,    status:'completed',     text:flowText.text3.text,   textBefore:flowText.text3.textBefore              },
        errorB3DS:                  {id:4,    status:'notreached',    text:flowText.text4.text,   textBefore:flowText.text4.textBefore                               },
        choiceIs3DSRequired:        {id:5,    status:'completed',     text:flowText.text5.text,   textBefore:flowText.text5.textBefore                             },
        successFinalWithout3DS:     {id:6,    status:'notreached',    text:flowText.text6.text,   textBefore:flowText.text6.textBefore                    },
        requestUserTo3ds:           {id:7,    status:'current',       text:flowText.text7.text,   textBefore:flowText.text7.textBefore                  },
        waitingForParesMd:          {id:8,    status:'notreached',    text:flowText.text8.text,   textBefore:flowText.text8.textBefore                    },
        choiceParesMd:              {id:9,    status:'notreached',    text:flowText.text9.text,   textBefore:flowText.text9.textBefore             },
        errorNotReceivedParesMd:    {id:10,    status:'notreached',   text:flowText.text10.text,   textBefore:flowText.text10.textBefore                 },
        requestA3DS:                {id:11,    status:'notreached',   text:flowText.text11.text,   textBefore:flowText.text11.textBefore                   },
        responceA3DS:               {id:12,    status:'notreached',   text:flowText.text12.text,   textBefore:flowText.text12.textBefore                   },
        choiceA3DS:                 {id:13,    status:'notreached',   text:flowText.text13.text,   textBefore:flowText.text13.textBefore                   },        
        IventFail:                  {id:14,    status:'notreached',   text:flowText.text14.text,   textBefore:flowText.text14.textBefore         },
        IventSuccess:               {id:15,    status:'notreached',   text:flowText.text15.text,   textBefore:flowText.text15.textBefore                   },
    }}, 
    {status:            'waitingForParesMd', data:{
        IvetnPayStart:              {id:0,    status:'completed',      text:flowText.text0.text,   textBefore:flowText.text0.textBefore                 },
        requestB3DS:                {id:1,    status:'completed',      text:flowText.text1.text,   textBefore:flowText.text1.textBefore            },
        responceB3DS:               {id:2,    status:'completed',      text:flowText.text2.text,   textBefore:flowText.text2.textBefore        },
        choiceStatusB3DS:           {id:3,    status:'completed',      text:flowText.text3.text,   textBefore:flowText.text3.textBefore              },
        errorB3DS:                  {id:4,    status:'notreached',     text:flowText.text4.text,   textBefore:flowText.text4.textBefore                               },
        choiceIs3DSRequired:        {id:5,    status:'completed',       text:flowText.text5.text,   textBefore:flowText.text5.textBefore                            },
        successFinalWithout3DS:     {id:6,    status:'notreached',     text:flowText.text6.text,   textBefore:flowText.text6.textBefore                    },
        requestUserTo3ds:           {id:7,    status:'completed',       text:flowText.text7.text,   textBefore:flowText.text7.textBefore                 },
        waitingForParesMd:          {id:8,    status:'current',         text:flowText.text8.text,   textBefore:flowText.text8.textBefore                  },
        choiceParesMd:              {id:9,    status:'notreached',      text:flowText.text9.text,   textBefore:flowText.text9.textBefore            },
        errorNotReceivedParesMd:    {id:10,    status:'notreached',     text:flowText.text10.text,   textBefore:flowText.text10.textBefore                },
        requestA3DS:                {id:11,    status:'notreached',     text:flowText.text11.text,   textBefore:flowText.text11.textBefore                  },
        responceA3DS:               {id:12,    status:'notreached',     text:flowText.text12.text,   textBefore:flowText.text12.textBefore                  },
        choiceA3DS:                 {id:13,    status:'notreached',     text:flowText.text13.text,   textBefore:flowText.text13.textBefore                  },        
        IventFail:                  {id:14,    status:'notreached',      text:flowText.text14.text,   textBefore:flowText.text14.textBefore       },
        IventSuccess:               {id:15,    status:'notreached',      text:flowText.text15.text,   textBefore:flowText.text15.textBefore                 },
    }}, 
    {status:      'errorNotReceivedParesMd', data:{
        IvetnPayStart:              {id:0,    status:'completed',       text:flowText.text0.text,   textBefore:flowText.text0.textBefore                      },
        requestB3DS:                {id:1,    status:'completed',       text:flowText.text1.text,   textBefore:flowText.text1.textBefore                 },
        responceB3DS:               {id:2,    status:'completed',       text:flowText.text2.text,   textBefore:flowText.text2.textBefore             },
        choiceStatusB3DS:           {id:3,    status:'completed',       text:flowText.text3.text,   textBefore:flowText.text3.textBefore                   },
        errorB3DS:                  {id:4,    status:'notreached',      text:flowText.text4.text,   textBefore:flowText.text4.textBefore                                    },
        choiceIs3DSRequired:        {id:5,    status:'completed',       text:flowText.text5.text,   textBefore:flowText.text5.textBefore                                  },
        successFinalWithout3DS:     {id:6,    status:'notreached',      text:flowText.text6.text,   textBefore:flowText.text6.textBefore                         },
        requestUserTo3ds:           {id:7,    status:'completed',       text:flowText.text7.text,   textBefore:flowText.text7.textBefore                       },
        waitingForParesMd:          {id:8,    status:'completed',       text:flowText.text8.text,   textBefore:flowText.text8.textBefore                        },
        choiceParesMd:              {id:9,    status:'completed',       text:flowText.text9.text,   textBefore:flowText.text9.textBefore                 },
        errorNotReceivedParesMd:    {id:10,    status:'error',          text:flowText.text10.text,   textBefore:flowText.text10.textBefore                    },
        requestA3DS:                {id:11,    status:'notreached',     text:flowText.text11.text,   textBefore:flowText.text11.textBefore                        },
        responceA3DS:               {id:12,    status:'notreached',     text:flowText.text12.text,   textBefore:flowText.text12.textBefore                        },
        choiceA3DS:                 {id:13,    status:'notreached',     text:flowText.text13.text,   textBefore:flowText.text13.textBefore                        },        
        IventFail:                  {id:14,    status:'notreached',     text:flowText.text14.text,   textBefore:flowText.text14.textBefore              },
        IventSuccess:               {id:15,    status:'notreached',      text:flowText.text15.text,   textBefore:flowText.text15.textBefore                       },
    }}, 
    {status:                  'requestA3DS', data:{
        IvetnPayStart:              {id:0,    status:'completed',       text:flowText.text0.text,   textBefore:flowText.text0.textBefore                },
        requestB3DS:                {id:1,    status:'completed',       text:flowText.text1.text,   textBefore:flowText.text1.textBefore           },
        responceB3DS:               {id:2,    status:'completed',       text:flowText.text2.text,   textBefore:flowText.text2.textBefore       },
        choiceStatusB3DS:           {id:3,    status:'completed',       text:flowText.text3.text,   textBefore:flowText.text3.textBefore             },
        errorB3DS:                  {id:4,    status:'notreached',      text:flowText.text4.text,   textBefore:flowText.text4.textBefore                              },
        choiceIs3DSRequired:        {id:5,    status:'completed',       text:flowText.text5.text,   textBefore:flowText.text5.textBefore                            },
        successFinalWithout3DS:     {id:6,    status:'notreached',      text:flowText.text6.text,   textBefore:flowText.text6.textBefore                   },
        requestUserTo3ds:           {id:7,    status:'completed',       text:flowText.text7.text,   textBefore:flowText.text7.textBefore                 },
        waitingForParesMd:          {id:8,    status:'completed',       text:flowText.text8.text,   textBefore:flowText.text8.textBefore                  },
        choiceParesMd:              {id:9,    status:'completed',       text:flowText.text9.text,   textBefore:flowText.text9.textBefore           },
        errorNotReceivedParesMd:    {id:10,    status:'notreached',      text:flowText.text10.text,   textBefore:flowText.text10.textBefore               },
        requestA3DS:                {id:11,    status:'current',         text:flowText.text11.text,   textBefore:flowText.text11.textBefore                },
        responceA3DS:               {id:12,    status:'notreached',       text:flowText.text12.text,   textBefore:flowText.text12.textBefore                },
        choiceA3DS:                 {id:13,    status:'notreached',      text:flowText.text13.text,   textBefore:flowText.text13.textBefore                 },        
        IventFail:                  {id:14,    status:'notreached',      text:flowText.text14.text,   textBefore:flowText.text14.textBefore       },
        IventSuccess:               {id:15,    status:'notreached',      text:flowText.text15.text,   textBefore:flowText.text15.textBefore                 },
    }}, 
    {status:                 'responceA3DS', data:{
        IvetnPayStart:              {id:0,    status:'completed',     text:flowText.text0.text,   textBefore:flowText.text0.textBefore                      },
        requestB3DS:                {id:1,    status:'completed',     text:flowText.text1.text,   textBefore:flowText.text1.textBefore                 },
        responceB3DS:               {id:2,    status:'completed',     text:flowText.text2.text,   textBefore:flowText.text2.textBefore             },
        choiceStatusB3DS:           {id:3,    status:'completed',     text:flowText.text3.text,   textBefore:flowText.text3.textBefore                   },
        errorB3DS:                  {id:4,    status:'notreached',    text:flowText.text4.text,   textBefore:flowText.text4.textBefore                                    },
        choiceIs3DSRequired:        {id:5,    status:'completed',     text:flowText.text5.text,   textBefore:flowText.text5.textBefore                                  },
        successFinalWithout3DS:     {id:6,    status:'notreached',    text:flowText.text6.text,   textBefore:flowText.text6.textBefore                         },
        requestUserTo3ds:           {id:7,    status:'completed',     text:flowText.text7.text,   textBefore:flowText.text7.textBefore                       },
        waitingForParesMd:          {id:8,    status:'completed',     text:flowText.text8.text,   textBefore:flowText.text8.textBefore                        },
        choiceParesMd:              {id:9,    status:'completed',      text:flowText.text9.text,   textBefore:flowText.text9.textBefore                },
        errorNotReceivedParesMd:    {id:10,    status:'notreached',    text:flowText.text10.text,   textBefore:flowText.text10.textBefore                     },
        requestA3DS:                {id:11,    status:'completed',     text:flowText.text11.text,   textBefore:flowText.text11.textBefore                      },
        responceA3DS:               {id:12,    status:'completed',     text:flowText.text12.text,   textBefore:flowText.text12.textBefore                      },
        choiceA3DS:                 {id:13,    status:'completed',     text:flowText.text13.text,   textBefore:flowText.text13.textBefore                      },        
        IventFail:                  {id:14,    status:'error',          text:flowText.text14.text,   textBefore:flowText.text14.textBefore           },
        IventSuccess:               {id:15,    status:'notreached',     text:flowText.text15.text,   textBefore:flowText.text15.textBefore                      },  
    }}, 
    {status:                   'finishFail', data:{
        IvetnPayStart:              {id:0,    status:'completed',             text:flowText.text0.text,   textBefore:flowText.text0.textBefore                     },
        requestB3DS:                {id:1,    status:'completed',             text:flowText.text1.text,   textBefore:flowText.text1.textBefore                },
        responceB3DS:               {id:2,    status:'completed',             text:flowText.text2.text,   textBefore:flowText.text2.textBefore            },
        choiceStatusB3DS:           {id:3,    status:'completed',             text:flowText.text3.text,   textBefore:flowText.text3.textBefore                  },
        errorB3DS:                  {id:4,    status:'notreached',            text:flowText.text4.text,   textBefore:flowText.text4.textBefore                                   },
        choiceIs3DSRequired:        {id:5,    status:'completed',             text:flowText.text5.text,   textBefore:flowText.text5.textBefore                                 },
        successFinalWithout3DS:     {id:6,    status:'notreached',            text:flowText.text6.text,   textBefore:flowText.text6.textBefore                        },
        requestUserTo3ds:           {id:7,    status:'completed',             text:flowText.text7.text,   textBefore:flowText.text7.textBefore                      },
        waitingForParesMd:          {id:8,    status:'completed',             text:flowText.text8.text,   textBefore:flowText.text8.textBefore                       },
        choiceParesMd:              {id:9,    status:'completed',              text:flowText.text9.text,   textBefore:flowText.text9.textBefore               },
        errorNotReceivedParesMd:    {id:10,    status:'notreached',            text:flowText.text10.text,   textBefore:flowText.text10.textBefore                    },
        requestA3DS:                {id:11,    status:'completed',              text:flowText.text11.text,   textBefore:flowText.text11.textBefore                    },
        responceA3DS:               {id:12,    status:'completed',             text:flowText.text12.text,   textBefore:flowText.text12.textBefore                     },
        choiceA3DS:                 {id:13,    status:'completed',             text:flowText.text13.text,   textBefore:flowText.text13.textBefore                     },        
        IventFail:                  {id:14,    status:'notreached',             text:flowText.text14.text,   textBefore:flowText.text14.textBefore           },
        IventSuccess:               {id:15,    status:'current',               text:flowText.text15.text,   textBefore:flowText.text15.textBefore                    },
    }}, 
    {status:                'finishSuccess', data:{
        IvetnPayStart:              {id:0,    status:'completed',     text:flowText.text0.text,   textBefore:flowText.text0.textBefore                      },
        requestB3DS:                {id:1,    status:'completed',     text:flowText.text1.text,   textBefore:flowText.text1.textBefore                 },
        responceB3DS:               {id:2,    status:'completed',     text:flowText.text2.text,   textBefore:flowText.text2.textBefore             },
        choiceStatusB3DS:           {id:3,    status:'completed',     text:flowText.text3.text,   textBefore:flowText.text3.textBefore                   },
        errorB3DS:                  {id:4,    status:'notreached',    text:flowText.text4.text,   textBefore:flowText.text4.textBefore                                    },
        choiceIs3DSRequired:        {id:5,    status:'completed',     text:flowText.text5.text,   textBefore:flowText.text5.textBefore                                  },
        successFinalWithout3DS:     {id:6,    status:'notreached',    text:flowText.text6.text,   textBefore:flowText.text6.textBefore                         },
        requestUserTo3ds:           {id:7,    status:'completed',     text:flowText.text7.text,   textBefore:flowText.text7.textBefore                       },
        waitingForParesMd:          {id:8,    status:'completed',     text:flowText.text8.text,   textBefore:flowText.text8.textBefore                        },
        choiceParesMd:              {id:9,    status:'completed',     text:flowText.text9.text,   textBefore:flowText.text9.textBefore                 },
        errorNotReceivedParesMd:    {id:10,    status:'notreached',   text:flowText.text10.text,   textBefore:flowText.text10.textBefore                      },
        requestA3DS:                {id:11,    status:'completed',    text:flowText.text11.text,   textBefore:flowText.text11.textBefore                       },
        responceA3DS:               {id:12,    status:'completed',    text:flowText.text12.text,   textBefore:flowText.text12.textBefore                       },
        choiceA3DS:                 {id:13,    status:'completed',    text:flowText.text13.text,   textBefore:flowText.text13.textBefore                       },        
        IventFail:                  {id:14,    status:'notreached',   text:flowText.text14.text,   textBefore:flowText.text14.textBefore              },
        IventSuccess:               {id:15,    status:'current',      text:flowText.text15.text,   textBefore:flowText.text15.textBefore                       },
    }}, 
]

let flowStates2State = {}

flowStates2.forEach(item=>{ flowStates2State[item.status]=item.status }) 
   
let flowStates = flowStates2State

const Flow = ({status = 'newOrder', reset}) => {

    // console.log(flowStates2.filter(item=>item.status == status)[0].data)

    let params = flowStates2.filter(item=>item.status == status)[0].data

    // console.log(params)

    return (
        <div className={cl.wrapper}>
           
            <div className={cl.flow}>
                <div className={[cl.line ,cl.ofs70].join(' ')}> 
                <Ivent text = {params.IvetnPayStart.text} textBefore={params.IventSuccess.textBefore}  status={params.IvetnPayStart.status}/>
                </div>
                <div className={[cl.line ,cl.ofs50].join(' ')}> 
                    <Block text = {params.requestB3DS.text}  textBefore={params.requestB3DS.textBefore} status={params.requestB3DS.status} /> 
                </div>
                <div className={[cl.line ,cl.ofs50].join(' ')}> 
                    <Block text = {params.responceB3DS.text}  textBefore={params.responceB3DS.textBefore} status={params.responceB3DS.status} /> 
                </div>
                <div className={[cl.line ,cl.ofs50].join(' ')}> 
                    <Rhombus  text = {params.choiceStatusB3DS.text}  textBefore={params.choiceStatusB3DS.textBefore}  status={params.choiceStatusB3DS.status}  /> 
                </div>
                <div className={cl.line}> 
                    <Ivent   text = {params.errorB3DS.text}            textBefore={params.errorB3DS.textBefore}           status={params.errorB3DS.status}/> 
                    <Rhombus text = {params.choiceIs3DSRequired.text}  textBefore={params.choiceIs3DSRequired.textBefore} status={params.choiceIs3DSRequired.status}/>
                </div>
                <div className={[cl.line, cl.ofs60, cl.w240].join(' ')}> 
                    <Ivent text = {params.successFinalWithout3DS.text}  textBefore={params.successFinalWithout3DS.textBefore}    status={params.successFinalWithout3DS.status} /> 
                    <Block text = {params.requestUserTo3ds.text}        textBefore={params.requestUserTo3ds.textBefore}          status={params.requestUserTo3ds.status} /> 
                </div>
                <div className={[cl.line, cl.ofs165].join(' ')}> 
                    <Block text = {params.waitingForParesMd.text}  textBefore={params.waitingForParesMd.textBefore} status={params.waitingForParesMd.status} /> 
                </div>
                <div className={[cl.line, cl.ofs150].join(' ')}> 
                    <Rhombus text = {params.choiceParesMd.text} textBefore={params.choiceParesMd.textBefore}  status={params.choiceParesMd.status}/>  
                </div>
                <div className={[cl.line, cl.ofs140, cl.w240].join(' ')}> 
                    <Ivent text = {params.errorNotReceivedParesMd.text}   textBefore={params.errorNotReceivedParesMd.textBefore} status={params.errorNotReceivedParesMd.status} />
                    <Block text = {params.requestA3DS.text}               textBefore={params.requestA3DS.textBefore}             status={params.requestA3DS.status} />
                </div>
                <div className={[cl.line, cl.ofs245].join(' ')}> 
                    <Block text = {params.responceA3DS.text} textBefore={params.responceA3DS.textBefore} status={params.responceA3DS.status}/>  
                </div>
                <div className={[cl.line, cl.ofs230].join(' ')}> 
                    <Rhombus text = {params.choiceA3DS.text} textBefore= {params.choiceA3DS.textBefore}  status={params.choiceA3DS.status}/>  
                </div>
                <div className={[cl.line, cl.ofs180, cl.w240].join(' ')}> 
                    <Ivent text = {params.IventFail.text}       textBefore={params.IventSuccess.textBefore} status={params.IventFail.status} />
                    <Ivent text = {params.IventSuccess.text}    textBefore={params.IventSuccess.textBefore} status={params.IventSuccess.status} /> 
                </div>
            </div>
            <button onClick={()=>reset()}>Сбросить</button>
        </div>
    );
};

export default Flow;
export {flowStates}



