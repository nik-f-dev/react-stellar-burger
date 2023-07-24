import burgerConstructor from './burger-constructor.module.css';
import { Button, ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import priceLogo from './../../images/price-logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_INGREDIENT, addIngredient } from "../../services/actions/burger-constructor";
import { openModal } from '../../services/actions/modal';
import { getOrder } from '../../services/actions/order-details';
import { useDrop, useDrag } from 'react-dnd';
import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function BurgerConstructor() {
  const dispatch = useDispatch();

  const { ingredients, bun } = useSelector(state => ({
    ingredients: state.burgerConstructor.ingredientsConstructor,
    bun: state.burgerConstructor.bun
  }));

  const [{isHover}, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch(addIngredient(item));
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  });

  const [{ isDrag }, dragTarget] = useDrag({
    type: "construcorIngredient",
    item: { id: uuidv4() },
    collect: monitor => ({
        isDrag: monitor.isDragging()
    })
  });

  const [{isConstructorHover}, dropConstrucorTarget] = useDrop({
    accept: "construcorIngredient",
    drop(item) {
      console.log(321);
    },
    collect: monitor => ({
      isConstructorHover: monitor.isOver(),
    })
  });


  const isBun = bun ? false : true;
  const ingredientsId = ingredients.map(ingredient => ingredient._id);

  const openOrderModal = () => {
    dispatch(getOrder(ingredientsId));
    dispatch(openModal('order'));
  }

  const removeIngredient = (ingredientId) => {
    dispatch({ type: DELETE_INGREDIENT, id: ingredientId });
  }

  const ingredientPrice = useMemo(() => {
    return ingredients.reduce((acc, current) => {
      if (current.type === 'bun') {
        return acc + current.price * 2;
      } else {
        return acc + current.price;
      }
    }, 0);
  }, [ingredients]);

  return (
    <section
      ref={dropTarget}
      className={`${burgerConstructor.section} ${
        isHover ? burgerConstructor.sectionDrop : burgerConstructor.sectionNoDrop
      }`}
    >
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

      <ul
        className={`${burgerConstructor.shoppingCart} ${isDrag ? burgerConstructor.sectionDrop: burgerConstructor.sectionNoDrop} mb-2 mt-4 custom-scroll`}
        ref={dropConstrucorTarget}
      >
        {ingredients.map((ingredient, index) => (
          ingredient.type !== 'bun' &&
          <li
            className={`${burgerConstructor.shoppingCartWrapper}`}
            key={index}
            ref={dragTarget}
          >
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
        <Button htmlType="button" type="primary" size="large" disabled={isBun} onClick={openOrderModal}>
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}
