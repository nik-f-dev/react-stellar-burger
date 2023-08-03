import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import styles from "./profile-layout.module.css";

const styleActive = `${styles.link} ${styles.active} text text_type_main-medium`;
const styleInactive = `${styles.link} text text_type_main-medium text_color_inactive`;

export default function ProfileLayout() {
  const location = useLocation();

  return (
    <div className={`${styles.wrapper}`}>
      <nav className={`${styles.nav} mr-15 ml-6`}>
        <NavLink
          className={
            location.pathname === "/profile" ? styleActive : styleInactive
          }
          to="/profile"
        >
          Профиль
        </NavLink>
        <NavLink
          className={
            location.pathname === "/profile/orders"
              ? styleActive
              : styleInactive
          }
          to="/profile/orders"
        >
          История заказов
        </NavLink>
        <NavLink
          className={location.pathname === "/" ? styleActive : styleInactive}
          to="/"
        >
          Выход
        </NavLink>
        <p
          className={`${styles.description} text text_type_main-default mt-20`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <Outlet />
    </div>
  );
}
