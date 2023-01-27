import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
interface Props {}

export const Quotes = ({}: Props) => {
  const { colors } = useContext(ThemeContext)

  return (
    <div
      className="rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-md w-full"
      style={{ backgroundColor: colors.primary }}
    >
      <h1 className="text-3xl md:text-2xl font-light text-white text-center">
        Hola
      </h1>
    </div>
  )
}
