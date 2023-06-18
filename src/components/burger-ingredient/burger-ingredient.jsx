import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredient from './burger-ingredient.module.css';

export default function BurgerIngredient({ ingredient }) {
  return (
    <div className={`${burgerIngredient.element} ml-4 mr-4 mb-8`}>
      <img src={ingredient.image} alt={ingredient.name} className='ml-4 mr-4' />
      <div className={`${burgerIngredient.priceContainer} mt-3 mb-1`}>
        <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${burgerIngredient.description} text text_type_main-default`}>{ingredient.name}</p>
    </div>
  )
}
