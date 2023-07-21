import styles from "./app.module.css";
import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { getIngredients } from "../../services/actions/burger-ingredients";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const { isLoading, hasError, error } = useSelector(state => ({
    isLoading: state.burgerIngredients.ingredientsRequest,
    hasError: state.burgerIngredients.ingredientsFailed,
    error: state.burgerIngredients.error
  }));

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const [isOpenModal, setIsOpenModal] = useState({
    orderModal: false,
    ingredientModal: false
  });

  const [ingredient, setIngredient] = useState(null);

  const openIngredientModal = (ingredient) => {
    setIngredient(ingredient);
    setIsOpenModal({ ...isOpenModal, ingredientModal: true });
  }

  const openOrderModal = (ingredient) => {
    setIngredient(ingredient);
    setIsOpenModal({ ...isOpenModal, orderModal: true });
  }

  const isOpen = isOpenModal.ingredientModal || isOpenModal.orderModal;

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        {isLoading && 'Загрузка...'}
        {hasError && error}
        {!isLoading &&
          !hasError &&
          <BurgerIngredients getIngredient={openIngredientModal} />}
        <BurgerConstructor openOrderModal={openOrderModal} />
      </main>
      {isOpen && <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} isOpen={isOpen}>
        {isOpenModal.ingredientModal && <IngredientDetails ingredient={ingredient} isOpenModal={isOpenModal}/>}
        {isOpenModal.orderModal && <OrderDetails />}
      </Modal>}
    </div>
  );
}

export default App;
