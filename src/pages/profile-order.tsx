import React from "react";
import { Order } from "../components/order/order";
import styles from "./profile-order.module.css";
import { Link, useLocation } from "react-router-dom";

export default function ProfileOrders() {
  const location = useLocation();
  return (
    <section className={`${styles.ordersWrapper} custom-scroll`}>
      <Link
        to="/profile/orders/:id"
        state={{ background: location }}
        className={`${styles.link}`}
      >
        <Order fromProfile={true} />
      </Link>
      <Link
        to="/profile/orders/:id"
        state={{ background: location }}
        className={`${styles.link}`}
      >
        <Order fromProfile={true} />
      </Link>
      <Link
        to="/profile/orders/:id"
        state={{ background: location }}
        className={`${styles.link}`}
      >
        <Order fromProfile={true} />
      </Link>
      <Link
        to="/profile/orders/:id"
        state={{ background: location }}
        className={`${styles.link}`}
      >
        <Order fromProfile={true} />
      </Link>
      <Link
        to="/profile/orders/:id"
        state={{ background: location }}
        className={`${styles.link}`}
      >
        <Order fromProfile={true} />
      </Link>
      <Link
        to="/profile/orders/:id"
        state={{ background: location }}
        className={`${styles.link}`}
      >
        <Order fromProfile={true} />
      </Link>
    </section>
  );
}
