import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/?search=${query}`);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-zinc-900 shadow-md">
      
      {/* Left - Search */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          className="px-3 py-1 rounded bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-red-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      {/* Right - Links */}
      <div className="flex gap-6 text-sm font-medium">
        <span onClick={() => navigate("/")} className="cursor-pointer hover:text-red-500">Home</span>
        <span className="cursor-pointer hover:text-red-500">TV Shows</span>
        <span className="cursor-pointer hover:text-red-500">Movies</span>
        <span className="cursor-pointer hover:text-red-500">Video Games</span>
      </div>
    </nav>
  );
};

export default Navbar;