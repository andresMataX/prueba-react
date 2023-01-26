interface Props {}

export const SearcherInput = ({}: Props) => {
  return (
    <>
      <input
        className="placeholder:italic placeholder:text-slate-600 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm w-full mx-0"
        placeholder="Busca un pokemon..."
        type="text"
        name="search"
      />
    </>
  )
}
