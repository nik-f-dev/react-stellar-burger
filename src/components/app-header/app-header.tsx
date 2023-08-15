import { Link, NavLink } from "react-router-dom";

import styles from "./app-header.module.css";

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const inactiveStyles = `text_color_inactive`;

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.navWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItemWrapper}>
            <NavLink
              to="/"
              className={`${styles.navItem} pl-5 pr-5 pb-4 pt-4 mr-2 mt-4 mb-4`}
            >
              {({ isActive }) => (
                <>
                  <BurgerIcon type={isActive ? "primary" : "secondary"} />
                  <p
                    className={`${
                      styles.link
                    } text text_type_main-default ml-2 ${
                      isActive ? styles.active : inactiveStyles
                    }`}
                  >
                    Конструктор
                  </p>
                </>
              )}
            </NavLink>

            <NavLink
              to="/feed"
              className={`${styles.navItem} ${styles.absoluteNavItem} pl-5 pr-5 pb-4 pt-4 mr-2 mt-4 mb-4`}
            >
              {({ isActive }) => (
                <>
                  <ListIcon type={isActive ? "primary" : "secondary"} />
                  <p
                    className={`${
                      styles.link
                    } text text_type_main-default text_color_inactive ml-2 ${
                      isActive ? styles.active : inactiveStyles
                    }`}
                  >
                    Лента заказов
                  </p>
                </>
              )}
            </NavLink>
          </div>

          <Link to="/" className={styles.logo}>
            <Logo />
          </Link>

          <NavLink
            to="/profile"
            className={`${styles.navItem} pl-5 pr-5 pb-4 pt-4 mt-4 mb-4`}
          >
            {({ isActive }) => (
              <>
                <ProfileIcon type={isActive ? "primary" : "secondary"} />
                <p
                  className={`${
                    styles.link
                  } text text_type_main-default text_color_inactive ml-2 ${
                    isActive ? styles.active : inactiveStyles
                  }`}
                >
                  Личный кабинет
                </p>
              </>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
