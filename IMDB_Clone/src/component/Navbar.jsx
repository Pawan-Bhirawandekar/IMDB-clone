// import React from 'react'
// import Logo from "../assets/movieLogo.png"
// import { Link } from "react-router-dom"

// export const Navbar = () => {
//   return (
//     <div className='flex border-gray-950 space-x-12 items-center pl-3 py-1 bg-gray-900'>
//         <img className="w-14" src={Logo} alt="Movie Logo" />
//         <Link className="text-yellow-400 text-2xl font-bold" to="/">Movies</Link>
//         <Link className="text-yellow-400 text-2xl font-bold" to="/watchlist">Watchlist</Link>
//     </div>
//   )
// }

// export default Navbar


import React from "react"
import { Link } from "react-router-dom"
import { Menu, Search, BookmarkPlus } from "lucide-react"

const Navbar = () => {
  return (
    <div className="w-full bg-black text-white px-4 py-2 flex items-center justify-around">

      {/* LEFT SECTION */}
      <div className="flex items-center space-x-6 font-bold text-xl">

        {/* Logo */}
        <Link to="/" className="bg-yellow-400 text-black font-bold px-2 py-1 rounded">
          IMDb
        </Link>

        {/* Menu */}
        <div className="flex items-center space-x-1 cursor-pointer pl-4 pr-0">
          <Menu size={20} />
          <span className="font-semibold">Menu</span>
        </div>
      </div>

      {/* CENTER SEARCH */}
      <div className="flex items-center w-1/2 text-white bg-gray-200 rounded-md">

        {/* Dropdown */}
        <select className="bg-gray-200 text-black px-3 py-2 rounded-l-md outline-none">
          <option>All</option>
          <option>Titles</option>
          <option>TV episods</option>
          <option>Celebs</option>
          <option>Companys</option>
          <option>Keywords</option>
          <option>Advanced Search</option>
        </select>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search IMDb"
          className="w-full px-4 py-2 text-black outline-none"
        />

        {/* Search Icon */}
        <div className="bg-gray-200 px-3 py-2 rounded-r-md cursor-pointer">
          <Search size={20} color="black" />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center space-x-6">

        <span className="font-semibold cursor-pointer hover:text-yellow-400">
          IMDb<span className="text-blue-400">Pro</span>
        </span>

        <Link
          to="/watchlist"
          className="flex items-center space-x-1 hover:text-yellow-400"
        >
          <BookmarkPlus size={20} />
          <span>Watchlist</span>
        </Link>

        <span className="cursor-pointer hover:text-yellow-400">
          Sign In
        </span>

        <select className="bg-black outline-none cursor-pointer">
          <option>EN</option>
          <option>ES</option>
        </select>

      </div>
    </div>
  )
}

export default Navbar
