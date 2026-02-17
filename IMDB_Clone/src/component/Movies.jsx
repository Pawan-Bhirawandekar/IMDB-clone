import React, { useEffect, useState } from 'react'
import MoviCard from './MoviCard'
import axios from 'axios'

const  Watchlist= () => {

  const [movies, setMovies]=useState([])


  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a60223b5c02f6db59667320bf7c896f3&language=en-US&page=2')
    .then((res) => {
      console.log(res.data.results)
      setMovies(res.data.results)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])
  
  return (
    <div>
        <div className='text-2xl font-bold text-center p-2'>
          Trending Movies
        </div>

        <div className='p-4 flex flex-wrap gap-4 justify-center'>
          
          {movies.map((movie) => (
            <MoviCard key={movie.id} poster_path={movie.poster_path} name={movie.original_title}/>
          ))
          }
          
        </div>
    </div>
  )
}

export default Watchlist

//https://api.themoviedb.org/3/movie/popular?api_key=a60223b5c02f6db59667320bf7c896f3&language=en-US&page=2