import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { Switch } from './Switch'

interface Props {
  isTheme?: boolean
}

export const Navbar = ({ isTheme = false }: Props) => {
  const { setDarkTheme, colors, setLightTheme, dark } = useContext(ThemeContext)

  return (
    <div
      className="flex px-5 py-3 mb-4"
      style={{
        backgroundColor: colors.background,
        justifyContent: isTheme ? 'end' : '',
        alignItems: isTheme ? 'center' : '',
      }}
    >
      {isTheme ? (
        <div className="self-end flex justify-center items-center">
          <h1
            className="text-xl font-light mr-2"
            style={{ color: colors.text }}
          >
            Theme:
          </h1>

          <Switch
            switchState={dark}
            handleToggle={() => (dark ? setLightTheme() : setDarkTheme())}
          />
        </div>
      ) : (
        <>
          <NavLink
            className="py-2 px-3 bg-white text-sm font-semibold rounded-md shadow-lg focus:outline-none"
            style={{
              color: colors.background,
              backgroundColor: colors.primary,
            }}
            to="/"
          >
            Regresar
          </NavLink>
        </>
      )}
    </div>
  )
}
