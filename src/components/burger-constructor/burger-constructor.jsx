import burgerConstructor from './burger-constructor.module.css';
import { Button, ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import priceLogo from './../../images/price-logo.svg';

export default function BurgerConstructor({ ingredients, removeIngredient }) {
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

      <div className={`${burgerConstructor.shoppingCart} mb-2 mt-4 custom-scroll`}>
        {ingredients.map((ingredient, index) => (
          ingredient.type !== 'bun' &&
          <div className={burgerConstructor.shoppingCartWrapper}>
            <DragIcon type="primary" />
            <ConstructorElement
            text={ingredient.name}
            key={index}
            price={ingredient.price}
            thumbnail={ingredient.image}
            handleClose={() => removeIngredient(ingredient.id)}
            extraClass={`${burgerConstructor.shoppingCartElement} ml-2`}
            />
          </div>
         ))}
      </div>

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
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>

    </section>
  )
}
