import { useContext } from 'react'
import { Form } from '../componets/Form'
import { ThemeContext } from '../context/ThemeContext'

interface Props {}

export const Quotes = ({}: Props) => {
  const { colors } = useContext(ThemeContext)

  return (
    <div className="container mx-auto bg-red-500 grid grid-cols-3 gap-10">
      <Form />

      <div
        className="col-span-2 rounded-lg px-3 py-4 ml-3 shadow-md"
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
    </div>
  )
}
