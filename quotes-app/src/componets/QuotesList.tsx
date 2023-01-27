import { IQuotes } from '../interfaces/quotes'
import { QuoteItem } from './QuoteItem'

interface Props {
  quotes: IQuotes[]
  setQuotes: React.Dispatch<React.SetStateAction<IQuotes[]>>
}

export const QuotesList = ({ quotes, setQuotes }: Props) => {
  return (
    <div className="col-span-2">
      {quotes.map((quote) => (
        <QuoteItem
          key={quote.id}
          {...quote}
          quotes={quotes}
          setQuotes={setQuotes}
        />
      ))}
    </div>
  )
}
