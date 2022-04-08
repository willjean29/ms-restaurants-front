import api from "api";
import { IStoreResponse, Ingredient } from "interfaces";
import { useEffect, useState } from "react";
const useStore = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const loadIngredients = async () => {
    const { data } = await api.get<IStoreResponse>("/store");
    setIngredients(data.ingredients);
    setIsLoading(false);
  };
  useEffect(() => {
    loadIngredients();
  }, []);

  return { isLoading, ingredients };
};

export default useStore;
