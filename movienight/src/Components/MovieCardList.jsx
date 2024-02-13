import React, { useState, useEffect } from "react";

const MovieCardList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Fetch movie data from the OMDb API
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}&s=Avengers`); // Replace "Avengers" with your desired search term
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            onClick={() => handleCardClick(movie.Poster)}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "5px",
              cursor: "pointer",
            }}
          >
            <h3>{movie.Title}</h3>
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </div>

      <div>
        <h2>Hero Section</h2>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected Movie"
            style={{ width: "100%" }}
          />
        )}
      </div>
    </div>
  );
};

export default MovieCardList;
