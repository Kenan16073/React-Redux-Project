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
        productsEdit: builder.mutation({
            query: (products_edit) => {
                return {
                    url: `products/${products_edit.id}.json`,
                    method : 'PATCH',
                    body : products_edit
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
        }),
        productsGetOne: builder.query({
            query: (id) => {
                return {
                    url: `products/${id}.json`,
                    method : 'GET',
                }
            }
        }),
    })
});




export const {useProductsAddMutation,useProductsGetQuery,useProductsGetOneQuery,useProductsEditMutation} = productsApi;