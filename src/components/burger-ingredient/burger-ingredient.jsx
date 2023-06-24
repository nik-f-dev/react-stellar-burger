import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredient from './burger-ingredient.module.css';

export default function BurgerIngredient({ ingredients, ingredient, addIngredient, removeIngredient, getIngredient }) {
  const count = ingredients.filter(_ingredient => _ingredient._id === ingredient._id).length;

  function handleIngredientClick() {
    const bunExist = ingredients.find(item => item.type === 'bun');

    if(bunExist && ingredient.type === 'bun') {
      removeIngredient(bunExist.id);
    }
    addIngredient(ingredient);
    getIngredient(ingredient);
  }
  return (
    <li className={`${burgerIngredient.element} ml-4 mr-4 mb-8`} onClick={handleIngredientClick}>
      <img src={ingredient.image} alt={ingredient.name} className='pl-4 pr-4' />
      <div className={`${burgerIngredient.priceContainer} mt-2 mb-2`}>
        <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${burgerIngredient.description} text text_type_main-default`}>{ingredient.name}</p>
      {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
    </li>
  )
}
