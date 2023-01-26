import { useEffect, useState } from 'react'
import { SearcherInput, PokeList, Loading } from './components'
import { pokeApi } from './api/pokeApi'
import { PokemonsResp, SimplePokemon } from './interfaces/pokeapi'

interface Props {}

export const PokeApp = ({}: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    []
  )

  const getAllPokemons = async () => {
    setIsLoading(true)

    const resp = await pokeApi.get<PokemonsResp>(
      'https://pokeapi.co/api/v2/pokemon?limit=1279'
    )

    setSimplePokemonList(resp.data.results)

    setIsLoading(false)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className="mt-6">
      <SearcherInput />

      {isLoading ? <Loading /> : <PokeList />}
    </div>
  )
}
