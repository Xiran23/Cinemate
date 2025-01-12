import { Routes , Route } from "react-router-dom";

import {MovieList ,MovieDetails ,Search ,PageNotFound} from "../pages";



import React from 'react'

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
    <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing"/>} ></Route>
        <Route path="/movie/:id" element={<MovieDetails/>} ></Route>
        <Route path="/movies/popular" element={<MovieList apiPath="movie/popular"/>} ></Route>
        <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated"/> } ></Route>
        <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>} ></Route>
        <Route path="/search" element={<Search apiPath="search/movie"/>} ></Route>
        <Route path="*" element={<PageNotFound/>} ></Route>
        
    </Routes>
    </div>
  )

}
