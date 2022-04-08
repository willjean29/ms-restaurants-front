import { useRecipe } from "hooks";
import { EyeOutlined } from "@ant-design/icons";
import { Spin, Space, List, Card, Badge } from "antd";
import { ModalIngredients, Spinner } from "components/custom";
import { Recipe } from "interfaces";
import { useState } from "react";
interface RecipePageProps {}

const RecipePage: React.FC<RecipePageProps> = () => {
  const { isLoading, recipes } = useRecipe();
  const [isVisibleIngredients, setIsVisibleIngredients] = useState(false);
  const [recipe, setRecipe] = useState<Recipe>();
  if (isLoading) {
    return (
      <div>
        <Space size="large">
          <Spin size="large" />
        </Space>
      </div>
    );
  }
  return (
    <div>
      <h1 style={{ fontSize: 24 }}>Recetas</h1>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <List
            grid={{ gutter: 16, column: 4, xs: 1, sm: 2, md: 3 }}
            dataSource={recipes}
            renderItem={(item) => (
              <List.Item>
                <Card
                  title={item.name}
                  extra={
                    <EyeOutlined
                      style={{ color: "#005544", cursor: "pointer" }}
                      onClick={() => {
                        setIsVisibleIngredients(true);
                        setRecipe(item);
                        console.log("click modal");
                      }}
                    />
                  }
                >
                  <strong>Ingredientes: </strong> {item.ingredients.length}
                </Card>
              </List.Item>
            )}
          />
        )}
      </div>
      <ModalIngredients isVisible={isVisibleIngredients} setIsVisble={setIsVisibleIngredients} recipe={recipe} />
    </div>
  );
};

export default RecipePage;
