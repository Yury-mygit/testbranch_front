

const initialSatate = [
    {id:10, type:'paymentData', typeText:'Данные платежи' ,checked:true, isDisabled:true,  inputID: 'pg_user_id', labelText:'Иден-р пользователя', data: 'test0006',},
    {id:11, type:'paymentData', typeText:'Данные платежи' ,checked:true,  isDisabled:true,   inputID: 'pg_user_phone', labelText:'Телефон пользователя',data: 79104769733,},
    {id:12, type:'paymentData', typeText:'Данные платежи' ,checked:true,  isDisabled:true,   inputID: 'pg_user_email', labelText:'Почта пользователя',data: 'yury.myworkmail@gmail.com'},
    {id:13, type:'paymentData', typeText:'Данные платежи' ,checked:false, isDisabled:false,  inputID: 'pg_user_ip', labelText:'IP пользователя',data: '185.102.131.54',},
    {id:14, type:'paymentData', typeText:'Данные платежи' ,checked:true, isDisabled:true,    inputID: 'pg_order_id', labelText:'Номер заказа мерчанта', data: 'test001',},
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


export {initialSatate}