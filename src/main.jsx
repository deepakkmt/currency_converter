import React from 'react' 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usecurrencyinfo from './hooks/firsthook'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App />
 
  </StrictMode>,
)
