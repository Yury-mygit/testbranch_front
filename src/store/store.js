import { configureStore } from '@reduxjs/toolkit'
import { paymentApi } from '../API/paymentAPI'
import { gateApi } from '../API/gateAPI'

export const store = configureStore({
    reducer: {
      [paymentApi.reducerPath]: paymentApi.reducer,
      [gateApi.reducerPath]:gateApi.reducer,
    },
   
    // middleware: (getDefaultMiddleware) =>
    //   {return getDefaultMiddleware().concat(paymentApi.middleware),
    //   getDefaultMiddleware().concat(gateApi.middleware)}

    middleware:
      (getdefaultMiddleware) =>
          getdefaultMiddleware()
          .concat([
            paymentApi.middleware, 
            gateApi.middleware
                  ])
  })

//   setupListeners(store.dispatch)