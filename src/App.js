import "./App.css";
import React, { useState, useEffect } from "react";

import RecipeCard from "./components/RecipeCard";
import SerchBox from "./components/SerchBox";

// /"This link wasted my 3 hours. I just had to put 'https' lol."
const urlApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  // all use states
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  // function for api calling
  const serchRecipe = async () => {
    setIsLoading(true);
    try {
      const url = urlApi + query;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok.");
      }
      console.log(res);
      const data = await res.json();
      console.log("Response:", data); // Log the response
      setRecipes(data.meals);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error, e.g., show an error message to the user
      setIsLoading(false);
    }
  };

  // use effect is used for mount the component
  useEffect(() => {
    serchRecipe();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    serchRecipe();
  };
  return (
    <>
      <div className="container">
        <h2>Our Recipe App</h2>
        <SerchBox
          handleSubmit={handleSubmit}
          onChange={(e) => setQuery(e.target.value)}
          isLoading={isLoading}
          value={query}
        />
        <div className="recipes">
          {recipes
            ? recipes.map((recipe) => (
                <RecipeCard key={recipe.idMeal} recipe={recipe} />
              ))
            : "No Recipies"}
        </div>
      </div>
    </>
  );
}

export default App;
