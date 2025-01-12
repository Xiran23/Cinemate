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
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {
           
            movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))
          }
        </div>
      </section>
    </main>
  )
}
