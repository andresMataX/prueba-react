import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { AuthorInput } from './AuthorInput'
import { QuoteInput } from './QuoteInput'
import { useForm } from '../hooks/useForm'

interface Props {}

export const Form = ({}: Props) => {
  const { colors } = useContext(ThemeContext)

  const { author, quote, onChange, form } = useForm({ author: '', quote: '' })

  const onCreate = () => {
    if (!author || !quote)
      return alert('Campos Incompletos. Favor de llenar todos los campos.')

    console.log(form)
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
