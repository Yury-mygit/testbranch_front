import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {server} from '../settings'

// http://testbench/api/greeting
export const paymentApi = createApi({
    reducerPath: 'paymentApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${server}`,   
        prepareHeaders: (headers) => {
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set("Content-Type", "application/json");
            headers.set("Access-Control-Allow-Credentials", "True");
            headers.set("Access-Control-Allow-Methods", "*");
            // headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
            // console.log(headers)
            return headers;
        },
        credentials: "include",
    }),  
   
    endpoints: (build) =>  ({
        // getPayment: build.query({
        // query: () => `greeting`,    
        // }),

        // getPaymentPage: build.query({
        // query: () => `paymentPage`,    
        // }),

        getPaymentStatus: build.query({
            query: (id) => `paystatus?id=${id}`,
        }),

        pay: build.mutation({
            query: (data) => ({
                url: 'pay',
                method: 'POST',
                body: data,
            })
        }),
        saveCard: build.mutation({
            query: (data={}) => ({
                url: 'cardsave',
                method: 'POST',
                body: data,
            })
        })
    }),
});

  export const {
    useGetPaymentQuery,
    useGetPaymentPageQuery,
    usePayMutation,
    useLazyGetPaymentStatusQuery,
    useSaveCardMutation,
  } = paymentApi