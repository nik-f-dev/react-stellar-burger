import styles from "./app.module.css";
import { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { getIngredients } from "../../services/actions/burger-ingredients";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const modal = useSelector(state => state.modal);

  const dispatch = useDispatch();

  const { isLoading, hasError, error } = useSelector(state => ({
    isLoading: state.burgerIngredients.ingredientsRequest,
    hasError: state.burgerIngredients.ingredientsFailed,
    error: state.burgerIngredients.error
  }));

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        {isLoading && 'Загрузка...'}
        {hasError && error}
        {!isLoading &&
          !hasError &&
          <BurgerIngredients />}
        <BurgerConstructor />
      </main>
      {modal.isOpen && (
        <Modal isOpen={modal.isOpen}>
          {modal.modalType === 'ingredient' && <IngredientDetails />}
          {modal.modalType === 'order' && <OrderDetails />}
        </Modal>
      )}
    </div>
  );
}

export default App;
