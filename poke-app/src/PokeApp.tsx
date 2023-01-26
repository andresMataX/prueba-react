import { useEffect, useState } from 'react'
import { SearcherInput, PokeList, Loading } from './components'
import { usePokemon } from './hooks/usePokemon'
import { PokemonSprite } from './interfaces/pokeapi'

export const PokeApp = () => {
  const [term, setTerm] = useState('')
  const { isLoading, simplePokemonList } = usePokemon()
  const [pokesFiltered, setPokesFiltered] =
    useState<PokemonSprite[]>(simplePokemonList)

  useEffect(() => {
    if (term.length === 0) setPokesFiltered(simplePokemonList)

    setPokesFiltered(
      simplePokemonList.filter((poke) =>
        poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
      )
    )
  }, [term])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="mt-6 mb-3">
      <SearcherInput onDebounce={setTerm} />

      <PokeList
        pokeList={pokesFiltered.length > 0 ? pokesFiltered : simplePokemonList}
      />
    </div>
  )
}
