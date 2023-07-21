import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredient from './burger-ingredient.module.css';
import { ingredientPropType, ingredientsPropType } from './../../utils/prop-types';
import PropTypes from "prop-types";
import { ADD_INGREDIENT } from "../../services/actions/burger-constructor";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

export default function BurgerIngredient({ ingredient, getIngredient }) {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.burgerConstructor.ingredientsConstructor);
  const count = ingredients.filter(_ingredient => _ingredient._id === ingredient._id).length;

  const addIngredient = (ingredient) => {
    dispatch({ type: ADD_INGREDIENT, ingredient: ingredient, id: uuidv4() });
  }

  function handleIngredientClick() {
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

BurgerIngredient.propTypes = {
  ingredient: ingredientPropType,
  getIngredient: PropTypes.func.isRequired
};
