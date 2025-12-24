import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { NavElemProvider } from './Context/NavElem'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NavElemProvider>
            <App />
        </NavElemProvider>
    </React.StrictMode>
)