import React from "react";
import styles from "./order-tape.module.css";
import Loader from "../components/loader/loader";
import { OrdersSection } from "../components/orders-section/orders-section";
import { Stats } from "../components/stats-section/stats";

export default function OrderTape() {
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        {/* <div className={styles.loaderWrapper}>
          <Loader />
        </div> */}
        <OrdersSection />
        <Stats />
      </main>
    </div>
  );
}
