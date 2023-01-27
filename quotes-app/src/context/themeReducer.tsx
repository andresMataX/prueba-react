import { ThemeState } from './ThemeContext'

type ThemeAction = { type: 'light_theme' } | { type: 'dark_theme' }

export const lightTheme: ThemeState = {
  dark: false,
  colors: {
    background: 'white',
    border: 'black',
    card: '#084F6A',
    primary: '#6D7787',
    secondary: '#4697B8',
    text: '#17202A',
  },
}

export const darkTheme: ThemeState = {
  dark: true,
  colors: {
    background: '#1E293B',
    primary: '#75CEDB',
    secondary: '#BBDCE1',
    card: '#17202A', // #6D7787
    text: '#FDFEFE',
    border: '#6D7787',
  },
}

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case 'dark_theme':
      return {
        ...darkTheme,
      }
    case 'light_theme':
      return {
        ...lightTheme,
      }
    default:
      return state
  }
}
