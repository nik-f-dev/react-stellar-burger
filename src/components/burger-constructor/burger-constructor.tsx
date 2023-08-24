import burgerConstructor from "./burger-constructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import priceLogo from "./../../images/price-logo.svg";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import {
  addIngredient,
  moveCard,
  resetIngredients,
} from "../../services/actions/burger-constructor";
import {
  clearOrderNumber,
  getOrder,
} from "../../services/actions/order-details";
import { useDrop } from "react-dnd";
import { useCallback, useMemo } from "react";
import { ConstructorIngredients } from "../construcor-ingredients/construcor-ingredients";
import { useNavigate, useLocation } from "react-router-dom";
import { TUser } from "../../utils/types/types";
import { TIngredient } from "../../utils/types/types";

export default function BurgerConstructor() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((store) => store.login.user) as TUser;

  const location = useLocation();

  const handleNoUser = () => {
    navigate("/login");
  };

  const moveCardHandler = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      dispatch(moveCard(dragIndex, hoverIndex));
    },
    [dispatch]
  );

  const ingredients = useAppSelector(
    (state) => (state as any).burgerConstructor.ingredientsConstructor
  ) as TIngredient[];
  const bun = useAppSelector(
    (state) => (state as any).burgerConstructor.bun
  ) as boolean | null;

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item: any) {
      dispatch(addIngredient(item));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const isBun = useMemo(() => !bun, [bun]);
  const ingredientsId = ingredients.map((ingredient) => ingredient._id);

  const openOrderModal = () => {
    dispatch(clearOrderNumber());
    dispatch(resetIngredients());
    dispatch(getOrder(ingredientsId));
    navigate("/order-modal", { state: { background: location } });
  };

  const ingredientPrice = useMemo(() => {
    return ingredients.reduce((acc, current) => {
      if (current.type === "bun") {
        return acc + current.price * 2;
      } else {
        return acc + current.price;
      }
    }, 0);
  }, [ingredients]);

  const renderCard = useCallback(
    (
      ingredient: TIngredient,
      index: number,
      type: string,
      description?: string,
      position?: "top" | "bottom" | undefined
    ) => {
      return (
        <ConstructorIngredients
          key={ingredient.id}
          ingredient={ingredient}
          index={index}
          type={type}
          description={description}
          position={position}
          moveCard={moveCardHandler}
        />
      );
    },
    [moveCardHandler]
  );

  return (
    <section
      ref={dropTarget}
      className={`${burgerConstructor.section} ${
        isHover
          ? burgerConstructor.sectionDrop
          : burgerConstructor.sectionNoDrop
      }`}
    >
      <ul className={`${burgerConstructor.shoppingCartBun}`}>
        {ingredients.map((ingredient, index) => {
          const description = "(верх)";
          const position = "top";
          return (
            ingredient.type === "bun" &&
            renderCard(
              ingredient,
              index,
              ingredient.type,
              description,
              position
            )
          );
        })}
      </ul>

      <ul
        className={`${burgerConstructor.shoppingCart} mb-2 mt-4 custom-scroll`}
      >
        {" "}
        {ingredients.map((ingredient, index) => {
          return (
            ingredient.type !== "bun" &&
            renderCard(ingredient, index, ingredient.type, undefined, undefined)
          );
        })}
      </ul>

      <ul className={`mt-2 mr-4`}>
        {ingredients.map((ingredient, index) => {
          const description = "(низ)";
          const position = "bottom";
          return (
            ingredient.type === "bun" &&
            renderCard(
              ingredient,
              index,
              ingredient.type,
              description,
              position
            )
          );
        })}
      </ul>

      <div className={`${burgerConstructor.info} mt-6 mr-4`}>
        <div className={`${burgerConstructor.price} mr-10`}>
          <p className="text text_type_digits-medium mr-2">{ingredientPrice}</p>
          <img src={priceLogo} alt="price logo" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          disabled={isBun}
          onClick={user ? openOrderModal : handleNoUser}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}
