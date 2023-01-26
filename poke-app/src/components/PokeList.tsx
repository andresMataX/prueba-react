import { PokemonSprite } from '../interfaces/pokeapi'
import { PokeCard } from './PokeCard'

interface Props {
  pokeList: PokemonSprite[]
}

export const PokeList = ({ pokeList }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {pokeList.map((pokemon) => (
        <PokeCard {...pokemon} />
      ))}
    </div>
  )
}
