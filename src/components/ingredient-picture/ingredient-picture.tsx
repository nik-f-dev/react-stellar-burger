import styles from "./ingredient-picture.module.css";
import { TIngredientPictureProps } from "../../utils/types/types";

export const IngredientPicture = ({
  index,
  numberOfPhotos,
  ingredient,
  pictureWithNumber,
}: TIngredientPictureProps) => {
  return (
    <div key={index} className={`${styles.imageWrapper}`}>
      {pictureWithNumber && (
        <>
          <p
            className={`${styles.orderImageNumber} text text_type_digits-default`}
          >
            {numberOfPhotos}
          </p>
          <div className={styles.opacity}></div>
        </>
      )}
      <div className={styles.imageBefore}>
        <img
          src={ingredient.image_mobile}
          width="60px"
          height="60px"
          alt={ingredient.name}
        />
      </div>
    </div>
  );
};
