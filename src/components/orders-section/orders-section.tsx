import styles from "./orders-section.module.css";
import { Order } from "../order/order";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks";
import Loader from "../loader/loader";

export const OrdersSection = () => {
  const { orders } = useAppSelector((store) => store.ws);
  orders &&
    orders.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });
  const location = useLocation();
  return (
    <section className={styles.wrapper}>
      <h1 className={`${styles.heading} text text_type_main-large`}>
        Лента заказов
      </h1>
      <div className={`${styles.ordersWrapper} custom-scroll`}>
        {orders ? (
          orders.map((order) => (
            <Link
              key={order._id}
              to={`/feed/${order._id}`}
              state={{ background: location }}
              className={styles.link}
            >
              <Order orderData={order} />
            </Link>
          ))
        ) : (
          <div className={styles.loaderWrapper}>
            <Loader />
          </div>
        )}
      </div>
    </section>
  );
};
