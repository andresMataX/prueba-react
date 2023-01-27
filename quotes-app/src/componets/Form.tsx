import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { AuthorInput } from './AuthorInput'
import { QuoteInput } from './QuoteInput'
import { useForm } from '../hooks/useForm'
import { IQuotes } from '../interfaces/quotes'

interface Props {
  setQuotes: React.Dispatch<React.SetStateAction<IQuotes[]>>
  quotes: IQuotes[]
}

export const Form = ({ quotes, setQuotes }: Props) => {
  const { colors } = useContext(ThemeContext)

  const { author, quote, onChange, resetForm } = useForm({
    author: '',
    quote: '',
  })

  const onCreate = () => {
    if (!author || !quote)
      return alert('Campos Incompletos. Favor de llenar todos los campos.')

    const newQuote = {
      author,
      quote,
      id: new Date().getTime(),
    }

    setQuotes([...quotes, newQuote])

    resetForm()
  }

  return (
    <div>
      <AuthorInput colors={colors} author={author} onChange={onChange} />

      <QuoteInput colors={colors} quote={quote} onChange={onChange} />

      <button
        className="py-3 text-lg font-semibold rounded-md shadow-md w-3/4 mt-5 text-white"
        style={{ backgroundColor: colors.primary }}
        onClick={onCreate}
      >
        Add Quote
      </button>
    </div>
  )
}
