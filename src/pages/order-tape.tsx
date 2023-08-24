import styles from "./order-tape.module.css";
import { OrdersSection } from "../components/orders-section/orders-section";
import { Stats } from "../components/stats-section/stats";
import { useEffect } from "react";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
  clearOrders,
} from "../services/actions/wsActionTypes";
import { useAppDispatch } from "../utils/hooks";

export default function OrderTape() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
      dispatch(clearOrders());
    };
  }, []);
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <OrdersSection />
        <Stats />
      </main>
    </div>
  );
}
