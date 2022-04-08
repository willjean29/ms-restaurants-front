import { useEffect, useState } from "react";
import api from "api";
import { IRecipeResponse, Recipe } from "interfaces";
const useRecipes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const loadRecipes = async () => {
    const { data } = await api.get<IRecipeResponse>("/recipe");
    setRecipes(data.recipes);
    setIsLoading(false);
  };
  useEffect(() => {
    loadRecipes();
  }, []);
  return { isLoading, recipes };
};

export default useRecipes;
