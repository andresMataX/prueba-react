import { createContext, useReducer } from 'react'
import { themeReducer, lightTheme } from './themeReducer'

// Definimos la información
export interface ThemeState {
  dark: boolean
  colors: {
    background: string
    primary: string
    secondary: string
    card: string
    text: string
    border: string
  }
}

// Definimos cómo luce el contexto que es exportado
interface ThemeContextProps extends ThemeState {
  setDarkTheme: () => void
  setLightTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

// Proveemos el contexto
export const ThemeProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(themeReducer, lightTheme)

  const setDarkTheme = () => {
    dispatch({ type: 'dark_theme' })
  }
  const setLightTheme = () => {
    dispatch({ type: 'light_theme' })
  }

  return (
    <ThemeContext.Provider value={{ ...state, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
