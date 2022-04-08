import { useEffect, useState } from "react";
import { IOrderResponse, Order } from "interfaces";
import api from "api";
const useOrders = (isReloadOrders: boolean, setIsReloadOrders: React.Dispatch<React.SetStateAction<boolean>>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [listOrder, setListOrder] = useState<Order[]>([]);
  const [listFormatedOrder, setListFormatedOrder] = useState<
    {
      key: number;
      name: string;
      createdAt: string;
    }[]
  >([]);
  const loadOrders = async () => {
    const { data } = await api.get<IOrderResponse>("/orders");
    setListOrder(data.orders);
    setListFormatedOrder(
      data.orders.map((order, index) => ({
        key: index + 1,
        name: order.name,
        createdAt: new Date(order.createdAt).toLocaleString(),
      }))
    );
    setIsLoading(false);
  };
  useEffect(() => {
    console.log("solicitando ordenes");
    loadOrders();
  }, [isReloadOrders]);

  return { isLoading, listOrder, listFormatedOrder, lastOrders: listOrder.slice(0, 5) };
};

export default useOrders;
