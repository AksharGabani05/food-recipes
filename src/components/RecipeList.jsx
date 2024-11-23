import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => (
  <div className="row">
    {recipes.map(recipe => (
      <RecipeCard key={recipe.id} recipe={recipe} />
    ))}
  </div>
);

export default RecipeList;
