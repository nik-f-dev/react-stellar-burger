import burgerIngredients from './burger-ingredients.module.css';
import { useState, useRef } from 'react';
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';


export default function BurgerIngredients({ ingredients, addIngredient, currentIngredients, removeIngredient }) {
  const [current, setCurrent] = useState('bun');

  const buns = ingredients.filter(item => item.type === 'bun');
  const main = ingredients.filter(item => item.type === 'main');
  const sauces = ingredients.filter(item => item.type === 'sauce');

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const handleNavigationClick = (value) => {
    setCurrent(value);
    switch (value) {
      case 'bun':
        bunRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 'sauce':
        sauceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 'main':
        mainRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }

  return (
    <section className={burgerIngredients.section}>
      <h1 className={`${burgerIngredients.heading} mt-10 mb-5 text text_type_main-large`}>Соберите бургер</h1>
      <div style={{ display: 'flex' }} className='mb-10'>
        <Tab value="bun" active={current === 'bun'} onClick={() => handleNavigationClick('bun')}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={() => handleNavigationClick('sauce')}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={() => handleNavigationClick('main')}>
          Начинки
        </Tab>
      </div>
      <div className={`${burgerIngredients.ingredientsWrapper} custom-scroll`}>
        <h2 ref={bunRef} className={`${burgerIngredients.heading} mb-6 text text_type_main-medium`}>Булки</h2>
        <div className={burgerIngredients.ingredientsContainer}>
          {buns.map((ingredient) => <BurgerIngredient addIngredient={addIngredient} key={ingredient._id} ingredient={ingredient} ingredients={currentIngredients} removeIngredient={removeIngredient} />)}
        </div>
        <h2 ref={sauceRef} className={`${burgerIngredients.heading} mt-2 mb-5 text text_type_main-medium`}>Соусы</h2>
        <div className={burgerIngredients.ingredientsContainer}>
          {sauces.map((ingredient) => <BurgerIngredient addIngredient={addIngredient} key={ingredient._id} ingredient={ingredient} ingredients={currentIngredients} removeIngredient={removeIngredient} />)}
        </div>
        <h2 ref={mainRef} className={`${burgerIngredients.heading} mt-2 mb-6 text text_type_main-medium`}>Начинки</h2>
        <div className={burgerIngredients.ingredientsContainer}>
          {main.map((ingredient) => <BurgerIngredient addIngredient={addIngredient} key={ingredient._id} ingredient={ingredient} ingredients={currentIngredients} removeIngredient={removeIngredient} />)}
        </div>
      </div>

    </section>
  )
}