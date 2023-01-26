interface Props {}

export const PokeCard = ({}: Props) => {
  return (
    <>
      <div className="bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-md w-full">
        <h1 className="text-3xl md:text-2xl font-light text-white text-center">
          132 - Ditto
        </h1>
        <img
          className="mx-auto w-2/4 lg:w-3/4"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        />
      </div>
    </>
  )
}
