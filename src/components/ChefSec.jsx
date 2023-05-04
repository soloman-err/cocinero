import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import SlideShow from "./SlideShow";

const ChefSec = () => {
  const [chefData, setChefData] = useState([]);
  // console.log(chefData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://cocinero-server-soloman-err.vercel.app/chef"
        );
        const data = await res.json();
        setChefData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-[90%] mx-auto py-10">
      <div className="md:w-[65%] mx-auto my-20">
        <h2 className="font-bold text-center text-4xl md:text-5xl lg:text-7xl">
          Bringing culinary excellence to your table.
        </h2>
        <p className="w-[70%] mx-auto mt-5 text-xl text-center">
          "Cooking is a language through which all the aspects of Spanish
          culture can be expressed."
        </p>
        <p className="text-end">
          <span className="text-end text-sm font-bold font-serif">
            -Ferran Adria
          </span>
        </p>
      </div>

      <div className="text-center py-5 md:py-10 border-t mb-10">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl border-b-2 inline border-amber-800">
          Hire a Cuisine Master
        </h1>
      </div>
      <div className="w-[90%] md:w-[70%] mx-auto">
        <SlideShow></SlideShow>
      </div>

      <div className="w-[90%] md:w-[70%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-2">
        {chefData.map((chef) => (
          <div
            key={chef?.id}
            className="bg-stone-300 text-black relative rounded-t-3xl pb-10"
          >
            <LazyLoad height={200}>
              <img
                className="rounded-t-3xl"
                src={chef?.image}
                alt="chef-featured-image"
              />
            </LazyLoad>
            <div className="text-sm px-2 py-5">
              <h2 className="font-bold text-xl border-b-2 border-amber-900 mb-2">
                {chef?.name}
              </h2>
              <p className="text-xs text-slate-800">
                {chef?.bio.slice(0, 60)}..
              </p>
              <br />
              <h3>
                <span className="font-bold text-slate-800">Experience: </span>
                {chef?.experience} Years
              </h3>

              <h3 className="flex items-center gap-1 text-slate-800">
                <span className="font-bold">Reactions:</span>
                {chef?.numLikes}k Likes
              </h3>
              <Rating
                placeholderRating={chef.rating}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
                emptySymbol={<FaStarHalfAlt />}
                readonly
                className="text-amber-700"
              />
            </div>
            <div className="absolute hover:bg-amber-800 hover:text-lg bottom-0 bg-amber-900 border-2 border-t-0 w-full text-center font-bold text-white py-2">
              <Link to={`/chef-recipes/${chef.id}`}>
                <button>View Recipes</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefSec;
