// import React, { useEffect, useState } from 'react'
import { Card } from '../components'
import { useFetch } from '../hooks/useFetch'

export const MovieList = ({apiPath}) => {
  const {data:movies} =useFetch(apiPath)
  // const [movies, setMovies] = useState([])

  // useEffect(() => {
    
  //   async function fetchMovies() {
  //     const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=0420b93d1d245f3dd3f79485d7deab34");
  //     const data = await response.json();
  //     setMovies(data.results);
  //   }
    
  //   fetchMovies();  

  // }, [])  

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7 px-4'>
        <div className='flex flex-wrap justify-center gap-1'>
          {
           
            movies && movies.length > 0 ? (
              movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 py-10">No movies found</p>
            )
          }
        </div>
      </section>
    </main>
  )
}
