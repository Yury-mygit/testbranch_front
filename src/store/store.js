import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit'
import counterReducer  from '../features/counter/counterSlice'
import paymentPageDataReduser , {sigPayBefore3DS, getInitState} from '../features/paymentPageData/paymentPageDataSlice'
import { paymentApi } from '../API/paymentAPI'
import { gateApi } from '../API/gateAPI'


// Middleware для сохранения состояния в локальное хранилище
const saveStateMiddleware = store => next => action => {
  console.log('saveStateMidleware is working')
  const result = next(action);

  // console.log(store.getState().paymentPageData.sig)


  let stateData = store.getState().paymentPageData

  let copy = structuredClone(stateData)

  let signiture = sigPayBefore3DS(stateData.data)

  // stateData.sig = sigPayBefore3DS(stateData.data)
// 
  copy.sig = signiture

  console.log(signiture)

  // console.log('saveStateMiddleware 1', store.getState().paymentPageData)
  // Сохраняем состояние в локальное хранилище
  // localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  localStorage.setItem('reduxState', JSON.stringify(stateData));

  return result;
};


// Функция для получения состояния из локального хранилища
const getSavedState = () => {
  console.log('getSavedState is worked')

  const savedStateString = localStorage.getItem('reduxState') || null;

  if (savedStateString!==null) {

    console.log('reading state from local storege')
    let savedState

    try {
      savedState = JSON.parse(savedStateString)
    } catch (error) {
      console.log(error)
    }
    
    savedState.sig = sigPayBefore3DS(savedState.data)
  
    return {"paymentPageData":savedState};
  } else {
    let state = getInitState()

    // state[state.findIndex(value=>value.inputID ==='pg_signature')].data = sigPayBefore3DS(state)
    state.paymentPageData.sig = sigPayBefore3DS(state.paymentPageData.data)
   
    // console.log('getSavedState',JSON.parse(savedState))
    return getInitState();
  }

  
};



export const store = configureStore({
    reducer: {
      counter: counterReducer,
      paymentPageData: paymentPageDataReduser,
      [paymentApi.reducerPath]: paymentApi.reducer,
      [gateApi.reducerPath]:gateApi.reducer,
    },
    preloadedState: getSavedState(),
// 
    middleware:(getdefaultMiddleware) =>
          getdefaultMiddleware()
          .concat([ 
            paymentApi.middleware,  
            gateApi.middleware,
            saveStateMiddleware
          ])
  })

//   setupListeners(store.dispatch)