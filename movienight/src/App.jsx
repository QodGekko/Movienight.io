import { useState, useEffect, useRef } from "react";
import Header from "./Components/Header";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=957ff07c";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [hero, setHero] = useState("");
  const [plot, setPlot] = useState({
    Title: "Batman v Superman: Dawn of Justice",
    img: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  });

  const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    fetchMovies("oppenheimer");
    console.log(movies);
  }, []);
  const handleClick = (cardId, plot, Year) => {
    setHero(cardId);
    setPlot({
      ...plot,
      Title: plot,
      img: cardId,
      Year: Year,
    });
  };

  const ref = useRef(null);
  const movieList = useRef(null);

  return (
    <>
      <Header
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onClick={() => {
          fetchMovies(search);
          ref.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div
        ref={movieList}
        style={{ backgroundColor: "#021024", padding: "50px" }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "50px",
            backgroundColor: "#052659",
            margin: "50px",
            marginTop: "100px",
            padding: "10px",
            borderRadius: "25px",
            justifyContent: "space-around",
            // boxShadow: "1px 2px 1px 2px #66666E ",
          }}
        >
          <div>
            <h1 style={{ color: "#ffffff", marginTop: "50px" }}>
              {" "}
              {plot.Title}
            </h1>
            <p
              style={{
                color: "white",
                marginTop: "30px",
                flexWrap: "wrap",
                overflow: "hidden",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, quaerat soluta eligendi optio rem consequatur quae
              maiores placeat excepturi cumque rerum dolores ducimus facilis
              atque laboriosam magnam in ut nisi recusandae laborum nesciunt
              obcaecati provident numquam nostrum? Magnam quibusdam omnis quas
              ad. Et magni ut totam nisi assumenda accusamus cum.
            </p>
            <h3 style={{ color: "white", marginTop: "30px" }}>
              {" "}
              Release Year:{plot.Year}
            </h3>
            <div style={{ display: "flex" }}>
              <div>
                <button style={{ padding: "10px" }}>Watch</button>
              </div>
              <div>
                <button style={{ padding: "10px" }}>Trailer</button>
              </div>
            </div>
          </div>
          <div>
            <img
              style={{
                width: "550px",
                height: "500px",
                borderRadius: "12px",
              }}
              src={plot.img}
              alt=""
            />
          </div>
        </div>
        <div>
          <hr style={{ border: "0.1em solid #66666E" }} />
        </div>
        <h3 style={{ color: " white" }} ref={ref}>
          Search results:
        </h3>
        <div
          style={{
            backgroundColor: "#1c2135",
            margin: "50px",
            borderRadius: "25px",
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {movies.map((movie) => {
            return (
              <img
                style={{
                  width: "200px",
                  margin: "20px",
                }}
                onClick={() => {
                  handleClick(movie.Poster, movie.Title, movie.Year);
                  movieList.current?.scrollIntoView({ behavior: "smooth" });
                }}
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://placehold.co/400"
                }
                alt=""
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
