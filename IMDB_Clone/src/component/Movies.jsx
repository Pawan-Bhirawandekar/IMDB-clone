import React from 'react'
import MoviCard from './MoviCard'

const  Watchlist= () => {
  return (
    <div>
        <div className='text-2xl font-bold text-center p-2'>
          Trending Movies
        </div>

        <div className='p-4 flex flex-wrap gap-4 justify-center'>
          <MoviCard/>
          <MoviCard/>
          <MoviCard/>
          <MoviCard/>
          <MoviCard/>
          <MoviCard/>
          <MoviCard/>
          <MoviCard/>
          <MoviCard/>
          <MoviCard/>
        </div>
    </div>
  )
}

export default Watchlist