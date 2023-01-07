import React from 'react'
import CocktailList from './CocktailList'
import SearchCocktal from './SearchCocktal'

const Home = () => {
  return (
    <main>
      <CocktailList />
      <SearchCocktal />
    </main>
  )
}

export default Home