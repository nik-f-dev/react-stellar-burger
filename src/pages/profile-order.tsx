import { useEffect } from "react";
import { Order } from "../components/order/order";
import styles from "./profile-order.module.css";
import { Link, useLocation } from "react-router-dom";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../services/actions/wsActionTypes";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import Loader from "../components/loader/loader";

export default function ProfileOrders() {
  const { orders } = useAppSelector((store) => store.ws);

  orders &&
    orders.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, payload: "withToken" });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, []);
  const location = useLocation();
  return (
    <section className={`${styles.ordersWrapper} custom-scroll`}>
      {orders ? (
        orders.map((order) => (
          <Link
            key={order._id}
            to={`/profile/orders/${order._id}`}
            state={{ background: location }}
            className={`${styles.link}`}
          >
            <Order fromProfile={true} orderData={order} />
          </Link>
        ))
      ) : (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      )}
    </section>
  );
}
