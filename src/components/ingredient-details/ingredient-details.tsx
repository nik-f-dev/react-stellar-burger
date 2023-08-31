import { useEffect } from "react";
import ingredientModule from "./ingredient-details.module.css";
import { clearIngredient } from "../../services/actions/ingredient-details";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../loader/loader";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

const modalWrapper = `${ingredientModule.ingredientWrapper} ${ingredientModule.modalIngredientWrapper}`;

export default function IngredientDetails() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const ingredients = useAppSelector(
    (state) => state.burgerIngredients.ingredients
  );

  const { id } = useParams();

  const isModal = location.state;
  const ingredient = ingredients.find((elem) => elem._id === id);

  useEffect(() => {
    return () => {
      dispatch(clearIngredient());
    };
  }, [dispatch]);

  return ingredient ? (
    <div
      className={`${
        isModal ? modalWrapper : ingredientModule.ingredientWrapper
      }`}
    >
      <h2
        className={`${ingredientModule.heading} mt-10 text text_type_main-large`}
      >
        Детали ингредиента
      </h2>
      <div className={`${ingredientModule.ingredientImg} mr-5 ml-5`}>
        <img src={ingredient.image_large} alt={ingredient.name} />
      </div>
      <h2
        className={`${ingredientModule.ingredientName} text text_type_main-medium mt-3`}
      >
        {ingredient.name}
      </h2>
      <ul className={`${ingredientModule.ingredientCalories} mt-7 mb-15`}>
        <li className={ingredientModule.wrapper}>
          <p
            className={`${ingredientModule.text} text text_type_main-default text_color_inactive mt-1`}
          >
            Калории, ккал
          </p>
          <p
            className={`${ingredientModule.text} text text_type_digits-default text_color_inactive mt-2`}
          >
            {ingredient.calories}
          </p>
        </li>
        <li className={ingredientModule.wrapper}>
          <p
            className={`${ingredientModule.text} text text_type_main-default text_color_inactive mt-1`}
          >
            Белки, г
          </p>
          <p
            className={`${ingredientModule.text} text text_type_digits-default text_color_inactive mt-2`}
          >
            {ingredient.proteins}
          </p>
        </li>
        <li className={ingredientModule.wrapper}>
          <p
            className={`${ingredientModule.text} text text_type_main-default text_color_inactive mt-1`}
          >
            Жиры, г
          </p>
          <p
            className={`${ingredientModule.text} text text_type_digits-default text_color_inactive mt-2`}
          >
            {ingredient.fat}
          </p>
        </li>
        <li className={ingredientModule.wrapper}>
          <p
            className={`${ingredientModule.text} text text_type_main-default text_color_inactive mt-1`}
          >
            Углеводы, г
          </p>
          <p
            className={`${ingredientModule.text} text text_type_digits-default text_color_inactive mt-2`}
          >
            {ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  ) : (
    <Loader />
  );
}
