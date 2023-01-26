import { SearcherInput, PokeCard } from './components'

interface Props {}

export const PokeApp = ({}: Props) => {
  return (
    <div className="mt-6">
      <SearcherInput />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </div>
    </div>
  )
}
