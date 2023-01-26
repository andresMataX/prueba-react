import { useEffect, useState } from 'react'
import { useDebouncedValue } from '../hooks'
import { PokemonSprite } from '../interfaces/pokeapi'

interface Props {
  onDebounce: (value: string) => void
}

export const SearcherInput = ({ onDebounce }: Props) => {
  const [textValue, setTextValue] = useState('')

  const debouncedValue = useDebouncedValue(textValue)

  useEffect(() => {
    onDebounce(debouncedValue)
  }, [debouncedValue])

  return (
    <input
      className="placeholder:italic placeholder:font-medium placeholder:text-slate-600 block bg-white border border-slate-300 rounded-md py-2 pl-9 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm w-full mx-0"
      placeholder="Busca un pokemon..."
      type="text"
      name="search"
      value={textValue}
      onChange={({ target }) => {
        setTextValue(target.value)
      }}
    />
  )
}
