import { useLocation } from 'react-router-dom'
import { IQuotes } from '../interfaces/quotes'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
interface Props {}

export const Quote = ({}: Props) => {
  const { colors } = useContext(ThemeContext)

  const { state } = useLocation()
  const quote: IQuotes = state

  if (!state) {
    return (
      <div className="container mx-auto mt-0">
        <p
          className="text-4xl text-black font-normal"
          style={{ color: colors.text }}
        >
          No Quote.
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto mt-0">
      <p className="text-4xl font-normal" style={{ color: colors.text }}>
        "{quote.quote}"
      </p>

      <p
        className="text-3xl font-extralight text-end"
        style={{ color: colors.text }}
      >
        - {quote.author}
      </p>
    </div>
  )
}
