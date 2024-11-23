import React from 'react';

const RecipeCard = ({ recipe, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(recipe.id); // Trigger the delete handler with the recipe id
  };

  const handleEdit = () => {
    onEdit(recipe); // Trigger the edit handler with the full recipe data
  };

  return (
    <div className="col-4 mb-3">
      <div className="card">
        <img className="card-img-top" src={recipe.image} alt={recipe.name} />
        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
          <p className="card-text">{recipe.description}</p>
          <button className="btn btn-warning" onClick={handleEdit}>Edit</button>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
