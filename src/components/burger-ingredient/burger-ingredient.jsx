import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredient from './burger-ingredient.module.css';
import { ingredientPropType } from './../../utils/prop-types';
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getIngredient } from '../../services/actions/ingredient-details';
import { openModal } from '../../services/actions/modal';
import { useDrag } from 'react-dnd';

export default function BurgerIngredient({ ingredient }) {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.burgerConstructor.ingredientsConstructor);
  const count = ingredients.filter(item => item._id === ingredient._id).length;
  console.log(ingredients);

  const [{isDrag}, drag] = useDrag(() => ({
    type: 'ingredient',
    item: { ...ingredient },
    collect: (monitor) => ({
      isDrag: !!monitor.isDragging(),
    })
  }))

  function handleIngredientClick() {
    dispatch(getIngredient(ingredient));
    dispatch(openModal('ingredient'));
  }
  return (
    !isDrag &&
    <li
      ref={drag}
      className={`${burgerIngredient.element} ml-4 mr-4 mb-8`}
      onClick={handleIngredientClick}
    >
      <img draggable="false" src={ingredient.image} alt={ingredient.name} className='pl-4 pr-4' />
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
};
