import {createApi, fetchBaseQuery} from  "@reduxjs/toolkit/query/react"


const baseQuery = fetchBaseQuery({
    baseUrl : 'https://products-b96cc-default-rtdb.firebaseio.com/',
});



export const apiCommon = createApi({
    reducerPath : "apiCommon",
    baseQuery,
    endpoints : builder => ({})
}) 