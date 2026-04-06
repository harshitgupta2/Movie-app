import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { searchTitles } from "../services/api";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();


  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    try {
      const { data } = await searchTitles(value);
      setResults(data.titles);
    } catch (error) {
      console.error( error);
    }
  };

  const logOutGuest = () => {
    logout();
    navigate("/signup");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-zinc-900 shadow-md text-white">
      <div className="relative">
        <input
          type="text"
          placeholder="Search movies..."
          className="px-4 py-2 rounded-full bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-red-500 w-64"
          value={query}
          onChange={handleSearch}
        />
        {results.length > 0 && (
          <div className="absolute top-12 left-0 w-64 bg-zinc-800 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50">
            {results.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 p-2 hover:bg-zinc-700 cursor-pointer"
                onClick={() => {
                  setQuery(item.primaryTitle);
                  setResults([]); // close dropdown
                }}
              >
                <img
                  src={item.primaryImage?.url}
                  alt={item.primaryTitle}
                  className="w-10 h-14 object-cover rounded"
                />
                <span>{item.primaryTitle}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-6 text-sm font-medium">
        <span onClick={() => navigate("/")} className="cursor-pointer hover:text-red-500">
          Home
        </span>
        <span onClick={() => navigate("/tvshows")} className="cursor-pointer hover:text-red-500">
          TV Shows
        </span>
        <span onClick={() => navigate("/movies")} className="cursor-pointer hover:text-red-500">
          Movies
        </span>
        <span onClick={() => navigate("/video-games")} className="cursor-pointer hover:text-red-500">
          Video Games
        </span>
        <span onClick={logOutGuest} className="cursor-pointer hover:text-red-500">
          Log Out
        </span>
      </div>
    </nav>
  );
};

export default Navbar;