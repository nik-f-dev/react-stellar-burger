import styles from "./orders-section.module.css";
import { Order } from "../order/order";
import { Link, useLocation } from "react-router-dom";

export const OrdersSection = () => {
  const location = useLocation();
  return (
    <section className={styles.wrapper}>
      <h1 className={`${styles.heading} text text_type_main-large`}>
        Лента заказов
      </h1>
      <div className={`${styles.ordersWrapper} custom-scroll`}>
        <Link
          to="/feed/:id"
          state={{ background: location }}
          className={`${styles.link}`}
        >
          <Order />
        </Link>
        <Link
          to="/feed/:id"
          state={{ background: location }}
          className={`${styles.link}`}
        >
          <Order />
        </Link>
        <Link
          to="/feed/:id"
          state={{ background: location }}
          className={`${styles.link}`}
        >
          <Order />
        </Link>
      </div>
    </section>
  );
};
