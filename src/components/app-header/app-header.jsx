import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import appHeader from "./app-header.module.css";

export default function AppHeader() {
  return (
    <header className={appHeader.header}>
      <div className={appHeader.navWrapper}>
        <nav className={appHeader.nav}>
          <div className={appHeader.navItemWrapper}>
            <div
              className={`${appHeader.navItem} pl-5 pr-5 pb-4 pt-4 mr-2 mt-4 mb-4`}
            >
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default ml-2">Конструктор</p>
            </div>

            <div
              className={`${appHeader.navItem} ${appHeader.absoluteNavItem} pl-5 pr-5 pb-4 pt-4 mr-2 mt-4 mb-4`}
            >
              <ListIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive ml-2">
                Лента заказов
              </p>
            </div>
          </div>
          <div className={appHeader.logo}>
            <Logo />
          </div>

          <div
            className={`${appHeader.navItem} ${appHeader.rightNavItem} pl-5 pr-5 pb-4 pt-4 mt-4 mb-4`}
          >
            <ProfileIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive ml-2">
              Личный кабинет
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}
