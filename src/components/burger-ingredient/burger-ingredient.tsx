import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredient from "./burger-ingredient.module.css";
import { useAppSelector } from "../../utils/hooks";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { TIngredient } from "../../utils/types/types";

export default function BurgerIngredient({
  ingredient,
}: {
  ingredient: TIngredient;
}) {
  const location = useLocation();
  const ingredients = useAppSelector(
    (state) => state.burgerConstructor.ingredientsConstructor
  );
  const count = ingredients.filter(
    (item) => item._id === ingredient._id
  ).length;

  const [{ isDrag }, drag] = useDrag(() => ({
    type: "ingredient",
    item: { ...ingredient },
    collect: (monitor) => ({
      isDrag: !!monitor.isDragging(),
    }),
  }));

  return isDrag ? null : (
    <li ref={drag} className={`${burgerIngredient.element} ml-4 mr-4 mb-8`}>
      <Link
        to={`/ingredients/${ingredient._id}`}
        className={`${burgerIngredient.link}`}
        state={{ background: location }}
      >
        <img
          draggable="false"
          src={ingredient.image}
          alt={ingredient.name}
          className="pl-4 pr-4"
        />
        <div className={`${burgerIngredient.priceContainer} mt-2 mb-2`}>
          <p className="text text_type_digits-default mr-2">
            {ingredient.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <p
          className={`${burgerIngredient.description} text text_type_main-default`}
        >
          {ingredient.name}
        </p>
        {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
      </Link>
    </li>
  );
}
