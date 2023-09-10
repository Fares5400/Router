import React, { useState } from 'react'
import ListMovies from './ListMovies';
import Rate from './Rate';
const Search = ({setSearchName,Movies,searchRate,searchName,setSearchRate}) => {
    const [filtre,setFiltre]=useState("")
console.log("filtre",filtre);
  return (
    <div>
      <input placeholder='search for movie' onChange={(e)=>setSearchName(e.target.value)}/>
      <Rate  searchRate={searchRate} setSearchRate={setSearchRate} />
      <ListMovies
                Movies={Movies}
                searchName={searchName}
                searchRate={searchRate}
              />
      
    </div>
  )
}

export default Search
