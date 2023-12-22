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
            },
            invalidatesTags: ['Products']
        }),
        productsEdit: builder.mutation({
            query: (products_edit) => {
                return {
                    url: `products/${products_edit.id}.json`,
                    method : 'PATCH',
                    body : products_edit
                }
            },
            invalidatesTags: ['Products']
        }),
        productsGet: builder.query({
            providesTags: ['Products'],
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
        productsDelete: builder.mutation({
            query: (id) => {
                return {
                    url: `products/${id}.json`,
                    method : 'DELETE'
                }
            },
            invalidatesTags: ['Products']
        }),
    })
});




export const {useProductsAddMutation,useProductsGetQuery,useProductsGetOneQuery,useProductsEditMutation,useProductsDeleteMutation} = productsApi;