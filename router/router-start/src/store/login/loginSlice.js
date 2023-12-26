import {createSlice} from '@reduxjs/toolkit'
import Cookies from 'js-cookie'



const initialState = {
    user: {
        email: '',
        password: ''
    },
    token: Cookies.get('token')
}


const loginSlice = createSlice({
    name : 'login',
    initialState,
    reducers : {
        setUser(state,action){
            state.user.email = action.payload.email
            state.user.password = action.payload.password
        },
        setToken(state,action){
            state.token = action.payload
            Cookies.set('token', action.payload)
        },
        Logout(state){
            Cookies.remove('token')
            state.token = null;
        }
    }

})

export const {setUser ,setToken,Logout} = loginSlice.actions


export {loginSlice}