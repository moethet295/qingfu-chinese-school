interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}


function SearchBar({search, setSearch}: SearchBarProps) {

  return (

    <div className="flex justify-center items-center">  
      <input
        type="text"
        placeholder="Search..."
        className="w-80 rounded-lg bg-white px-4 py-2 text-black placeholder:text-gray-500"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
      />
    </div>
   
  )
}

export default SearchBar;
