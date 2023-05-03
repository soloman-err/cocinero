import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const ChefRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  // loading chef recipes info:
  const chefInfo = useLoaderData();
  console.log(chefInfo);
  const { id, image, thumbnail, name, numLikes, numRecipes, bio, experience } =
    chefInfo;

  useEffect(() => {
    try {
      fetch("https://cocinero-server-soloman-err.vercel.app/recipes")
        .then((res) => res.json())
        .then((data) => setRecipes(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="md:w-[90%] lg:w-[80%] mx-auto mt-10 card bg-base-100 shadow-xl">
      <figure className="">
        <img
          className="h-[20vh] md:h-[30vh] lg:h-[40vh] w-full object-center object-cover"
          src={thumbnail}
          alt="Album"
        />
      </figure>
      <div className="card-body relative pt-20 lg:pt-32">
        <img
          className="rounded-full w-20 h-20 md:w-24 md:h-24 lg:w-40 lg:h-40 absolute -top-10 md:-top-10 lg:-top-20 left-6 object-cover object-center"
          src={image}
          alt=""
        />
        <div className="border-l-4 ps-3 border-slate-600">
          <div className="mb-2 space-y-2">
            <h2 className="card-title lg:text-3xl">{name}</h2>
            <small className="text-xs text-slate-200 flex items-center gap-1">
              <FaUser />
              {numLikes}k follower
            </small>
          </div>
          <p className="text-slate-400">{bio}</p>
        </div>
        <div className="mt-5">
          <h2 className="text-slate-300 text-xl font-bold underline underline-offset-4">
            Chef's Statistics:
          </h2>
        </div>

        {/* Recipes Card Group: */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 rounded my-5 shadow-2xl">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
