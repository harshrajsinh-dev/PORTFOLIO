import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { NavElemProvider } from './Context/NavElem'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AdminLoginForm from './Components/AdminLoginForm'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <NavElemProvider>
            <BrowserRouter>
                <Routes>
                    {/* Public Site */}
                    <Route path="/*" element={<App />} />

                    {/* Admin */}
                    <Route path="/admin" element={<AdminLoginForm />} />
                </Routes>
            </BrowserRouter>
        </NavElemProvider>

    </React.StrictMode>
)