import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

interface Props {}

export const QuoteItem = ({}: Props) => {
  const { colors } = useContext(ThemeContext)

  return (
    <div
      className="rounded-lg px-3 py-4 shadow-md mb-5"
      style={{ backgroundColor: colors.card }}
    >
      <NavLink to="/quote/2">
        <p className="text-base text-white font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus veritatis dolorem accusantium ducimus velit
          voluptatibus libero aliquam sed. Exercitationem et omnis consequuntur
          minima amet accusantium dolore commodi illo eos cum?
        </p>
      </NavLink>

      <div className="flex justify-between mt-3 items-center">
        <button className="bg-red-500 hover:bg-red-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white">
          Delete Quote
        </button>
        <p className="text-lg text-white font-extralight text-end">- Poto</p>
      </div>
    </div>
  )
}
