import { Form, QuotesList } from '../componets'
import { IQuotes } from '../interfaces/quotes'

interface Props {
  setQuotes: React.Dispatch<React.SetStateAction<IQuotes[]>>
  quotes: IQuotes[]
}

export const Quotes = ({ setQuotes, quotes }: Props) => {
  return (
    <div className="container mx-auto grid grid-cols-3">
      <Form setQuotes={setQuotes} quotes={quotes} />

      <QuotesList quotes={quotes} setQuotes={setQuotes} />
    </div>
  )
}
