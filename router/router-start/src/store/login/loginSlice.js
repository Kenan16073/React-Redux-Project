import {createSlice} from '@reduxjs/toolkit'




const initialState = {
    user: {
        email: '',
        password: ''

    },
    token: null
}


const loginSlice = createSlice({
    name : 'login',
    initialState,
    reducers : {
        setUser(state,action){
            state.user.email = action.payload
            state.user.password = action.payload.password
        },
        setToken(state,action){
            state.token = action.payload
        }
    }

})

export const {setUser} = loginSlice.actions


export {loginSlice}