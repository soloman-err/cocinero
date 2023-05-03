import React from "react";
import { FaBookmark } from "react-icons/fa";
import Swal from "sweetalert2";

const RecipeCard = ({ recipe }) => {
  const { id, title, thumbnail, method, ingredients } = recipe;

  // handle favorite:
  const handleFavorite = (id) => {
    // console.log(id);
    Swal.fire(
      title + " " + "Added to Favorite!",
      "check more dishes",
      "success"
    );
  };

  return (
    <div className="card rounded-2xl bg-base-100 shadow-xl border border-slate-700 overflow-hidden">
      <img src={thumbnail} alt="" />

      <div className="card-body px-5 relative">
        <h4 className="font-bold text-2xl">
          {title}
          <FaBookmark
            onClick={() => handleFavorite(id)}
            className="absolute right-2 top-10 text-2xl text-amber-600"
          />
        </h4>
        <p className="underline underline-offset-4 text-amber-600 font-bold">
          Ingredients:
        </p>

        {/* Nested map for access ingredients: */}
        <ul className=" text-sm text-slate-300 list-inside list-disc">
          {ingredients.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
        <p className="underline underline-offset-4 text-amber-600 font-bold">
          Cooking Method:
        </p>
        <p className="text-slate-300">{method.slice(0, 180)}..</p>
      </div>
    </div>
  );
};

export default RecipeCard;
