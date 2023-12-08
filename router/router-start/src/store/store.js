import {configureStore} from '@reduxjs/toolkit'
import { loginApi } from './login/loginApi'
import { registerApi } from './register/registerApi'
import { loginSlice } from './login/loginSlice'

export const store = configureStore({
    reducer : {
        [loginSlice.name] : loginSlice.reducer,
        [registerApi.reducerPath] : registerApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer
    },
    middleware : (getDefaultMiddleware)=>{
        return getDefaultMiddleware()
        .concat(loginApi.middleware)
        .concat(registerApi.middleware)
    }
})