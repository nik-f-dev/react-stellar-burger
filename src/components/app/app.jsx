import styles from "./app.module.css";
import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";

const url = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  });

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then(data => setState(prevState => ({ ...prevState, data, isLoading: false })))
      .catch(error => {
        setState(prevState => ({ ...prevState, hasError: true, isLoading: false }));
      });
  }, []);

  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    setIngredients((ingredients) => ([...ingredients, {...ingredient, id: crypto.randomUUID()}]));
  }

  const removeIngredient = (ingredientId) => {
    setIngredients(ingredients.filter((item) => item.id !== ingredientId));
  }

  const [isOpenModal, setIsOpenModal] = useState({
    orderModal: false,
    ingredientModal: false
  });

  const [ingredient, setIngredient] = useState(null);

  const openIngredientModal = (ingredient) => {
    setIngredient(ingredient);
    setIsOpenModal({...isOpenModal, ingredientModal: true});
  }

  const openOrderModal = (ingredient) => {
    setIngredient(ingredient);
    setIsOpenModal({...isOpenModal, orderModal: true});
  }

  const isOpen = isOpenModal.ingredientModal || isOpenModal.orderModal;
  const { isLoading, hasError, data } = state;

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        {isLoading && 'Загрузка...'}
        {hasError && 'Произошла ошибка'}
        {!isLoading &&
          !hasError &&
          data.data &&
          <BurgerIngredients addIngredient={addIngredient} ingredients={data.data} currentIngredients={ingredients} removeIngredient={removeIngredient} getIngredient={openIngredientModal} />}
        <BurgerConstructor ingredients={ingredients} removeIngredient={removeIngredient} openOrderModal={openOrderModal} />
      </main>
      {isOpen && <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} isOpen={isOpen}>
        {isOpenModal.ingredientModal && <IngredientDetails ingredient={ingredient} isOpenModal={isOpenModal}/>}
        {isOpenModal.orderModal && <OrderDetails />}
      </Modal>}
    </div>
  );
}

export default App;
