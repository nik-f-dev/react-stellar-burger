import styles from "./app.module.css";
import { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";

const url = 'https://norma.nomoreparties.space/api/ingredients';

function generateUniqueId() {
  const timeStamp = Date.now().toString(36);

  // Генерируем случайное число в диапазоне от 0 до 100000
  const randomNum = Math.floor(Math.random() * 100000).toString(36);

  return `${timeStamp}-${randomNum}`;
}

function App() {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  });

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setState({ ...state, data, isLoading: false }))
      .catch(e => {
        setState({ ...state, hasError: true, isLoading: false });
      });
  }, [])

  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (ingredient) => {
      setIngredients((ingredients) => ([...ingredients, {...ingredient, id: generateUniqueId()}]));
  }

  const removeIngredient = (ingredientId) => {
    setIngredients(ingredients.filter((item) => item.id !== ingredientId));
  }

  const { isLoading, hasError, data } = state;

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <AppHeader />
      </header>
      <main className={styles.main}>
        {isLoading && 'Загрузка...'}
        {hasError && 'Произошла ошибка'}
        {!isLoading &&
          !hasError &&
          data.data &&
          <BurgerIngredients addIngredient={addIngredient} ingredients={data.data} currentIngredients={ingredients} removeIngredient={removeIngredient} />}
        <BurgerConstructor ingredients={ingredients} removeIngredient={removeIngredient} />
      </main>
    </div>
  );
}

export default App;
