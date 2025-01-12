import  { useState,useEffect } from 'react'

export const useFetch = (apiPath,queryTerms="") => {

    const [ data ,setData] = useState([]); 
    const url = ` https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerms}`
    console.log(url)


        useEffect(() => {
            
            async function fetchMovies() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            }
            
            fetchMovies();  

  }, [url]) 

  return (
    {data}
  )
}