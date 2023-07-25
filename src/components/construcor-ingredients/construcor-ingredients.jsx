import constructorIngredients from './construcor-ingredients.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { DELETE_INGREDIENT } from "../../services/actions/burger-constructor";
import { useDrag, useDrop } from 'react-dnd'
import { useRef } from 'react';
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types';

export const ConstructorIngredient = ({index, ingredient, type, description, position, moveCard}) => {
  const dispatch = useDispatch();

  const removeIngredient = (ingredientId) => {
    dispatch({ type: DELETE_INGREDIENT, id: ingredientId });
  };

  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'ingredientConstructor',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      };

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      };

      moveCard(dragIndex, hoverIndex)

      item.index = hoverIndex
    },
  })
  const [{ isDragging }, drag] = useDrag({
    type: 'ingredientConstructor',
    item: { id: ingredient.id, index: index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref));

  return(
    <li
      className={`${type !== 'bun' ? constructorIngredients.shoppingCartWrapper: constructorIngredients.shoppingCartWrapperBun} ${isDragging ? constructorIngredients.draggedIngredient: ''}`}
      key={index}
      ref={type !== 'bun' ? ref : null}
      data-handler-id={handlerId}
    >
      {type !== 'bun' && <DragIcon type="primary" />}
      <ConstructorElement
      type={position}
      text={ingredient.name + (type === 'bun'? ` ${description}`: '')}
      price={ingredient.price}
      key={index}
      isLocked={type === 'bun'}
      thumbnail={ingredient.image}
      handleClose={() => removeIngredient(ingredient.id)}
      extraClass={`${constructorIngredients.shoppingCartElement} ml-2`}
      />
    </li>
  )
}

ConstructorIngredient.propTypes = {
  index: PropTypes.number.isRequired,
  ingredient: ingredientPropType,
  type: PropTypes.string.isRequired,
  description: PropTypes.string,
  position: PropTypes.string,
  moveCard: PropTypes.func.isRequired
}
