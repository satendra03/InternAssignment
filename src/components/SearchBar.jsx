import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-6 w-full flex items-center justify-center">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
        className="w-full px-4 py-2 focus:outline-none max-w-[500px] text-white border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default SearchBar;
