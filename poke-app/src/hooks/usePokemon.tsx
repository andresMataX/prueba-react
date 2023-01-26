import { useState, useEffect } from 'react'
import { pokeApi } from '../api/pokeApi'
import {
  PokemonSprite,
  PokemonsResp,
  SimplePokemon,
} from '../interfaces/pokeapi'

export const usePokemon = () => {
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

      return { id, name, picture }
    })

    setSimplePokemonList(pokemonWithSprite)
  }

  useEffect(() => {
    getAllPokemons()
    console.log('me llamé')
  }, [])

  return {
    isLoading,
    simplePokemonList,
  }
}
