import { apiCommon } from "../api";


export const productsApi = apiCommon.injectEndpoints({
    endpoints: builder => ({
        productsAdd: builder.mutation({
            query: (products) => {
                return {
                    url: 'products.json',
                    method : 'POST',
                    body : products
                }
            }
        }),
        productsGet: builder.query({
            query: () => {
                return {
                    url: 'products.json',
                    method : 'GET',
                }
            }
        })
    })
});




export const {useProductsAddMutation,useProductsGetQuery} = productsApi;