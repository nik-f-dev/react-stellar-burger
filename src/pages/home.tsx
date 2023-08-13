import styles from "./home.module.css";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import Modal from "../components/modal/modal";
import OrderDetails from "../components/order-details/order-details";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Loader from "../components/loader/loader";
import { TModal, TIngredientsRequest } from "../utils/types";

function HomePage() {
  const modal = useSelector<any>((state) => state.modal) as TModal;

  const { isLoading, hasError, error } = useSelector<any>((state) => ({
    isLoading: state.burgerIngredients.ingredientsRequest,
    hasError: state.burgerIngredients.ingredientsFailed,
    error: state.burgerIngredients.error,
  })) as TIngredientsRequest;

  return (
    <div className={styles.app}>
      <DndProvider backend={HTML5Backend}>
        <main className={styles.main}>
          {isLoading && (
            <div className={styles.loaderWrapper}>
              <Loader />
            </div>
          )}
          {hasError && error}
          {!isLoading && !hasError && <BurgerIngredients />}
          <BurgerConstructor />
        </main>
        {modal.isOpen && (
          <Modal>
            <>
              {modal.modalType === "ingredient" && <IngredientDetails />}
              {modal.modalType === "order" && <OrderDetails />}
            </>
          </Modal>
        )}
      </DndProvider>
    </div>
  );
}

export default HomePage;
