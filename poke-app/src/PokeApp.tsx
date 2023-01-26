import { useEffect, useState } from 'react'
import { SearcherInput, PokeList, Loading } from './components'
import { pokeApi } from './api/pokeApi'
import {
  PokemonsResp,
  SimplePokemon,
  PokemonSprite,
} from './interfaces/pokeapi'

interface Props {}

export const PokeApp = ({}: Props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [simplePokemonList, setSimplePokemonList] = useState<PokemonSprite[]>(
    []
  )

  const getAllPokemons = async () => {
    setIsLoading(true)

    const resp = await pokeApi.get<PokemonsResp>(
      'https://pokeapi.co/api/v2/pokemon?limit=1279'
    )

    mapPokemonList(resp.data.results)

    setIsLoading(false)
  }

  const mapPokemonList = (pokemonList: SimplePokemon[]) => {
    const pokemonWithSprite = pokemonList.map(({ name, url }) => {
      const urlParts = url.split('/')
      const id = urlParts[urlParts.length - 2]
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

      return { name, picture }
    })

    setSimplePokemonList(pokemonWithSprite)
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
