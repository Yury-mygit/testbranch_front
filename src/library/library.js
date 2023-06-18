let defaultXML = "<?xml version='1.0' encoding='utf-8'?><response>no data load</response>"

const doXMLView = (srting=defaultXML, line) => {
    // console.log(srting) 
    let arr = srting.split('><')
    // console.log(arr)

    arr = arr.map((item,index,arr)=>{
       if (index!=0 && index!=arr.length-1) return (<div key={index}  className={line}> {'<'+item+'>'}</div>)
       if (index==0) 
            return (  <div key={index} className={line}> {item +'>'} </div>)    
       if (index==arr.length-1) 
            return (<div key={index} className={line}> {'<'+item}</div>)
    })
    return arr
}

const mdCheck = (payBefore3dsResponse) => {

 return filter2(payBefore3dsResponse, 'payBefore3dsResponse' ,'pg_3d_md')
}

const pareqCheck = (payBefore3dsResponse) => {

 return filter2(payBefore3dsResponse, 'payBefore3dsResponse' ,'pg_3d_pareq')
}

const filter2 = (LoadableObject, name = '',field,filer='noooooo')=>{
    
    let temp = JSON.parse(localStorage.getItem(name));

    if (!LoadableObject.isLoading && LoadableObject.isSuccess) {
        return LoadableObject.data[field]
    }else if (temp!=null){
        return( temp.data[field])
    }
   
    return field=='xml' ? defaultXML : filer
}


// const filter = (LoadableObject, field, filer='noooooo')=>{

//     // console.log(LoadableObject)
//     // console.log(JSON.parse(localStorage.getItem('payBefore3dsResponse')))

//     if (!LoadableObject.isLoading && LoadableObject.isSuccess) {     
//         if (field=='xml') return LoadableObject.data[field]
//         return LoadableObject.data[field]
//     }

//     if (JSON.parse(localStorage.getItem('payBefore3dsResponse'))!=null){
//         return( JSON.parse(localStorage.getItem('payBefore3dsResponse')).data[field])
//     }  
//     if (field=='xml') {return defaultXML}

//     return filer
// }

const filter = (LoadableObject, field, filer = "noooooo") => {
  
    // Check if the field is available on the top level of LoadableObject.data
    if (
      !LoadableObject.isLoading &&
      LoadableObject.isSuccess &&
      LoadableObject.data.hasOwnProperty(field)
    ) {
      if (field === "xml") return LoadableObject.data[field];
      return LoadableObject.data[field];
    }
  
    // Check if the field is available on deeper levels of LoadableObject.data
    if (
      !LoadableObject.isLoading &&
      LoadableObject.isSuccess &&
      typeof LoadableObject.data === "object" &&
      LoadableObject.data !== null
    ) {
      let nestedField = findNestedField(LoadableObject.data, field);
      if (nestedField !== null) {
        if (field === "xml") return nestedField.xml;
        return nestedField;
      }
    }
  
    // Check if the field is available on the top level of localStorageItem.data
    let localStorageItem = JSON.parse(
      localStorage.getItem("payBefore3dsResponse")
    );
    if (
      localStorageItem !== null &&
      localStorageItem.hasOwnProperty("data") &&
      localStorageItem.data.hasOwnProperty(field)
    ) {
      if (field === "xml") return localStorageItem.data[field];
      return localStorageItem.data[field];
    }
  
    // Check if the field is available on deeper levels of localStorageItem.data
    if (
      typeof localStorageItem === "object" &&
      localStorageItem !== null &&
      localStorageItem.hasOwnProperty("data")
    ) {
      let nestedField = findNestedField(localStorageItem.data, field);
      if (nestedField !== null) {
        if (field === "xml") return nestedField.xml;
        return nestedField;
      }
    }
  
    // Return default value if the field is not available
    if (field === "xml") {
      return defaultXML;
    }
  
    return filer;
  };
  
  function findNestedField(obj, field) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (key === field) {
          return obj[key];
        }
        if (typeof obj[key] === "object" && obj[key] !== null) {
          let nestedField = findNestedField(obj[key], field);
          if (nestedField !== null) {
            return nestedField;
          }
        }
      }
    }
    return null;
  }




const params = [
    {id:0, type:'cardData', typeText:'Данные карты', checked:true, isDisabled:true, inputID: 'pg_card_pan', labelText:'Номерк карты', data:'2200150543546300'},
    {id:1, type:'cardData', typeText:'Данные карты', checked:true, isDisabled:true, inputID: 'pg_card_year', labelText:'Год',data:'29',},
    {id:2, type:'cardData', typeText:'Данные карты', checked:true, isDisabled:true, inputID: 'pg_card_month', labelText:'Месяц',data: '05',},
    {id:3, type:'cardData', typeText:'Данные карты', checked:true, isDisabled:true, inputID: 'pg_card_cvc', labelText:'cvv', data:'243',},
    {id:4, type:'cardData', typeText:'Данные карты', checked:true, isDisabled:true, inputID: 'pg_card_name', labelText:'Держатель', data:'YURIY',},

    {id:10, type:'paymentData', typeText:'Данные платежи' ,checked:true, isDisabled:true,  inputID: 'pg_user_id', labelText:'Иден-р поль-теля', data: 'test0006',},
    {id:11, type:'paymentData', typeText:'Данные платежи' ,checked:true,  isDisabled:true,   inputID: 'pg_user_phone', labelText:'Телефон поль-теля',data: 79104769733,},
    {id:12, type:'paymentData', typeText:'Данные платежи' ,checked:true,  isDisabled:true,   inputID: 'pg_user_email', labelText:'Почта поль-теля',data: 'yury.myworkmail@gmail.com'},
    {id:13, type:'paymentData', typeText:'Данные платежи' ,checked:false, isDisabled:false,  inputID: 'pg_user_ip', labelText:'IP пользователя',data: '185.102.131.54',},
    {id:14, type:'paymentData', typeText:'Данные платежи' ,checked:true, isDisabled:true,    inputID: 'pg_order_id', labelText:'№ заказа мерчанта', data: 'test001',},
    {id:15, type:'paymentData', typeText:'Данные платежи' ,checked:true,  isDisabled:true,   inputID: 'pg_amount', labelText:'Сумма',data: 10,},
    {id:16, type:'paymentData', typeText:'Данные платежи' ,checked:false, isDisabled:false,  inputID: 'pg_currency', labelText:'Валюта',currency: 'RUB',},
    {id:17, type:'paymentData', typeText:'Данные платежи' ,checked:false, isDisabled:false,  inputID: 'pg_auto_clearing', labelText:'Автоклиринг', data:  1,},
    {id:18, type:'paymentData', typeText:'Данные платежи' ,checked:false, isDisabled:false,  inputID: 'pg_3ds_challenge', labelText:'Потребность в 3DS', data: 0},
    {id:19, type:'paymentData', typeText:'Данные платежи' ,checked:false, isDisabled:false,  inputID: 'pg_save_card', labelText:'Сохранить карту', data: 0,},
    {id:20, type:'paymentData', typeText:'Данные платежи' ,checked:true,  isDisabled:true,   inputID: 'pg_description', labelText:'Описание', data: 'Описание заказа',},
    {id:21, type:'paymentData', typeText:'Данные платежи' ,checked:true,  isDisabled:true,   inputID: 'pg_salt', labelText:'Случайная строка',data: 'abcde'},
    {id:22, type:'paymentData', typeText:'Данные платежи' ,checked:true,  isDisabled:true,   inputID: 'pg_signature', labelText:'Подпись (авт ген-я)', data:  'undefined',},  
    {id:30, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'pg_merchant_id', labelText:'Номер магазина', data:541637},
    {id:31, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'secret_key', labelText:'Секретный ключ', data:'i0soXJL1pPQayDSs'},
    {id:32, type:'merchantData', typeText:'Данные мерчанта' ,checked:true, isDisabled:true,  inputID: 'pg_result_url', labelText:'Адрес ответа', data:'https://416b-46-39-54-23.ngrok-free.app/api/g2g/result'},
]

const clearLocalStorage = (params={}) =>{
    localStorage.removeItem("payBefore3dsResponse");
    localStorage.removeItem("flowStatus");
}

export {doXMLView, defaultXML, filter,params, mdCheck, pareqCheck, clearLocalStorage}


