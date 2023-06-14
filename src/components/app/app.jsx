import styles from "./app.module.css";
import { data } from "../../utils/data";
import React, { useEffect, useState } from "react";
import AppHeader from "../app-header/app-header";

const url = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [ingredients, setIngredients] = useState();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setIngredients(data))
      .catch(rej => console.log(rej))
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
    </div>
  );
}

export default App;
