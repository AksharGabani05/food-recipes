import React from 'react';
import RecipeList from '../components/RecipeList';

const Home = ({ recipes }) => (
  <div className="container mt-5">
    <h1>Welcome to Food Recipes</h1>
    <RecipeList recipes={recipes} />
  </div>
  
  
);

export default Home;
