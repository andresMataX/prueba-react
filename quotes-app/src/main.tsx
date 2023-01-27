import React from 'react'
import ReactDOM from 'react-dom/client'
import { QuotesApp } from './QuotesApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QuotesApp />
  </React.StrictMode>
)
