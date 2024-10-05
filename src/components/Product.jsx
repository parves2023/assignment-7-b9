import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard'; // Make sure this path is correct

const Product = ({handleClick}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/recipes.json')
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className="col-span-4 grid grid-cols-2 gap-4 rounded-2xl shadow-xl">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.recipe_id} recipe={recipe} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Product;
