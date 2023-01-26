import { useEffect, useState } from 'react'
import { SearcherInput, PokeList, Loading } from './components'
import { usePokemon } from './hooks/usePokemon'

interface Props {}

export const PokeApp = ({}: Props) => {
  const { isLoading, simplePokemonList } = usePokemon()

  return (
    <div className="mt-6 mb-3">
      <SearcherInput />

      {isLoading ? <Loading /> : <PokeList pokeList={simplePokemonList} />}
    </div>
  )
}
