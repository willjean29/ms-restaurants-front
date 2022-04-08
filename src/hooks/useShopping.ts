import { useEffect, useState } from "react";
import { IShoppingResponse, Shopping } from "interfaces";
import api from "api";
const useShopping = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listShopping, setListShopping] = useState<Shopping[]>([]);
  const [listFormated, setListFormated] = useState<
    {
      key: number;
      name: string;
      qty: number;
      createdAt: string;
    }[]
  >([]);
  const loadShopping = async () => {
    const { data } = await api.get<IShoppingResponse>("/store/list");
    setListShopping(data.orders);
    setListFormated(
      data.orders.map((order, index) => ({
        key: index,
        name: order.ingredient.name,
        qty: order.qty,
        createdAt: new Date(order.createdAt).toLocaleString(),
      }))
    );
    setIsLoading(false);
  };
  useEffect(() => {
    loadShopping();
  }, []);

  return { isLoading, listShopping, listFormated };
};

export default useShopping;
