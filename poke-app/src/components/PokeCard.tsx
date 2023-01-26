import { PokemonSprite } from '../interfaces/pokeapi'

interface Props extends PokemonSprite {}

export const PokeCard = ({ id, name, picture }: Props) => {
  return (
    <>
      <div className="bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-md w-full">
        <h1 className="text-3xl md:text-2xl font-light text-white text-center">
          {`${id} - ${name}`}
        </h1>
        <img
          className="mx-auto w-2/4 lg:w-3/4"
          src={picture}
          onError={({ currentTarget }) => {
            // Prevenimos un loop infinito
            currentTarget.onerror = null
            // Ponemos una imagen por defecto
            currentTarget.src =
              'https://2.bp.blogspot.com/-WYkTWcVEZK4/WnjPcwi4JWI/AAAAAAAHd6w/5viBVB0l3b43B6cn7EwXqd4iE0ZWva55ACLcBGAs/s1600/POKEBALL%2B%252827%2529.png'
          }}
        />
      </div>
    </>
  )
}
