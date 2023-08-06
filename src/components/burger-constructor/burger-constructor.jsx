import burgerConstructor from "./burger-constructor.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import priceLogo from "./../../images/price-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  moveCard,
} from "../../services/actions/burger-constructor";
import { openModal } from "../../services/actions/modal";
import {
  clearOrderNumber,
  getOrder,
} from "../../services/actions/order-details";
import { useDrop } from "react-dnd";
import { useCallback, useMemo } from "react";
import { ConstructorIngredients } from "../construcor-ingredients/construcor-ingredients";
import { useNavigate } from "react-router-dom";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.login.user);

  const handleNoUser = () => {
    navigate("/register");
  };

  const moveCardHandler = (dragIndex, hoverIndex) => {
    dispatch(moveCard(dragIndex, hoverIndex));
  };

  const { ingredients, bun } = useSelector((state) => ({
    ingredients: state.burgerConstructor.ingredientsConstructor,
    bun: state.burgerConstructor.bun,
  }));

  const [{ isHover }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(item) {
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
    dispatch(getOrder(ingredientsId));
    dispatch(openModal("order"));
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
    (ingredient, index, type, description, position) => {
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
            renderCard(ingredient, index, ingredient.type)
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
