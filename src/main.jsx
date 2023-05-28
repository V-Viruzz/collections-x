import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ErrorProvider } from './context/error'
import { CollectionProvider } from './context/collection'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErrorProvider>
      <CollectionProvider>
        <App />
      </CollectionProvider>
    </ErrorProvider>
  </BrowserRouter>
)
