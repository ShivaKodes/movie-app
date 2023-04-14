import React, { useState } from "react";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    onSearch(searchQuery);
  };

  return (
    <header className="bg-gray-800 text-white flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Movie App</h1>
      <div className="flex items-center">
        <input
          className="border border-gray-400 rounded px-2 py-1 text-black mr-2"
          type="text"
          placeholder="Search movies..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
          onClick={handleSearchButtonClick}
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
