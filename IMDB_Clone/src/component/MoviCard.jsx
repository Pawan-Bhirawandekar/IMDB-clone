import React from 'react'

const MoviCard = ({poster_path, name}) => {
  return (
    <div className='relative h-[40vh] w-50 bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer ' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${poster_path})`}}>

      <div className='absolute bottom-0 left-0 w-full 
                      bg-gradient-to-t from-black via-black/70 to-transparent 
                      text-white text-xl text-center p-3 rounded-b-xl'>
        {name}
      </div>
    </div>
  )
}

export default MoviCard