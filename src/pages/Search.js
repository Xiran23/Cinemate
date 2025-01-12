import { useSearchParams } from 'react-router-dom';
import React from 'react';
import { Card } from '../components';
import { useFetch } from '../hooks/useFetch';

export const Search = ({ apiPath }) => {

  const [searchParams] = useSearchParams();
  const queryTerms = searchParams.get("q"); 
  
  // Use the query terms to fetch data
  const { data: movies } = useFetch(apiPath, queryTerms);

  return (
    <main>
      <section>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0?`no reult found for ' ${queryTerms}'`:`Result for '${queryTerms}'` }</p>
      </section>
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
  );
};
