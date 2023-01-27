import { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Switch } from './Switch'

interface Props {}

export const Navbar = ({}: Props) => {
  const { setDarkTheme, colors, setLightTheme, dark } = useContext(ThemeContext)

  return (
    <div
      style={{
        backgroundColor: colors.background,
      }}
      className="flex justify-end"
    >
      <h1 style={{ color: colors.text }}>Theme:</h1>

      <Switch
        switchState={dark}
        handleToggle={() => (dark ? setLightTheme() : setDarkTheme())}
      />

      <button style={{ color: colors.primary }} onClick={setDarkTheme}>
        Tema: Oscuro
      </button>
      <button style={{ color: colors.primary }} onClick={setLightTheme}>
        Tema: Claro
      </button>
    </div>
  )
}
