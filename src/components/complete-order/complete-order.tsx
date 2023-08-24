import { useParams } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks";
import { TCompleteOrderProps, TIngredient } from "../../utils/types/types";
import { IngredientPicture } from "../ingredient-picture/ingredient-picture";
import styles from "./complete-order.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";

const modalStyles = `${styles.orderModalWrapper}`;
const statusReadyStyles = `${styles.readyStatus}`;

export const CompleteOrder = ({ isModal }: TCompleteOrderProps) => {
  const ingredients = useAppSelector(
    (state) => state.burgerIngredients.ingredients
  );
  const orderData = useAppSelector((state) => state.ws.orders);

  const { id } = useParams();

  const order = orderData && orderData.find((elem) => elem._id === id);

  const orderStatus = order && order.status;

  function getIngredients() {
    const orderIngredients: Array<TIngredient> = [];
    order?.ingredients.forEach((order) => {
      const foundIngredient = ingredients.find(
        (ingredient) => ingredient._id === order
      );
      if (foundIngredient) {
        orderIngredients.push(foundIngredient);
      }
    });
    return orderIngredients;
  }

  const orderIngredients: Array<TIngredient> = getIngredients();

  const uniqueIngredients: Array<TIngredient> = getIngredients().reduce(
    (accumulator: Array<TIngredient>, currentValue) => {
      if (!accumulator.some((item) => item._id === currentValue._id)) {
        accumulator.push(currentValue);
      }
      return accumulator;
    },
    []
  );

  const orderPrice = orderIngredients.reduce((acc, ingredient) => {
    return acc + ingredient.price;
  }, 0);

  const orderDate = order && order.createdAt;

  return (
    <div className={`${isModal ? modalStyles : styles.orderWrapper}`}>
      <p
        className={`${
          isModal ? styles.oderModalNumber : styles.oderNumber
        } text text_type_digits-default mb-10`}
      >
        {order && `#${order.number}`}
      </p>
      <p className={`${styles.text} mb-3 text text_type_main-medium`}>
        {order && order.name}
      </p>
      <p
        className={`${
          orderStatus === "done" && statusReadyStyles
        } mb-15 text text_type_main-default`}
      >
        {(orderStatus === "done" && "Выполнен") || "Готовится"}
      </p>
      <p className={`${styles.text} mb-6 text text_type_main-medium`}>
        Состав:
      </p>
      <div className={`${styles.ingredientsWraper} mb-10 custom-scroll`}>
        {uniqueIngredients.map((ingredient, index) => {
          let ingredientTotal = 0;
          let modalIngredient: TIngredient | undefined = orderIngredients.find(
            (value) => value === ingredient
          );
          orderIngredients.map((value) => {
            if (value === ingredient && value.type !== "bun") {
              ingredientTotal++;
            } else if (value === ingredient && value.type === "bun") {
              ingredientTotal += 2;
            }
          });
          return (
            <div key={index} className={`${styles.ingredient}`}>
              <div className={`${styles.nameWrapper}`}>
                <IngredientPicture index={index} ingredient={ingredient} />
                <p
                  className={`${styles.ingredientName} ml-4 text text_type_main-default`}
                >
                  {ingredient.name}
                </p>
              </div>
              <div className={`${styles.priceWrapper}`}>
                <p className={`${styles.price} text text_type_digits-default`}>
                  {ingredientTotal} x {modalIngredient?.price}
                </p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          );
        })}
      </div>
      <div className={`${styles.bottomWrapper}`}>
        {orderDate && (
          <div
            className={`${styles.dateWrapper} text text_type_main-default text_color_inactive`}
          >
            <FormattedDate
              className={`text text_type_main-default text_color_inactive mr-2`}
              date={new Date(orderDate)}
            />
            <p className={`text text_type_main-default text_color_inactive`}>
              i-GMT+3
            </p>
          </div>
        )}
        <div className={`${styles.priceWrapper}`}>
          <p className={`${styles.price} text text_type_digits-default`}>
            {orderPrice}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
