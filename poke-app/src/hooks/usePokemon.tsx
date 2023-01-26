import { useState, useEffect } from 'react'
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

    try {
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1279')
      const { results }: PokemonsResp = await resp.json()

      setSimplePokemonList(mapPokemonList(results))

      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const mapPokemonList = (pokemonList: SimplePokemon[]) => {
    const pokemonWithSprite = pokemonList.map(({ name, url }) => {
      const urlParts = url.split('/')
      const id = urlParts[urlParts.length - 2]
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

      return { id, name, picture }
    })

    return pokemonWithSprite
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return {
    isLoading,
    simplePokemonList,
  }
}
