import React from "react";
import { CiClock2 } from "react-icons/ci"; // For clock icon
import { BsFire } from "react-icons/bs"; // For fire icon


const RecipeCard = ({ recipe,handleClick }) => {




  return (
    <div className="grid-cols-2 rounded-2xl p-3  shadow-xl border border-gray-200">
      <div className="card  ">
        <figure>
          <img className="h-56 w-full object-cover" src={recipe.recipe_image} alt={recipe.recipe_name} />
        </figure>
        <div className="card-body lead">
          <h4 className="card-title">{recipe.recipe_name}</h4>
          <p className="leading-loose">{recipe.short_description}</p>
          <hr />
          <h4 className="card-title">ingredients</h4>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <div className="flex gap-4 my-4 justify-between">
            <div className="flex gap-2 items-center">
              <CiClock2 /> <span>{recipe.preparing_time}</span>
            </div>
            <div className="flex gap-2 items-center">
              <BsFire /> <span>{recipe.calories}</span>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button onClick={()=> handleClick(recipe.recipe_name,recipe.preparing_time,recipe.calories)} className="btn btn-primary bg-[#0BE58A] border-none px-9 rounded-3xl text-black font-bold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
