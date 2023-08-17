import constructorIngredients from "./construcor-ingredients.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import { TConstructorProps } from "../../utils/types/types";
import { removeIngredient } from "../../services/actions/burger-constructor";
import { useAppDispatch } from "../../utils/hooks";

export const ConstructorIngredients = ({
  index,
  ingredient,
  type,
  description,
  position,
  moveCard,
}: TConstructorProps) => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLLIElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: "ingredientConstructor",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: { index: number }, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset?.y
        ? clientOffset?.y - hoverBoundingRect.top
        : 0;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "ingredientConstructor",
    item: { index: index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <li
      className={`${
        type !== "bun"
          ? constructorIngredients.shoppingCartWrapper
          : constructorIngredients.shoppingCartWrapperBun
      } ${isDragging ? constructorIngredients.draggedIngredient : ""}`}
      key={ingredient.id}
      ref={type !== "bun" ? ref : null}
      data-handler-id={type !== "bun" ? handlerId : null}
    >
      {type !== "bun" && <DragIcon type="primary" />}
      <ConstructorElement
        type={position}
        text={ingredient.name + (type === "bun" ? ` ${description}` : "")}
        price={ingredient.price}
        key={ingredient.id}
        isLocked={type === "bun"}
        thumbnail={ingredient.image}
        handleClose={() =>
          ingredient.id && dispatch(removeIngredient(ingredient.id))
        }
        extraClass={`${constructorIngredients.shoppingCartElement} ml-2`}
      />
    </li>
  );
};
