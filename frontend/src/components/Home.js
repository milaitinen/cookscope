import React, { useState } from 'react'
import FilterBar from './FilterBar'
import RecipeList from './RecipeList'

const Home = () => {

  const [selectedCategories, setSelectedCategories] =  useState([])
  const [selectedDifficulties, setSelectedDifficulties] =  useState([])
  const [selectedTimes, setSelectedTimes] =  useState([])
  const [selectedDiets, setSelectedDiets] =  useState([])

  return (  
  <>
    <FilterBar
      selectedCategories={selectedCategories}
      setSelectedCategories={setSelectedCategories} 
      selectedDifficulties={selectedDifficulties}
      setSelectedDifficulties={setSelectedDifficulties}  
      selectedTimes={selectedTimes}  
      setSelectedTimes={setSelectedTimes}
      selectedDiets={selectedDiets}
      setSelectedDiets={setSelectedDiets}
    /> 
    <RecipeList/>
  </>
)
}

export default Home