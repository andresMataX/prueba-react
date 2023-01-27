import { useLocation } from 'react-router-dom'
import { IQuotes } from '../interfaces/quotes'
interface Props {}

export const Quote = ({}: Props) => {
  const { state } = useLocation()
  const quote: IQuotes = state

  if (!state) {
    return (
      <div className="container mx-auto mt-0">
        <p className="text-4xl text-black font-normal">No Quote.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto mt-0">
      <p className="text-4xl text-black font-normal">"{quote.quote}"</p>

      <p className="text-3xl text-black font-extralight text-end">
        - {quote.author}
      </p>
    </div>
  )
}
