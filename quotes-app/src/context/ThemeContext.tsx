import { createContext, useReducer } from 'react'
import { themeReducer, lightTheme } from './themeReducer'

// Definimos la información
export interface ThemeState {
  currentTheme: 'light' | 'dark'
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

// Estado inicial
export const themeInitialState: ThemeState = lightTheme

export const ThemeContext = createContext({} as ThemeContextProps)

// Proveemos el contexto
export const ThemeProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(themeReducer, themeInitialState)

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
