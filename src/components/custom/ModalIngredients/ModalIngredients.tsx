import { Modal } from "components/custom";
import { Recipe } from "interfaces";
import "./ModalIngredients.scss";
interface ModalIngredientsProps {
  isVisible: boolean;
  setIsVisble: React.Dispatch<React.SetStateAction<boolean>>;
  recipe: Recipe | undefined;
}

const ModalIngredients: React.FC<ModalIngredientsProps> = ({ isVisible, setIsVisble, recipe }) => {
  if (!recipe) return null;
  return (
    <Modal isVisible={isVisible} title={recipe.name} setIsVisble={setIsVisble}>
      <h3>Ingredientes</h3>
      <ul className="list-ingredients">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="list-ingredients__item">
            <p className="list-ingredients__item-name">
              <strong>Nombre: </strong>
              {ingredient.name}
            </p>
            <p className="list-ingredients__item-qty">
              <strong>Qty: </strong>
              {ingredient.qty}
            </p>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default ModalIngredients;
