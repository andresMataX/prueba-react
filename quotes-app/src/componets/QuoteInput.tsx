interface Props {
  colors: {
    background: string
    primary: string
    secondary: string
    card: string
    text: string
    border: string
  }
  quote: string
  onChange: (value: string, campo: 'quote' | 'author') => void
}

export const QuoteInput = ({ colors, quote, onChange }: Props) => {
  return (
    <div
      className="rounded-lg px-3 py-4 shadow-md w-3/4 mt-5"
      style={{ backgroundColor: colors.card }}
    >
      <label className="text-3xl md:text-2xl text-white font-light text-center">
        Quote
      </label>
      <textarea
        name=""
        cols={50}
        rows={5}
        className="w-full border-b text-white focus:outline-none px-2 py-1 mt-2"
        style={{
          backgroundColor: colors.card,
          borderColor: colors.border,
        }}
        value={quote}
        onChange={({ target }) => onChange(target.value, 'quote')}
      />
    </div>
  )
}
