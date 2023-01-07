import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'

const CocktailList = () => {
    const { cocktails, loading } = useGlobalContext()

    if(loading) {
        return <Loading />
    }

    if(cocktails.length < 1) {
        <h2 className="section-title">No cocktails found</h2>
    }
  return (
    <div>CocktailList</div>
  )
}

export default CocktailList