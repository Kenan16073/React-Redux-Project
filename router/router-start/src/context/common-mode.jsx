import {createContext, useState} from 'react'



export const commonContext = createContext();

const DarkModeProvider = ({children})=>{

    const [mode ,setMode] = useState(localStorage.getItem('mode') === null ? false : JSON.parse(localStorage.getItem('mode')) );
        
    let values = {
        mode,
        setMode,
    }

    return (
        <commonContext.Provider value={values}>
            {children}
        </commonContext.Provider>
    )

}

export default DarkModeProvider;