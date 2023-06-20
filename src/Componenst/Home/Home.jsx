import React, { useEffect } from 'react';
import cl from './Home.module.scss'
import md5 from 'md5';
import { useState, useRef } from 'react';
import AutoResizableTextarea from '../Common/AutoResizableTextarea/AutoResizableTextarea';
import Form from '../Common/Form/Form';
import StringComparison from './StringComparison/StringComparison';
import { createDraftSafeSelector } from '@reduxjs/toolkit';
import UserObject from './UserObject/UserObject';
 
Object.defineProperty(String.prototype, 'parseTextareaData', {
    value: function (short = true) {
        // console.log(this)
        try {
          const jsonData = JSON.parse(this);
          return { data: jsonData, type: 'json' };
        } catch (error) {
          // Не удалось распарсить как JSON, проверяем на массив PHP
          const phpArrayData = parsePhpArray(this);
        //   console.log(phpArrayData)
          if (phpArrayData) {
            return short == true ?  phpArrayData :   { data: phpArrayData, type: 'phpArray' };
          } else {
            return short == true ? 'parse error' : { data: {}, type: 'parse error' };
          }
        }
    
        function parsePhpArray(text) {

            // Убираем отступы и символы ] или )
            // const cleanLine = (line) => line.trim().replace(/[\[()\]];,/g, "");
            const cleanLine = (line) => line.trim().replace(/[\[()\],';]/g, "");
    
            const lines = text.trim().split("\n"); 

            // console.log(cleanLine(lines[lines.length-2]))

            let filteredArray = lines
            .filter(item=> cleanLine(item) !== '' ? true : false )
            .map(item=>cleanLine(item))
            .filter(item=>item.split('=>').length !== 2 ? true : false )
            .length
            
            console.log(filteredArray)
            if (filteredArray!==0) return 0
            
            let phpArrayData = {};


           

            for (let i = 0; i < lines.length; i++) {

                
                const line = cleanLine(lines[i]);
                
                if (line === "") continue
        
                const keyValue = line.split("=>");
                if (keyValue.length !== 2) continue
        
                const key = cleanLine(keyValue[0]);
                let value = cleanLine(keyValue[1]);
        
                phpArrayData[key] = value
            }  

            console.log(phpArrayData)
            return phpArrayData
        }
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

Object.defineProperty(Object.prototype, 'makeFlatArray', {
    value: function() {
        // let temp
        // console.log('До',this, typeof this)

        if (typeof this !== 'object') return this
    
        if (this && this.hasOwnProperty('sig')) delete this.sig
        if (this && this.hasOwnProperty('pg_sig')) delete this.pg_sig

        // console.log('После',this)
        
        let culc = (obj,array=[], parent_name='') => {
            // console.log(obj)
            let index = 0
            for (let key in obj){
                index++
                let str = index.toString()
                if (typeof  obj[key] == 'object' &&  obj[key] !=null) culc(obj[key],array,parent_name+key + str.padStart(3, '0'))
                else{
                    let a = {}           
                    a.field=parent_name + key + str.padStart(3, '0')
                    a.data=obj[key]
                    array.push(a)
                }          
               
                  
            }
            return array
        }
        
        return  culc(this.data)
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

Object.defineProperty(Object.prototype, 'makeSortArray', {
    value: function() {
        // console.log(this,typeof this)
        if (!Array.isArray(this)) return this
        return  this.sort((a, b) => a.field > b.field ? 1 : -1)
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

Object.defineProperty(Object.prototype, 'makeString', {
    value: function(url, secret) {

        // console.log(this,typeof this)

        if (!Array.isArray(this)) return this

        let result = url.split('/').at(-1) + ';'.concat(this.map(i=> i.data).join(';'),';',secret)
       
        // console.log(result)

        return result
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

Object.defineProperty(String.prototype, 'makeSig', {
    value: function() {
        // let temp
        if (this == 'parse error') return this
        
        return  md5(this)
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

Object.defineProperty(String.prototype, 'compare', {
    value: function compareStrings(str) {
        // Проверяем, являются ли строки идентичными
        if (this === str) {
          return -1;
        }
      
        // Определяем максимальную длину для итерации
        const maxLength = Math.min(this.length, str.length);
      
        // Итерируем по символам обеих строк
        for (let i = 0; i < maxLength; i++) {
          // Если символы отличаются, возвращаем индекс первого отличного символа
          if (this[i] !== str[i]) {
            return i;
          }
        }
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

const merchantInitData = [
    // {id:1, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'pg_merchant_id', labelText:'Номер магазина', data:541637},
    {id:2, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'secret_key',     labelText:'Секретный ключ', data:'9SgDhuBrKetRfYjY'},
    {id:3, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'url',            labelText:'Адрес еднпойнта', data:'https://api.paybox.money/init_payment.php'},
]
   
const Home = () => {
    const [textForParse, setTextForParse]           = useState('init_payment.php;parse error;9SgDhuBrKetRfYjY')
    const [sortedArray, setSortedArray]      = useState([])
    const [sortedString, setSortedString]   = useState('no data')

    const [merchantString, setMerchantString]  = useState('init_payment.php;parse eor;9SgDhuBrKetRfYjY')
    const [merchantData, setMerchantData] = useState(merchantInitData)
    
    useEffect(()=>{
        setSortedArray( textForParse
            .parseTextareaData()
            .makeFlatArray() 
            .makeSortArray()
            )            
    },[textForParse,merchantData])   

    useEffect(()=>{
        let string = sortedArray.makeString( merchantData.
                        filter(i=>i.inputID=='url')[0].data , merchantData.filter(i=>i.inputID=='secret_key')[0].data)               
        setSortedString(string)    
    },[sortedArray])

    return (
        <div className={cl.wrapper}>
            <h4>Проверка подписи</h4>

            <div className={cl.content}>
                <div className={cl.left}>
                    <Form 
                        status = {merchantData}
                        setStatus={setMerchantData}
                    />
                   
                    <div className={cl.sign}>
                        <h4>Подпись</h4>
                        {
                            sortedArray
                            .makeString( merchantData.filter(i=>i.inputID=='url')[0].data , merchantData.filter(i=>i.inputID=='secret_key')[0].data)
                            .makeSig()
                        }
                    </div>
                                       
                </div>
                <UserObject
                    setjsontext  = {setTextForParse}
                    jsontext = {textForParse} 
                />  
                <div className={cl.lines}>
                    {
                        // sortedArray
                        Array.isArray(sortedArray) 
                        ?
                            sortedArray.map((item,index)=>{
                                return (
                                    <div className={cl.line} key = {index}> {item.data}  </div>
                                )
                            })
                        : ''    
                    }
                </div>

            </div>            

            <div className={cl.calculatedString}>
                <h4>Строка</h4>
                <p>
                    {sortedString}
                </p>
            </div>

            <div className={cl.custString}>
                <h4>Сравнить</h4>
                
                <AutoResizableTextarea 
                    setjsontext  = {setMerchantString}
                    jsontext = {merchantString}
                    addClass={cl.text}
                />
  
                <StringComparison 
                     string1={sortedString}   
                     string2={merchantString}   
                />
        
            </div>
           
          
        </div>    
    );
};

export default Home;




