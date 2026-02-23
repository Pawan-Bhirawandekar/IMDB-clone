// import React from 'react'

// const MoviCard = ({movie, poster_path, name, handleAddtoWatchlist, handleRemoveFromWatchlist, watchlist}) => {
//   function doesExist(movie){
//     for(let i=0; i<watchlist.length; i++){
//       if(watchlist[i].id === movie.id){
//         return true;
//       }
//   }
//   return false;
//   }

//   return (
//     <div className='relative h-[40vh] w-50 bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer ' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${poster_path})`}}>
//       {doesExist(movie) ? 
//       <div className='absolute top-2 right-2 text-sm bg-gray-100/10 rounded-full px-2 py-1'>&#10084;&#65039;</div> : <div onClick={()=>(doesExist(movie) ? handleRemoveFromWatchlist(movie) :  handleAddtoWatchlist(movie))} className='m-4 flex items-center gap-1 absolute top-0 right-0 bg-gray-100/10 rounded-bl-2xl'>
//         &#129293;
//       </div>
//       }
      
//       <div className='absolute bottom-0 left-0 w-full 
//                       bg-gradient-to-t from-black via-black/70 to-transparent 
//                       text-white text-xl text-center p-3 rounded-b-xl'>
//         {name}
//       </div>

//     </div>
//   )
// }

// export default MoviCard

import React from "react";

const MoviCard = ({
  movie,
  poster_path,
  name,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) => {
  function doesExist(movie) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movie.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="relative h-[40vh] w-50 bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`,
      }}
    >
      {doesExist(movie) ? (
        // REMOVE
        <div
          onClick={() => handleRemoveFromWatchlist(movie.id)}
          className="absolute top-2 right-2 text-sm bg-gray-100/10 rounded-full px-2 py-1 z-10"
        >
          &#10084;&#65039;
        </div>
      ) : (
        // ADD
        <div
          onClick={() => handleAddtoWatchlist(movie)}
          className="m-4 flex items-center gap-1 absolute top-0 right-0 bg-gray-100/10 rounded-bl-2xl z-10"
        >
          &#129293;
        </div>
      )}

      <div
        className="absolute bottom-0 left-0 w-full 
                   bg-gradient-to-t from-black via-black/70 to-transparent 
                   text-white text-xl text-center p-3 rounded-b-xl"
      >
        {name}
      </div>
    </div>
  );
};

export default MoviCard;