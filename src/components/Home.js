import React from 'react'
import CocktailList from './CocktailList'
import SearchCocktal from './SearchCocktal'

const Home = () => {
  return (
    <main>
      <SearchCocktal />
      <CocktailList />
    </main>
  )
}

export default Home