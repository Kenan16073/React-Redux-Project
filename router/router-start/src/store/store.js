import {configureStore} from '@reduxjs/toolkit'
import { loginApi } from './login/loginApi'
import { registerApi } from './register/registerApi'
import { loginSlice } from './login/loginSlice'
import { apiCommon } from './api'
import { productsSlice } from './products/productsSlice'

export const store = configureStore({
    reducer : {
        [loginSlice.name] : loginSlice.reducer,
        [registerApi.reducerPath] : registerApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer,
        [apiCommon.reducerPath] : apiCommon.reducer,
        [productsSlice.reducerPath] : productsSlice.reducer

    },
    middleware : (getDefaultMiddleware)=>{
        return getDefaultMiddleware()
        .concat(loginApi.middleware)
        .concat(registerApi.middleware)
        .concat(apiCommon.middleware)
    }
})