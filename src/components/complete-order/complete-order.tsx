import { useAppSelector } from "../../utils/hooks";
import { TCompleteOrderProps, TIngredient } from "../../utils/types";
import { IngredientPicture } from "../ingredient-picture/ingredient-picture";
import styles from "./complete-order.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

const today = new Date();
const modalStyles = `${styles.orderModalWrapper}`;

export const CompleteOrder = ({ isModal }: TCompleteOrderProps) => {
  const ingredients = useAppSelector(
    (state) => (state as any).burgerIngredients.ingredients
  ) as TIngredient[];
  return (
    <div className={`${isModal ? modalStyles : styles.orderWrapper}`}>
      <p
        className={`${
          isModal ? styles.oderModalNumber : styles.oderNumber
        } text text_type_digits-default mb-10`}
      >
        #034533
      </p>
      <p className={`${styles.text} mb-3 text text_type_main-medium`}>
        Black Hole Singularity острый бургер
      </p>
      <p className={`${styles.status} mb-15 text text_type_main-default`}>
        Выполнен
      </p>
      <p className={`${styles.text} mb-6 text text_type_main-medium`}>
        Состав:
      </p>
      <div className={`${styles.ingredientsWraper} mb-10 custom-scroll`}>
        {ingredients.slice(0, 6).map((ingredient, index) => {
          return (
            <div className={`${styles.ingredient}`}>
              <div className={`${styles.nameWrapper}`}>
                <IngredientPicture index={index} ingredient={ingredient} />
                <p
                  className={`${styles.ingredientName} ml-4 text text_type_main-default`}
                >
                  Флюоресцентная булка R2-D3
                </p>
              </div>
              <div className={`${styles.priceWrapper}`}>
                <p className={`${styles.price} text text_type_digits-default`}>
                  2 x 20
                </p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          );
        })}
      </div>
      <div className={`${styles.bottomWrapper}`}>
        <div
          className={`${styles.dateWrapper} text text_type_main-default text_color_inactive`}
        >
          <FormattedDate
            className={`text text_type_main-default text_color_inactive mr-2`}
            date={today}
          />
          <p className={`text text_type_main-default text_color_inactive`}>
            i-GMT+3
          </p>
        </div>
        <div className={`${styles.priceWrapper}`}>
          <p className={`${styles.price} text text_type_digits-default`}>510</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
