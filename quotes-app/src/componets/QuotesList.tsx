import { IQuotes } from '../interfaces/quotes'
import { QuoteItem } from './QuoteItem'

interface Props {
  quotes: IQuotes[]
}

export const QuotesList = ({ quotes }: Props) => {
  return (
    <div className="col-span-2">
      {quotes.map((quote) => (
        <QuoteItem key={quote.id} {...quote} />
      ))}
    </div>
  )
}
