// we need to have this page use the client directive because useSWR can only run on client side react components
// we could make the filmTable a client side component, requirements states that we need to pass the data down as props to the filmTable component
'use client';

import React from 'react'
import useSWR from 'swr';
import FilmTable from '@/components/FilmTable';

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const raw = await res.json()
  const filmsList = await raw.results;
  return filmsList;
}

const DisplayFilms = () => {
  
  const {
    data,
    error,
    isValidating,
  } = useSWR('https://swapi.dev/api/films/', fetcher);

  // Handles error and loading state
  // if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="text-[white]">Loading...</div>;

  return (
    <div>
      <FilmTable filmlist={data}></FilmTable>
    </div>
  )
}

export default DisplayFilms