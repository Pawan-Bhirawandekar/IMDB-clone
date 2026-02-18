import React, { useEffect, useState } from "react";
import MoviCard from "./MoviCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a60223b5c02f6db59667320bf7c896f3&language=en-US&page=${pageNo}`,
      )
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNo]);

  return (
    <div>
      <div className="text-2xl font-bold text-center p-2">Trending Movies</div>

      <div className="p-4 flex flex-wrap gap-4 justify-center">
        {movies.map((movie) => (
          <MoviCard
            key={movie.id}
            poster_path={movie.poster_path}
            name={movie.original_title}
          />
        ))}
      </div>

      <Pagination
        handlePrev={handlePrev}
        handleNext={handleNext}
        pageNo={pageNo}
      />
    </div>
  );
};

export default Movies;
