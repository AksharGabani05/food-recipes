import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Recipe Image */}
        <div className="col-md-6 mb-4">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="img-fluid rounded shadow-sm"
            style={{ objectFit: 'cover', height: '100%' }}
          />
        </div>

        {/* Recipe Content */}
        <div className="col-md-6">
          <h1 className="display-4">{recipe.name}</h1>
          <p className="text-muted">{recipe.description}</p>
          
          <div className="mt-4">
            <h3>Ingredients:</h3>
            <ul className="list-group">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="list-group-item">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3>Steps:</h3>
            <ol className="list-group list-group-numbered">
              {recipe.steps.map((step, index) => (
                <li key={index} className="list-group-item">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
