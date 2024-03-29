import styles from "./order-details.module.css";
import checkmark from "./../../images/checkmark.svg";
import { useAppSelector } from "../../utils/hooks";

export default function OrderDetails() {
  const orderNumber = useAppSelector((state) => state.orderDetails.orderNumber);
  return (
    <div className="mt-30">
      {orderNumber !== null ? (
        <>
          <h2 className={`${styles.orderId} text text_type_digits-large`}>
            {orderNumber}
          </h2>
          <p
            className={`${styles.orderIdDescription} text text_type_main-medium mt-8`}
          >
            идентификатор заказа
          </p>
          <div className={`${styles.orderLogo} mt-15`}>
            <img src={checkmark} alt="checkmark" width="120px" height="120px" />
          </div>
          <p
            className={`${styles.orderInfo} mt-15 text text_type_main-default`}
          >
            Ваш заказ начали готовить
          </p>
          <p
            className={`${styles.orderInfo} mt-2 mb-30 text text_type_main-default text_color_inactive`}
          >
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      ) : (
        <div className={`${styles.orderWrapper}`}>
          <h2 className="text text_type_main-large">Формируем ваш заказ</h2>
          <div className={styles.loaderWrapper}>
            <span className={styles.loader}></span>
          </div>
        </div>
      )}
    </div>
  );
}
