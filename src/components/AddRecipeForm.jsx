import React, { useState } from 'react';

const AddRecipeForm = ({ onAdd, closeModal }) => {
  const [recipe, setRecipe] = useState({
    name: '',
    image: '',
    description: '',
    ingredients: '',
    steps: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!recipe.name || !recipe.image || !recipe.description || !recipe.ingredients || !recipe.steps) {
      alert('Please fill all the fields.');
      return;
    }

    const newRecipe = {
      id: Date.now(), // Generate unique ID
      name: recipe.name,
      image: recipe.image,
      description: recipe.description,
      ingredients: recipe.ingredients.split(',').map(ingredient => ingredient.trim()),
      steps: recipe.steps.split(',').map(step => step.trim())
    };

    onAdd(newRecipe); // Add the new recipe
    closeModal(); // Close the modal after submitting
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Recipe Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={recipe.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Image URL</label>
        <input
          type="text"
          className="form-control"
          name="image"
          value={recipe.image}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          className="form-control"
          name="description"
          value={recipe.description}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Ingredients (comma separated)</label>
        <input
          type="text"
          className="form-control"
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Steps (comma separated)</label>
        <input
          type="text"
          className="form-control"
          name="steps"
          value={recipe.steps}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
