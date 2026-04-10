import  { useState, useEffect } from 'react'

export const useFetch = (apiPath, queryTerms = "") => {

    const [ data, setData] = useState([]); 
    const apiKey = "0420b93d1d245f3dd3f79485d7deab34";
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerms}`
    console.log("Fetching from:", url)

        useEffect(() => {
            
            async function fetchMovies() {
                try {
                    const response = await fetch(url);
                    if (!response.ok) throw new Error('API request failed');
                    const json = await response.json();
                    setData(json.results || []);
                } catch (error) {
                    console.error('Error fetching data:', error);
                    setData([]);
                }
            }
            
            fetchMovies();  

        }, [url]) 

    return { data }
}
