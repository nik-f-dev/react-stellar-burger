import styles from "./orders-section.module.css";
import { Order } from "../order/order";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks";

export const OrdersSection = () => {
  const { orders } = useAppSelector((store) => store.ws);
  console.log(orders);
  const location = useLocation();
  return (
    <section className={styles.wrapper}>
      <h1 className={`${styles.heading} text text_type_main-large`}>
        Лента заказов
      </h1>
      <div className={`${styles.ordersWrapper} custom-scroll`}>
        {orders &&
          orders.map((order) => (
            <Link
              key={order._id}
              to={`/feed/${order._id}`}
              state={{ background: location }}
              className={styles.link}
            >
              <Order orderData={order} />
            </Link>
          ))}
      </div>
    </section>
  );
};
