import { SearcherInput, PokeList, Loading } from './components'
import { usePokemon, usePokemonSearch } from './hooks'

export const PokeApp = () => {
  const { isLoading, simplePokemonList } = usePokemon()

  const { pokesFiltered, setTerm } = usePokemonSearch(simplePokemonList)

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
