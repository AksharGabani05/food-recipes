import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RecipePage = ({ recipes, onUpdate }) => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));
  const [updatedRecipe, setUpdatedRecipe] = useState({ ...recipe });

  const navigate = useNavigate();

  useEffect(() => {
    if (recipe) {
      setUpdatedRecipe({ ...recipe });
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe({
      ...updatedRecipe,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedRecipe);  // Update the recipe in the parent component
    navigate('/recipe'); // Navigate back to the recipe list page
  };

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h2>Edit Recipe: {recipe.name}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={updatedRecipe.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={updatedRecipe.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={updatedRecipe.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Ingredients</label>
          <input
            type="text"
            className="form-control"
            name="ingredients"
            value={updatedRecipe.ingredients.join(', ')}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Steps</label>
          <input
            type="text"
            className="form-control"
            name="steps"
            value={updatedRecipe.steps.join(', ')}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default RecipePage;
