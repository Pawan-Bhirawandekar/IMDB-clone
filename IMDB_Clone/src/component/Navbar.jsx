import React from 'react'
import Logo from "../assets/movieLogo.png"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className='flex border-gray-950 space-x-12 items-center pl-3 py-4'>
        <img className="w-14" src={Logo} alt="Movie Logo" />
        <Link className="text-blue-500 text-2xl font-bold" to="/">Movies</Link>
        <Link className="text-blue-500 text-2xl font-bold" to="/watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar