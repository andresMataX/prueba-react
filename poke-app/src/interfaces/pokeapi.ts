// Generated by https://quicktype.io

export interface PokemonsResp {
  count: number
  next: null
  previous: null
  results: SimplePokemon[]
}

export interface SimplePokemon {
  name: string
  url: string
}

export interface PokemonSprite {
  id: string
  name: string
  picture: string
}
