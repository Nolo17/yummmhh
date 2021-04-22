import React from 'react';

const Form = ({getSearch, updateSearch, search, updateDiet, updateMealType}) => { return (
<form onSubmit={getSearch} className='search-form'>
        <div className='search-line'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}></input>
        <button className='search-button'type='submit'>Search</button>
        </div>
        <div className = 'diet-line'>
        <input type="radio" id="starter" name="mealtype" value="starter"  onClick={(e) => {updateMealType(e.target.value)}}></input>
        <label for="starter">Starter</label>
        <input type="radio" id="main" name="mealtype" value="main"  onClick={(e) => {updateMealType(e.target.value)}}></input>
        <label for="main">Main</label>
        <input type="radio" id="dessert" name="mealtype" value="dessert"  onClick={(e) => {updateMealType(e.target.value)}}></input>
        <label for="dessert">Dessert</label>
        <input type="radio" id="drink" name="mealtype" value="drink"  onClick={(e) => {updateMealType(e.target.value)}}></input>
        <label for="drink">Drink</label>
        </div>
        <div className = 'diet-line'>
        <input type="radio" id="vegetarian" name="diet" value="vegetarian" onClick={(e) => {updateDiet(e.target.value)}}></input>
        <label for="vegetarian">Vegetarian</label>
        <input type="radio" id="vegan" name="diet" value="vegan" onClick={(e) => {updateDiet(e.target.value)}}></input>
        <label for="vegan">Vegan</label>
        <input type="radio" id="gluten-free" name="diet" value="gluten-free" onClick={(e) => {updateDiet(e.target.value)}}></input>
        <label for="gluten-free">Gluten-free</label>
        <input type="radio" id="keto" name="diet" value="keto" onClick={(e) => {updateDiet(e.target.value)}}></input>
        <label for="keto">Keto-friendly</label>
        </div>
      </form>
)}

export default Form;