import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order.module.css";
import { useAppSelector } from "../../utils/hooks";
import { TIngredient, TOrderProps } from "../../utils/types/types";
import { IngredientPicture } from "../ingredient-picture/ingredient-picture";

const orderWrapperProfile = `${styles.orderWrapperFromProfile} mb-6 mr-2`;
const orderWrapper = `${styles.orderWrapper} mb-4`;

export const Order = ({ fromProfile, orderData }: TOrderProps) => {
  const ingredients = useAppSelector(
    (state) => state.burgerIngredients.ingredients
  );

  const orderIngredients: Array<TIngredient> = [];

  orderData?.ingredients.forEach((ingredientId) => {
    const foundIngredient = ingredients.find(
      (ingredient) => ingredient._id === ingredientId
    );
    if (foundIngredient) {
      orderIngredients.push(foundIngredient);
    }
  });

  const uniqueOrderIngredients: Array<TIngredient> =
    orderData?.ingredients.reduce(
      (accumulator: TIngredient[], ingredientId: string) => {
        const uniqueIngredient = ingredients.find(
          (ingredient) => ingredient._id === ingredientId
        );
        if (
          uniqueIngredient &&
          !accumulator.some((item) => item._id === uniqueIngredient._id)
        ) {
          accumulator.push(uniqueIngredient);
        }
        return accumulator;
      },
      []
    ) || [];

  const orderPrice = orderIngredients.reduce((acc, ingredient) => {
    return acc + ingredient.price;
  }, 0);

  const imageLength = `+${orderIngredients.length - 6}`;
  const status = orderData?.status;
  const orderDate = orderData && orderData.createdAt;

  return (
    <div className={`${fromProfile ? orderWrapperProfile : orderWrapper}`}>
      <div className={`${styles.idWrapper} p-6`}>
        <p className={`text text_type_digits-default`}>
          {orderData && `#${orderData.number}`}
        </p>
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
      </div>
      <p className={`${styles.orderName} pl-6 pr-6 text text_type_main-medium`}>
        {orderData && orderData.name}
      </p>
      {fromProfile && (
        <p
          className={`${styles.orderName} pl-6 pr-6 pt-2 text text_type_main-default`}
        >
          {status}
        </p>
      )}
      <div className={`${styles.bottomWrapper} p-6`}>
        <div className={`${styles.imagesWrapper}`}>
          {uniqueOrderIngredients.slice(0, 6).map((ingredient, index) => {
            if (index === 5 && orderIngredients.length > 6) {
              return (
                <IngredientPicture
                  key={index}
                  index={index}
                  ingredient={ingredient}
                  pictureWithNumber={true}
                  numberOfPhotos={imageLength}
                />
              );
            } else {
              return (
                <IngredientPicture
                  index={index}
                  ingredient={ingredient}
                  key={index}
                />
              );
            }
          })}
        </div>
        <div className={`${styles.priceWrapper}`}>
          <p className={`text text_type_digits-default mr-2`}>{orderPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
