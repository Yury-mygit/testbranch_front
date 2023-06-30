import React from 'react';
import cl from './StringComparison.module.scss'

const StringComparison = ({ string1='dfsd', string2='zfs' }) => {

  // console.log(string1, string2)

  let  sample          = string1.split(/[,;\n]/) 
  let  merchantString  = string2.split(/[,;\n]/)

  // console.log(sample)
  
  let extraParams       = []
  let missingParams     = []
  let wronsSortedParams = []

  let result = []

  if (!Array.isArray(sample)) return

  sample.forEach((value, index, array) => {

    let indexInMerchantString = merchantString.indexOf(value)
    // console.log('=============================================')
    // console.log(value , merchantString[indexInMerchantString])
    // console.log('11111111111111111111111111111111111111111111')

    let semicolon = index+1 == array.length ? '' : ';'

    if (value.trim() =='{' || value.trim() =='}') return

    // if (indexInMerChantString<0) {
    //     result.push( { 
    //         status:'error',
    //         string:<strong key={index}>{value}{semicolon}</strong>,
    //         reason:"Пропушен параметр:"+value.trim(),
    //         reasonCod: 400,
    //     } );
    //     return
    // }
    if (value !== merchantString[index]) {
        result.push( { 
            status:'error',
            string:<strong key={index}>{value}{semicolon}</strong>,
            reason:`Параметр:${value}  должен быть на${index}, но он находится на ${indexInMerchantString} месте`  ,
            reasonCod: 401,
        } );
        return
    }
    if (indexInMerchantString==index) {
        result.push( { 
            status:'ok',
            string:value + semicolon ,
            reason:``  ,
            reasonCod: 200,
        } );
        return
    }

  })

//   console.log(sample, merchantString)
  return (
    <div className={cl.wrapper}>
         {result.map((item,index,arr)=>item.string)}
    </div>
  );


};

export default StringComparison;


// for (let i = 0; i < string2.length; i++) {
//     if (string1[i] !== string2[i]) {
//       result.push(<strong key={i}>{string1[i]}</strong>);
//     } else {
//       result.push(string1[i]);
//     }
//   }