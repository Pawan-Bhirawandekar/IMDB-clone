import React, { useEffect, useState } from "react"
import axios from "axios"

const Banner = () => {

  const [movies, setMovies] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  // Fetch Movies
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a60223b5c02f6db59667320bf7c896f3&language=en-US"
      )
      .then((res) => {
        setMovies(res.data.results.slice(0, 5)) // take first 5 movies
      })
      .catch((err) => console.log(err))
  }, [])

  // Auto Slide Every 5 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === movies.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [movies])

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? movies.length - 1 : currentIndex - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === movies.length - 1 ? 0 : currentIndex + 1
    )
  }

  return (
    <div className="relative w-[80%] h-[75vh] overflow-hidden flex mx-auto rounded-lg mt-4">

      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`absolute w-full h-full bg-cover bg-center duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-black via-black/70 to-transparent flex items-end p-10">
            <div className="text-white max-w-xl">
              <h1 className="text-4xl font-bold">
                {movie.title}
              </h1>
              <p className="mt-3">
                {movie.overview}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform  text-white px-4 py-2 rounded-full text-2xl"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform  text-white px-4 py-2 rounded-full text-2xl"
      >
        ❯
      </button>

    </div>
  )
}

export default Banner
