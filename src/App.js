import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LogoutPage from './pages/LogoutPage';
import AddRecipeForm from './components/AddRecipeForm'; // Import the AddRecipeForm component
import { toast } from 'react-toastify';

const App = () => {
  const [recipes, setRecipes] = useState([
    { 
      id: 1, 
      name: 'Pasta', 
      image: '/images/pasta.jpg', 
      description: 'Delicious pasta.', 
      ingredients: ['Pasta', 'Tomato Sauce'], 
      steps: ['Boil pasta', 'Add sauce'] 
    },
    { 
      id: 2, 
      name: 'Pizza', 
      image: '/images/pizza.jpg', 
      description: 'Cheesy pizza.', 
      ingredients: ['Dough', 'Cheese'], 
      steps: ['Prepare dough', 'Bake'] 
    },
    { 
      id: 3, 
      name: 'Burger', 
      image: '/images/burger.jpg', 
      description: 'Juicy beef burger with cheese.', 
      ingredients: ['Buns', 'Beef Patty', 'Cheese', 'Lettuce', 'Tomato'],
      steps: ['Grill beef patty', 'Toast buns', 'Assemble with cheese, lettuce, and tomato']
    },
  ]);

  const navigate = useNavigate(); // Used to navigate for editing recipes

  // Handle add new recipe
  const handleAdd = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    toast.success('Recipe added successfully!');
  };

  // Handle delete recipe
  const handleDelete = (id) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
    setRecipes(updatedRecipes);
    toast.success('Recipe deleted successfully!');
  };

  // Handle update recipe
  const handleUpdate = (updatedRecipe) => {
    const updatedRecipes = recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    setRecipes(updatedRecipes);
    toast.success('Recipe updated successfully!');
  };

  // Handle editing a recipe (navigate to RecipePage)
  const handleEdit = (recipe) => {
    navigate(`/recipe/${recipe.id}`, { state: { recipe } });
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <h1>Welcome to Food Recipes</h1>

        <Routes>
          <Route 
            path="/recipe" 
            element={<Home recipes={recipes} onDelete={handleDelete} onEdit={handleEdit} />} 
          />
          <Route 
            path="/recipe/:id" 
            element={<RecipePage recipes={recipes} onUpdate={handleUpdate} />} 
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SignupPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
