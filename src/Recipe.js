import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, link, image, ingredients }) => {
    return (
        <div className = {style.recipe}>
            <div>
            <h1>{title}</h1>
            <img src={image} alt=''></img>
            <ul>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ul>
            <a href={link} target='_blank' rel="noreferrer">Get the Instructions</a>
            </div>
        </div>
    )
}

export default Recipe;