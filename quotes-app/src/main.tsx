import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { QuotesApp } from './QuotesApp'
import './index.css'

const AppState = ({ children }: any) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppState>
        <QuotesApp />
      </AppState>
    </BrowserRouter>
  </React.StrictMode>
)
