import {createContext, useState} from 'react'



export const commonContext = createContext();

const DarkModeProvider = ({children})=>{

    const [mode ,setMode] = useState(localStorage.getItem('mode') === null ? false : JSON.parse(localStorage.getItem('mode')) );
    const [token, setToken] = useState(sessionStorage.getItem('token') === null ? null : sessionStorage.getItem('token') );
    
    let values = {
        mode,
        setMode,
        token,
        setToken
    }

    return (
        <commonContext.Provider value={values}>
            {children}
        </commonContext.Provider>
    )

}

export default DarkModeProvider;