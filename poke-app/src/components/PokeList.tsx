import { PokeCard } from './PokeCard'

interface Props {}

export const PokeList = ({}: Props) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </div>
    </>
  )
}
