// import React from 'react'

// const Watchlist = ({Watchlist}) => {
//   return (
//     <>
//       <div className='flex justify-center flex-wrap'>
//         <div className='bg-blue-500 text-white text-lg font-bold px-4 py-2 rounded-md m-2'>Action</div>
//         <div className='bg-gray-500/50 text-white text-lg font-bold px-4 py-2 rounded-md m-2'>Action</div>
//         <div className='bg-gray-500/50 text-white text-lg font-bold px-4 py-2 rounded-md m-2'>Action</div>
//       </div>

//       <div className='flex justify-center my-4'>
//         <input type="text" placeholder='Search For Movies' className='h-[3rem] w-[18rem] border border-gray-300 bg-gray-200 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500' />
//       </div>

//       <div className='overflow-hidden rounded-lg border border-gray-200 m-8 '>
//         <table className='w-full text-gray-800 text-center'>
//           <thead className='border-b-1'>
//             <tr>
//               <th>Name</th>
//               <th>Ratings</th>
//               <th>Popularity</th>
//               <th>Genre</th>
//             </tr>
//           </thead>

//           <tbody>
//             {Watchlist.map((movie) => (
//               <tr key={movie.id} className='border-b-2'>
//                 <td className='p-2 flex items-center justify-around'>
//                   <img
//                     src={movie.poster}
//                     alt={movie.title}
//                     className='w-16 h-24 object-cover rounded'
//                   />
//                   <span className='font-semibold text-lg'>
//                     {movie.title}
//                   </span>
//                 </td>
//                 <td>{movie.rating}</td>
//                 <td>{movie.popularity}%</td>
//                 <td>{movie.genre}</td>
//                 <td className='text-red-800 cursor-pointer'>
//                   Delete
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
    
//   )
// }

// export default Watchlist


import React from 'react'

const Watchlist = ({ watchlist }) => {
  return (
    <>
      <div className='flex justify-center flex-wrap'>
        <div className='bg-blue-500 text-white text-lg font-bold px-4 py-2 rounded-md m-2'>
          Action
        </div>
        <div className='bg-gray-500/50 text-white text-lg font-bold px-4 py-2 rounded-md m-2'>
          Drama
        </div>
        <div className='bg-gray-500/50 text-white text-lg font-bold px-4 py-2 rounded-md m-2'>
          Comedy
        </div>
      </div>

      <div className='flex justify-center my-4'>
        <input
          type='text'
          placeholder='Search For Movies'
          className='h-[3rem] w-[18rem] border border-gray-300 bg-gray-200 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-gray-800 text-center'>
          <thead className='border-b'>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {watchlist?.map((movie) => (
              <tr key={movie.id} className='border-b-2'>
                <td className='p-2 flex items-center justify-start gap-4 pl-25'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className='w-16 h-24 object-cover rounded'
                  />
                  <span className='font-semibold text-lg'>
                    {movie.title}
                  </span>
                </td>
                <td>{movie.vote_average}</td>
                <td>{movie.popularity}%</td>
                <td>{movie.genre}</td>
                <td className='text-red-800 cursor-pointer'>
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist