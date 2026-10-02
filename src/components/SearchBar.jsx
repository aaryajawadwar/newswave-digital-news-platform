import { Search, X } from "lucide-react";

function SearchBar({
  searchQuery,
  setSearchQuery,
  setSubmittedSearch,
  onSearchSubmitted,
  inputRef,
}) {
  const clearSearch = () => {
    setSearchQuery("");
    setSubmittedSearch("");
  };

  const handleSubmit = (event) => {
  event.preventDefault();

  const trimmedSearch = searchQuery.trim();

  if (!trimmedSearch) {
    return;
  }

  setSubmittedSearch(trimmedSearch);
  onSearchSubmitted();
};

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full"
    >
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search articles..."
        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-12 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
      />

      {searchQuery && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700 dark:hover:text-white"
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </form>
  );
}

export default SearchBar;