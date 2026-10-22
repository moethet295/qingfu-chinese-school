interface MemberSearchBarProps {
  search: string;
  setSearch: (value: string) => void;
  onSearch: () => void;
}

function MemberSearchBar({search, setSearch, onSearch,}: MemberSearchBarProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-2xl bg-white px-4 py-2 text-black placeholder:text-gray-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default MemberSearchBar;

