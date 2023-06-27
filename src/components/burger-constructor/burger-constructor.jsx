import burgerConstructor from './burger-constructor.module.css';
import { Button, ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import priceLogo from './../../images/price-logo.svg';
import PropTypes from "prop-types";
import { ingredientsPropType } from './../../utils/prop-types';

export default function BurgerConstructor({ ingredients, removeIngredient, openOrderModal }) {
  const ingredientPrice = ingredients.reduce((acc, current) => acc + current.price, 0);
  return (
    <section className={`${burgerConstructor.section}`}>
      <div className='mr-4'>
        {ingredients.map((ingredient, index) => (
          ingredient.type === 'bun' &&
          <ConstructorElement
          type="top"
          isLocked={true}
          text={`${ingredient.name} (верх)`}
          price={ingredient.price}
          key={index}
          thumbnail={ingredient.image}
          extraClass={burgerConstructor.shoppingCartElement}
          />
        ))}
      </div>

      <ul className={`${burgerConstructor.shoppingCart} mb-2 mt-4 custom-scroll`}>
        {ingredients.map((ingredient, index) => (
          ingredient.type !== 'bun' &&
          <li className={burgerConstructor.shoppingCartWrapper} key={index}>
            <DragIcon type="primary" />
            <ConstructorElement
            text={ingredient.name}
            price={ingredient.price}
            key={index}
            thumbnail={ingredient.image}
            handleClose={() => removeIngredient(ingredient.id)}
            extraClass={`${burgerConstructor.shoppingCartElement} ml-2`}
            />
          </li>
         ))}
      </ul>

      <div className='mr-4 mt-2'>
        {ingredients.map((ingredient, index) => (
          ingredient.type === 'bun' &&
          <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${ingredient.name} (низ)`}
          price={ingredient.price}
          key={index}
          thumbnail={ingredient.image}
          extraClass={burgerConstructor.shoppingCartElement}
        />
        ))}
      </div>

      <div className={`${burgerConstructor.info} mt-10 mr-4`}>
        <div className={`${burgerConstructor.price} mr-10`}>
          <p className="text text_type_digits-medium mr-2">{ingredientPrice}</p>
          <img src={priceLogo} alt="price logo" />
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={openOrderModal}>
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

BurgerConstructor.propTypes = {
  ingredients: ingredientsPropType.isRequired,
  removeIngredient: PropTypes.func.isRequired,
  openOrderModal: PropTypes.func.isRequired
};
