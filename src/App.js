import React, {useEffect, useState} from 'react';
import Recipe from './Recipe.js';
import Form from './Form.js';
import "./App.css";


const App = () => {
  const app_id= "94e014f5";
  const app_key= "ae7d332a55887d38b4dcc5779bf6c055";
  // setRecipes for API response 
  const [recipes, setRecipes] = useState([]);
  //setSearch for changing input
  const [search, setSearch] = useState('');
  // setQuery for when to actually submit request
  const [query, setQuery] = useState('healthy')
  // setting diet and meal type for the API request 
  const [diet, setDiet] = useState('')
  const [mealtype, setMeal] = useState('');
  // setting diet and meal type keyword in case no other input is given by user 
  const [dietvalue, setDietValue] = useState('');
  const [mealvalue, setMealValue] = useState('')

  useEffect(()=>{
    getRecipe();
    // eslint-disable-next-line
  },[query]);
  
  const getRecipe = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=0&to=14${diet}${mealtype}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const updateDiet = (selected) => {
    setDiet(`&health=${selected}`);
    setDietValue(selected)
  }

  const updateMealtype = (selected) => {
    setMeal(`&dishType=${selected}`);
    setMealValue(selected)
  
  }

  const getSearch = (e) => {
    e.preventDefault();
    if (search !==''){
      setQuery(search);
    } else if (mealtype !=='') {
      setQuery(mealvalue);
      console.log(query)
    } else {
      setQuery(dietvalue);
  
    }
    
    setSearch('');
  };

  return (
    <div className='App'>
      <div className='header'>
      <h1>Yummmmhh!</h1>
     </div>
      <Form
      updateSearch = {updateSearch}
      getSearch = {getSearch}
      search = {search}
      updateDiet = {updateDiet}
      updateMealType = {updateMealtype}
      />
      <div className='recipes'>
      {recipes.length > 0 && recipes.map (recipe => (
        <Recipe
        key = {recipe.recipe.calories}
        title ={recipe.recipe.label}
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}
        link = {recipe.recipe.url}
        />
      ))}
      {recipes.length < 1 && <h1 className='error-message'>
        Sorry we could not find any recipes with your request...
      </h1>}
      </div>
      <div>
        <p></p>
      </div>
    </div>  
  )
}

export default App;