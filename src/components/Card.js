import React from 'react'
import { Link } from 'react-router-dom'
import  Backup from "../assets/Backup.jpg"

export const Card = ({movie}) => {
    const {id, title, original_title, overview, poster_path, vote_average} = movie;
    const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`:Backup
    const movieTitle = title || original_title;

  
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 p-3">
      <div className="group bg-gradient-to-br from-white to-gray-50 border border-gray-300 rounded-2xl shadow-xl overflow-hidden dark:from-gray-900 dark:to-gray-800 dark:border-gray-600 hover:shadow-2xl transform hover:scale-105 transition duration-300 h-full flex flex-col backdrop-blur-sm">
        <Link to={`/movie/${id}`} className="relative overflow-hidden">
          <img className="w-full h-80 object-cover group-hover:brightness-75 transition duration-300" src={image} alt={movieTitle} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
            <span className="text-white font-bold px-4 py-2">View Details</span>
          </div>
        </Link>
        <div className="p-5 flex flex-col flex-grow">
          <Link to={`/movie/${id}`}>
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 hover:text-purple-600 dark:hover:text-purple-400 transition">{movieTitle}</h5>
          </Link>
          <div className="flex items-center mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="ml-1 text-sm font-bold text-gray-900 dark:text-gray-100">{vote_average?.toFixed(1) || 'N/A'}</span>
            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">/ 10</span>
          </div>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300 line-clamp-3 flex-grow leading-relaxed">{overview || 'No overview available.'}</p>
          <Link to={`/movie/${id}`} className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg hover:from-purple-700 hover:to-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 transition duration-200 shadow-lg hover:shadow-xl">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
