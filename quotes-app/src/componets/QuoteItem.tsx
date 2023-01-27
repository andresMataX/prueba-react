import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { IQuotes } from '../interfaces/quotes'

interface Props extends IQuotes {
  quotes: IQuotes[]
  setQuotes: React.Dispatch<React.SetStateAction<IQuotes[]>>
}

export const QuoteItem = ({ quote, author, id, quotes, setQuotes }: Props) => {
  const { colors } = useContext(ThemeContext)

  const onDeleteQuote = () => {
    const q = quotes.filter((q) => {
      return q.id !== id
    })

    setQuotes(q)
  }

  return (
    <div
      className="rounded-lg px-3 py-4 shadow-md mb-5"
      style={{ backgroundColor: colors.card }}
    >
      <NavLink to={`/quote/${id}`} state={{ quote, author, id }}>
        <p className="text-base text-white font-normal">"{quote}"</p>
      </NavLink>

      <div className="flex justify-between mt-3 items-center">
        <button
          className="bg-red-500 hover:bg-red-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white"
          onClick={onDeleteQuote}
        >
          Delete Quote
        </button>
        <p className="text-lg text-white font-extralight text-end">
          - {author}
        </p>
      </div>
    </div>
  )
}
