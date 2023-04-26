import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ErrorProvider } from './context/error'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErrorProvider>
      <App />
    </ErrorProvider>
  </BrowserRouter>
)
