import { Badge, Button, Card, List, Table } from "antd";
import { useOrders, useSocket } from "hooks";
import { Spinner, Loading } from "components/custom";
import api from "api";
import { useEffect, useState } from "react";

interface OrdersPageProps {}

const OrdersPage: React.FC<OrdersPageProps> = () => {
  const [isReloadOrders, setIsReloadOrders] = useState(false);
  const { isLoading, listOrder, listFormatedOrder, lastOrders } = useOrders(isReloadOrders, setIsReloadOrders);
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);
  const getRecipe = async () => {
    setIsVisibleLoading(true);
    const response = await api.post("/orders", {
      payload: {
        event: "ADD_ORDER_RECIPE",
        data: {},
      },
    });
    console.log(response);
    setTimeout(() => {
      setIsReloadOrders(!isReloadOrders);
      setIsVisibleLoading(false);
    }, 3000);
  };

  const columns = [
    {
      title: "N°",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Fecha de Compra",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  // return <div></div>;
  return (
    <div>
      <Loading isVisible={isVisibleLoading} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ fontSize: 24 }}>Pedidos</h1>
        <Button type="primary" shape="round" size="large" onClick={getRecipe}>
          Pedir Plato
        </Button>
      </div>
      <h1 style={{ fontSize: 24 }}>Pedidos en Cocina</h1>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <List
            grid={{ gutter: 16, column: 4, xs: 1, sm: 2, md: 3 }}
            dataSource={lastOrders}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <Card title={item.name}>
                  <strong>Ingredintes: </strong>
                  <Badge count={item.ingredients.length} />
                </Card>
              </List.Item>
            )}
          />
        )}
      </div>
      <h1 style={{ fontSize: 24 }}>Historial de Pedidos</h1>
      <div>{isLoading ? <Spinner /> : <Table dataSource={listFormatedOrder} columns={columns} />}</div>
    </div>
  );
};

export default OrdersPage;
