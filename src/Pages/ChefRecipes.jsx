import React, { useEffect, useState } from "react";
import { FaBookmark, FaHeart, FaUser, FaWifi } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ChefRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  // loading chef recipes info:
  const chefInfo = useLoaderData();
  console.log(chefInfo);
  const { id, image, thumbnail, name, numLikes, numRecipes, bio, experience } =
    chefInfo;

  // handle favorite:
  const handleFavorite = (id) => {
    // const favorite = [];
    console.log(id);
    Swal.fire("Added to Favorite!", "check more dishes", "success");
  };

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
    <div className="w-[90%] md:w-[90%] lg:w-[80%] mx-auto mt-10 card bg-base-100 shadow-xl">
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
        <div className="border-l ps-2 border-slate-400">
          <div className="mb-2">
            <h2 className="card-title">{name}</h2>
            <small className="text-xs text-slate-200 flex items-center gap-1">
              <FaUser />
              {numLikes}k follower
            </small>
          </div>
          <p className="text-slate-400">{bio}</p>

          {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
          </div> */}
        </div>
        <div className="mt-2">
          <h2 className="text-slate-300 text-xl font-bold underline underline-offset-4">
            Statistics:
          </h2>
        </div>

        {/* Recipes Card Group: */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 rounded my-5 shadow-2xl">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="card bg-base-100 shadow-xl border border-slate-700 overflow-hidden"
            >
              <img src={recipe.thumbnail} alt="" />

              <div className="card-body relative">
                <h4 className="font-bold text-2xl">
                  {recipe.title}
                  <FaBookmark
                    onClick={() => handleFavorite(recipe.id)}
                    className="absolute right-2 top-10 text-2xl text-amber-600"
                  />
                </h4>
                <p className="underline underline-offset-4 text-amber-600 font-bold">
                  Ingredients:
                </p>
                {/* <ul className=" text-sm text-slate-300 list-inside list-disc"> */}
                {/* {recipe.ingredients?.map((ingredient) => {
                    ingredient.map((i) => <li>{i}</li>);
                  })} */}
                {/* {console.log(recipe?.ingredients)}
                  {recipe.ingredients.map((i) => (
                    <li key={i}>{i}</li>
                  ))} */}

                {/* {recipe.ingredients} */}
                {/* </ul> */}
                {/* {recipe.ingredients[0]} */}
                {/* <p>
                  {console.log(
                    recipe.ingredients.map((i) => {
                      i;
                    })
                  )}
                </p> */}

                <p className="underline underline-offset-4 text-amber-600 font-bold">
                  Cooking Method:
                </p>
                <p className="text-slate-300">{recipe.method}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
// {
//     "id": 1,
//     "thumbnail": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     "title": "Spaghetti Carbonara",
//     "ingredients": [
//         {
//             "id": 1,
//             "name": "Spaghetti",
//             "image": "https://images.unsplash.com/photo-1610528521026-c36f6cf64d58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNwYWdldHRpfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
//             "desc": "Long, thin, cylindrical pasta."
//         },
//         {
//             "id": 2,
//             "name": "Eggs",
//             "image": "https://images.unsplash.com/photo-1580928251474-21a0a22fcb56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWdnc3xlbnwwfHwwfHw%3D&ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
//             "desc": "Chicken eggs."
//         },
//         {
//             "id": 3,
//             "name": "Parmesan Cheese",
//             "image": "https://images.unsplash.com/photo-1608605667644-4f4b8d258b4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGFybWVzYW4lMjBjaGVlc2V8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
//             "desc": "Hard, granular cheese."
//         },
//         {
//             "id": 4,
//             "name": "Salsa",
//             "image": "https://images.unsplash.com/photo-1596758704155-29c7af5a1801?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFjb24lMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
//             "desc": "Cured pork belly."
//         },
//         {
//             "id": 5,
//             "name": "Black Pepper",
//             "image": "https://images.unsplash.com/photo-1555072954-4f4f4f4f4f4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsYWNrJTIwcGVwcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&auto=format&fit",
//             "desc": "Spice commonly used for seasoning."
//         }
//     ],
//     "method": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dolorem."
// }
