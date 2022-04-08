import { useStore, useShoppping } from "hooks";
import { Spin, Space, List, Card, Badge, Table } from "antd";

import { Spinner } from "components/custom";

interface StorePageProps {}

const StorePage: React.FC<StorePageProps> = () => {
  const { isLoading, ingredients } = useStore();
  const { isLoading: isLoadingShopping, listShopping, listFormated } = useShoppping();

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Cantidad",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Fecha de Compra",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  return (
    <div>
      <h1 style={{ fontSize: 24 }}>Almacén</h1>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <List
            grid={{ gutter: 16, column: 4, xs: 1, sm: 2, md: 3 }}
            dataSource={ingredients}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <Card title={item.name}>
                  <strong>Stock: </strong>
                  <Badge count={item.qty} status={item.qty === 0 ? "error" : "success"} />
                  {item.qty}
                </Card>
              </List.Item>
            )}
          />
        )}
      </div>
      <h1 style={{ fontSize: 24 }}>Historial de Compras </h1>
      <div>{isLoadingShopping ? <Spinner /> : <Table dataSource={listFormated} columns={columns} />}</div>
    </div>
  );
};

export default StorePage;
