import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

interface Props {}

export const Navbar = ({}: Props) => {
  const { setDarkTheme, colors, setLightTheme } = useContext(ThemeContext)

  return (
    <div
      style={{
        backgroundColor: colors.background,
      }}
    >
      <h1 style={{ color: colors.text }}>Hello World</h1>
      <button style={{ color: colors.primary }} onClick={setDarkTheme}>
        Tema: Oscuro
      </button>
      <button style={{ color: colors.primary }} onClick={setLightTheme}>
        Tema: Claro
      </button>
    </div>
  )
}
