import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

interface Props {}

export const Form = ({}: Props) => {
  const { colors } = useContext(ThemeContext)

  return (
    <div className="bg-slate-800">
      <div
        className="rounded-lg px-3 py-4 shadow-md w-3/4"
        style={{ backgroundColor: colors.card }}
      >
        <label className="text-3xl md:text-2x text-white font-light text-center">
          Author
        </label>
        <input
          className="w-full border-b text-white focus:outline-none px-2 py-1 mt-2"
          style={{
            backgroundColor: colors.card,
            borderColor: colors.border,
          }}
        />
      </div>

      <div
        className="rounded-lg px-3 py-4 shadow-md w-3/4 mt-5"
        style={{ backgroundColor: colors.card }}
      >
        <label className="text-3xl md:text-2xl text-white font-light text-center">
          Quote
        </label>
        <textarea
          name=""
          cols={50}
          rows={5}
          className="w-full border-b text-white focus:outline-none px-2 py-1 mt-2"
          style={{
            backgroundColor: colors.card,
            borderColor: colors.border,
          }}
        />
      </div>

      <button
        className="py-3 text-lg font-semibold rounded-md shadow-md w-3/4 mt-5 text-white"
        style={{ backgroundColor: colors.primary }}
      >
        Agregar
      </button>
    </div>
  )
}
