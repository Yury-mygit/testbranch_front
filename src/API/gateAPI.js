import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// http://testbench/api/greeting
export const gateApi = createApi({
    reducerPath: 'gateApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: "https://8c98-46-39-54-110.ngrok-free.app/api/g2g",
        
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
        
        // credentials: 'include',
        endpoints: (build) =>  ({

            getPares: build.query({
                query: (id) => `pares?id=${id}`,
            }),

            pay: build.mutation({
                query: (data) => ({
                    url: 'paystart',
                    method: 'POST',
                    body: data,
                })
            }),
            payAfter3ds: build.mutation({
                query: (data) => ({
                    url: 'payafter3ds',
                    method: 'POST',
                    body: data,
                })
            }),
        
    }),
});

export const {
    useLazyGetParesQuery,
    usePayMutation,
    usePayAfter3dsMutation,
} = gateApi