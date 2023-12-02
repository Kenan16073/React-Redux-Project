import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CommonModeProvider from './context/common-mode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CommonModeProvider>
         <App />
    </CommonModeProvider>
)
