import { Form, QuotesList } from '../componets'

interface Props {}

export const Quotes = ({}: Props) => {
  return (
    <div className="container mx-auto grid grid-cols-3">
      <Form />

      <QuotesList />
    </div>
  )
}
