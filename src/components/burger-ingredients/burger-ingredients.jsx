import burgerIngredients from './burger-ingredients.module.css';
import BurgerIngredient from "../burger-ingredient/burger-ingredient";

export default function BurgerIngredients({ ingredients }) {
  const buns = ingredients.filter(item => item.type === 'bun');
  const main = ingredients.filter(item => item.type === 'main');
  const sauces = ingredients.filter(item => item.type === 'sauce');
  return (
    <section className={burgerIngredients.section}>
      <h1 className={`${burgerIngredients.heading} mt-10 mb-5 text text_type_main-large`}>Соберите бургер</h1>
      <nav className={`${burgerIngredients.nav}`}>
        <p className={`${burgerIngredients.navItem} mb-4 mt-4 text text_type_main-default`}>Булки</p>
        <p className={`${burgerIngredients.navItem} mb-4 mt-4 text text_type_main-default`}>Соусы</p>
        <p className={`${burgerIngredients.navItem} mb-4 mt-4 text text_type_main-default`}>Начинки</p>
      </nav>
      <h2 className={`${burgerIngredients.heading} mt-10 mb-6 text text_type_main-medium`}>Булки</h2>
      <div className={burgerIngredients.ingredientsContainer}>
        {buns.map((ingredient) => <BurgerIngredient key={ingredient._id} ingredient={ingredient}/>)}
      </div>
      <h2 className={`${burgerIngredients.heading} mt-2 mb-6 text text_type_main-medium`}>Соусы</h2>
      <div className={burgerIngredients.ingredientsContainer}>
        {sauces.map((ingredient) => <BurgerIngredient key={ingredient._id} ingredient={ingredient}/>)}
      </div>
      <h2 className={`${burgerIngredients.heading} mt-2 mb-6 text text_type_main-medium`}>Начинки</h2>
      <div className={burgerIngredients.ingredientsContainer}>
        {main.map((ingredient) => <BurgerIngredient key={ingredient._id} ingredient={ingredient}/>)}
      </div>
    </section>
  )
}
