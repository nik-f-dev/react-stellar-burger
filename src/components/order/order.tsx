import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order.module.css";
import { useAppSelector } from "../../utils/hooks";
import { TIngredient, TOrderProps } from "../../utils/types/types";
import { IngredientPicture } from "../ingredient-picture/ingredient-picture";

const today = new Date();
const orderWrapperProfile = `${styles.orderWrapperFromProfile} mb-6 mr-2`;
const orderWrapper = `${styles.orderWrapper} mb-4`;

export const Order = ({ fromProfile }: TOrderProps) => {
  const ingredients = useAppSelector(
    (state) => (state as any).burgerIngredients.ingredients
  ) as TIngredient[];
  const imageLength = `+${ingredients.length - 6}`;
  return (
    <div className={`${fromProfile ? orderWrapperProfile : orderWrapper}`}>
      <div className={`${styles.idWrapper} p-6`}>
        <p className={`text text_type_digits-default`}>#034535</p>
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
      </div>
      <p className={`${styles.orderName} pl-6 pr-6 text text_type_main-medium`}>
        Death Star Starship Main бургер
      </p>
      {fromProfile && (
        <p
          className={`${styles.orderName} pl-6 pr-6 pt-2 text text_type_main-default`}
        >
          Создан
        </p>
      )}
      <div className={`${styles.bottomWrapper} p-6`}>
        <div className={`${styles.imagesWrapper}`}>
          {ingredients.slice(0, 6).map((ingredient, index) => {
            if (index === 5) {
              return (
                <IngredientPicture
                  index={index}
                  ingredient={ingredient}
                  pictureWithNumber={true}
                  numberOfPhotos={imageLength}
                />
              );
            } else {
              return (
                <IngredientPicture index={index} ingredient={ingredient} />
              );
            }
          })}
        </div>
        <div className={`${styles.priceWrapper}`}>
          <p className={`text text_type_digits-default mr-2`}>480</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
