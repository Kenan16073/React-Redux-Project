import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CommonModeProvider from './context/common-mode.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <CommonModeProvider>
            <App />
        </CommonModeProvider>
    </Provider>

)
