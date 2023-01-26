import { useState, useEffect } from 'react'
import { PokemonSprite } from '../interfaces/pokeapi'

export const usePokemonSearch = (simplePokemonList: PokemonSprite[]) => {
  const [term, setTerm] = useState('')

  const [pokesFiltered, setPokesFiltered] = useState<PokemonSprite[]>([])

  useEffect(() => {
    if (term.length === 0) setPokesFiltered(simplePokemonList)

    if (isNaN(Number(term))) {
      setPokesFiltered(
        simplePokemonList.filter((poke) =>
          poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
        )
      )
    } else {
      const pokemonID = simplePokemonList.find((poke) => poke.id === term)
      setPokesFiltered(pokemonID ? [pokemonID] : [])
    }
  }, [term])

  return {
    pokesFiltered,
    setTerm,
  }
}
