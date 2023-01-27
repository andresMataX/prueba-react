interface Props {
  colors: {
    background: string
    primary: string
    secondary: string
    card: string
    text: string
    border: string
  }
  author: string
  onChange: (value: string, campo: 'author' | 'quote') => void
}

export const AuthorInput = ({ colors, author, onChange }: Props) => {
  return (
    <div
      className="rounded-lg px-3 py-4 shadow-md w-3/4"
      style={{ backgroundColor: colors.card }}
    >
      <label className="text-3xl md:text-2x text-white font-light text-center">
        Author
      </label>
      <input
        className="w-full border-b text-white focus:outline-none px-2 py-1 mt-2"
        style={{
          backgroundColor: colors.card,
          borderColor: colors.border,
        }}
        value={author}
        onChange={({ target }) => onChange(target.value, 'author')}
      />
    </div>
  )
}
