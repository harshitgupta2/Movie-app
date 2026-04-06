import React, { useEffect, useState } from "react";
import { getTitle } from "../services/api";

const Home = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTitle();
        setResponse(data.data.titles || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-6"> Movies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {response.map((movie) => (
          <div
            key={movie.id}
            className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={movie.primaryImage?.url}
              alt={movie.primaryTitle}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              {/* Title */}
              <h2 className="text-lg font-semibold line-clamp-1">
                {movie.primaryTitle}
              </h2>
              <p className="text-yellow-400 text-sm font-medium">
                ⭐ {movie.rating?.aggregateRating || "N/A"}
              </p>
              <p className="text-gray-400 text-sm line-clamp-3">
                {movie.plot || "No description available"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;