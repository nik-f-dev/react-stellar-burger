import { useAppSelector } from "../../utils/hooks";
import styles from "./stats.module.css";

export const Stats = () => {
  const { orders, total, totalToday } = useAppSelector((store) => store.ws);
  const readyOrder = orders?.filter((order) => order.status === "done");
  const notReadyOrder = orders?.filter((order) => order.status !== "done");
  return (
    <section className={`${styles.statsWrapper}`}>
      <div className={`${styles.statusWrapper}  mb-15`}>
        <div className={`${styles.status} mr-9`}>
          <p className={`${styles.statusHeading} text text_type_main-medium`}>
            Готовы:
          </p>
          <ul className={`${styles.ordersList} custom-scroll`}>
            {readyOrder?.map((order, index) => (
              <li
                key={index}
                className={`${styles.orderNumber} ${styles.orderNumberReady} text text_type_digits-default`}
              >
                {order.number}
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.status}`}>
          <p className={`${styles.statusHeading} text text_type_main-medium`}>
            В работе:
          </p>
          <ul className={`${styles.ordersList} custom-scroll`}>
            {notReadyOrder?.map((order, index) => (
              <li
                key={index}
                className={`${styles.orderNumber} text text_type_digits-default`}
              >
                {order.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={`${styles.heading}  text text_type_main-medium`}>
        Выполнено за все время:
      </p>
      <p className={`${styles.headingNumber} text text_type_digits-large`}>
        {total}
      </p>
      <p className={`${styles.heading} text text_type_main-medium`}>
        Выполнено за сегодня:
      </p>
      <p className={`${styles.headingNumber} text text_type_digits-large`}>
        {totalToday}
      </p>
    </section>
  );
};
