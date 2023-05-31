import React, { useEffect } from 'react';
import cl from './Home.module.scss'
import md5 from 'md5';
import axios from 'axios';
import { useState, useRef } from 'react';
import AutoResizableTextarea from '../Common/AutoResizableTextarea/AutoResizableTextarea';
import * as jose from 'jose'

Object.defineProperty(String.prototype, 'customMethod', {
    value: function() {
      // Ваш код для нового метода
      return this.toUpperCase();
    },
    enumerable: false,
    writable: true,
    configurable: true
  });

  
Object.defineProperty(String.prototype, 'convertToJSON', {
    value: function() {
        let jsonString = null;
        try {
            // Проверяем, является ли текст валидным JSON
            jsonString = JSON.stringify(JSON.parse(this), null, 2);
          } 
        catch (error) {
              console.error({'error':"Невозможно преобразовать текст в JSON"});
            }
        
            console.log(jsonString ==null ? 'error' : jsonString)
        return jsonString ==null ? 'error' : jsonString;
    },
    enumerable: false,
    writable: true,
    configurable: true
  });


Object.defineProperty(String.prototype, 'parseJSONSafely', {
    value: function() {
        try {
            return JSON.parse(this);
        }
        catch (e) {
            return 'parse error'
        }
    },
    enumerable: false,
    writable: true,
    configurable: true
  });
  

const convertToJSON = (text) =>{
    let jsonString = null;
    try {
        // Проверяем, является ли текст валидным JSON
        jsonString = JSON.stringify(JSON.parse(text), null, 2);
      } 
    catch (error) {
          console.error("Невозможно преобразовать текст в JSON");
        }
    
    return jsonString;
  }

const makeFlat = (obj) => {
    
    let temp

    temp = convertToJSON(obj)
    temp = parseJSONSafely(temp)


    if (temp && temp.hasOwnProperty('sig')) delete temp.sig
    if (temp && temp.hasOwnProperty('pg_sig')) delete temp.pg_sig
    
    
    return  culc(temp)
}

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

const parseJSONSafely =(str) => {
    try {
        return JSON.parse(str);
    }
    catch (e) {
        return 'parse error'
    }
    }


    
const Home = () => {
    const [jsontext, setjsontext]           = useState('')
    const [custStr, setCustStr]             = useState('')
    const [sortedString, setSortedString]   = useState('')
    const [merchantId, setMerchantId]       = useState('')
    const [url, setUrl]                     = useState('')
    const [merchantKey, setMerchantKey]     = useState('')


    console.log(
        jsontext.
        convertToJSON().
        parseJSONSafely()
    ); 

    useEffect(()=>{

        let flatTestjson = makeFlat(jsontext)
        
        let sortedFlatTestjson = flatTestjson.filter(item=>item.field!='sig').sort((a, b) => a.field > b.field ? 1 : -1)
        
        let dataString =   sortedFlatTestjson.map(i=> i.data).join(';')

        dataString =  url.split('/').at(-1) + ';'.concat(dataString,';',merchantKey)

        console.log( dataString)
        console.log(md5 (dataString))
        setSortedString(dataString)

        
        
    },[jsontext])


    var str = 'hello world';
   

    return (
        <div className={cl.wrapper}>
            
            <section className={cl.jsonparserwrapper}>
                    <h4>Проверка подписи</h4>
                    <div className={cl.input}>
                        <label>Идентификатор магазина<input
                            type="text"
                            onChange={(e)=>setMerchantId(e.target.value)}
                            value={merchantId}
                         /></label>
                        <label>Секретный ключ<input
                            type="text"
                            onChange={(e)=>setMerchantKey(e.target.value)}
                            value={merchantKey}
                         /></label>
                        <label>URL<input
                            type="text"
                            onChange={(e)=>setUrl(e.target.value)}
                            value={url}
                         /> </label>
                    </div>


                    <div className={cl.jsonparserinput}>
                        
                        <AutoResizableTextarea 
                             
                            setjsontext  = {setjsontext}
                            jsontext      = {jsontext}
                        />
                    </div>
                    <div>
                        {sortedString}
                    </div>
                    <div className={cl.custString}>
                        <textarea 
                                onChange={(e)=>{
                                    // console.log(e.target.value)
                                    setCustStr(e.target.value)
                                  }} 
                            
                                rows={4}
                                  
                            />
                    </div>
                    <button
                        onClick={()=>{
                            let str = sortedString.split('')
                            let cusStr = custStr.split('')
                            // let str  = sortedString
                            // let cusStr  = custStr
                            // console.log(sortedString)

                            str.forEach((item,index)=>{
                                if(item!=cusStr[index]) console.log(item,cusStr[index],index)
                                // console.log(item,cusStr[index],index)
                            })
                            // console.log(str.length, cusStr.length, str==cusStr)
                        }}
                    >сравнить</button>

                    {/* <div className={cl.editor} contenteditable = 'true'>
                        sddasd
                    </div> */}
                    
                

             
            </section>        

            
        </div>    
    );
};

export default Home;