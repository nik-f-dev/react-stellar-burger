import { Link, NavLink } from "react-router-dom";

import appHeader from "./app-header.module.css";

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function AppHeader() {
  return (
    <header className={appHeader.header}>
      <div className={appHeader.navWrapper}>
        <nav className={appHeader.nav}>
          <div className={appHeader.navItemWrapper}>
            <NavLink
              to="/"
              className={`${appHeader.navItem} pl-5 pr-5 pb-4 pt-4 mr-2 mt-4 mb-4`}
            >
              {({ isActive }) => (
                <>
                  <BurgerIcon type={isActive ? "primary" : "secondary"} />
                  <p
                    className={`${
                      appHeader.link
                    } text text_type_main-default ml-2 ${
                      isActive ? appHeader.active : "text_color_inactive"
                    }`}
                  >
                    Конструктор
                  </p>
                </>
              )}
            </NavLink>

            <NavLink
              to="/order-tape"
              className={`${appHeader.navItem} ${appHeader.absoluteNavItem} pl-5 pr-5 pb-4 pt-4 mr-2 mt-4 mb-4`}
            >
              {({ isActive }) => (
                <>
                  <ListIcon type={isActive ? "primary" : "secondary"} />
                  <p
                    className={`${
                      appHeader.link
                    } text text_type_main-default text_color_inactive ml-2 ${
                      isActive ? appHeader.active : "text_color_inactive"
                    }`}
                  >
                    Лента заказов
                  </p>
                </>
              )}
            </NavLink>
          </div>

          <Link to="/" className={appHeader.logo}>
            <Logo />
          </Link>

          <NavLink
            to="/profile"
            className={`${appHeader.navItem} pl-5 pr-5 pb-4 pt-4 mt-4 mb-4`}
          >
            {({ isActive }) => (
              <>
                <ProfileIcon type={isActive ? "primary" : "secondary"} />
                <p
                  className={`${
                    appHeader.link
                  } text text_type_main-default text_color_inactive ml-2 ${
                    isActive ? appHeader.active : "text_color_inactive"
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
