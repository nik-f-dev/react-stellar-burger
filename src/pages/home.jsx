import styles from "./home.module.css";
import { useEffect } from "react";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import Modal from "../components/modal/modal";
import OrderDetails from "../components/order-details/order-details";
import IngredientDetails from "../components/ingredient-details/ingredient-details";
import { getIngredients } from "../services/actions/burger-ingredients";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function HomePage() {
  const modal = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const { isLoading, hasError, error } = useSelector((state) => ({
    isLoading: state.burgerIngredients.ingredientsRequest,
    hasError: state.burgerIngredients.ingredientsFailed,
    error: state.burgerIngredients.error,
  }));

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <DndProvider backend={HTML5Backend}>
        <main className={styles.main}>
          {isLoading && "Загрузка..."}
          {hasError && error}
          {!isLoading && !hasError && <BurgerIngredients />}
          <BurgerConstructor />
        </main>
        {modal.isOpen && (
          <Modal isOpen={modal.isOpen}>
            {modal.modalType === "ingredient" && <IngredientDetails />}
            {modal.modalType === "order" && <OrderDetails />}
          </Modal>
        )}
      </DndProvider>
    </div>
  );
}

export default HomePage;
