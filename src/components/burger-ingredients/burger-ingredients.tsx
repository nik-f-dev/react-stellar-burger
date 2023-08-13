import burgerIngredients from "./burger-ingredients.module.css";
import { useRef } from "react";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import IntersectionObserver from "react-intersection-observer";
import { getTab } from "../../services/actions/tab";
import {
  enableIntersection,
  disableIntersection,
} from "../../services/actions/burger-ingredients";
import { TIngredient } from "../../utils/types";

export default function BurgerIngredients() {
  const dispatch = useDispatch();
  const intersection = useSelector(
    (store) => (store as any).burgerIngredients.handleIntersecion
  ) as boolean;
  const ingredients = useSelector(
    (state) => (state as any).burgerIngredients.ingredients
  ) as TIngredient[];
  const tab = useSelector((state) => (state as any).tab.currentTab) as string;

  const buns = ingredients.filter((item) => item.type === "bun");
  const main = ingredients.filter((item) => item.type === "main");
  const sauces = ingredients.filter((item) => item.type === "sauce");

  const bunRef = useRef<HTMLDivElement>(null);
  const sauceRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleIntersection = (
    inView: boolean,
    entry: IntersectionObserverEntry
  ) => {
    if (intersection && inView) {
      dispatch(getTab(entry.target.id));
    }
  };

  const handleNavigationClick = (value: string) => {
    dispatch(getTab(value));
    dispatch(disableIntersection());
    switch (value) {
      case "bun":
        if (bunRef.current) {
          bunRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "sauce":
        if (sauceRef.current) {
          sauceRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "main":
        if (mainRef.current) {
          mainRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        break;
    }
    setTimeout(() => {
      dispatch(enableIntersection());
    }, 350);
  };

  return (
    <section className={burgerIngredients.section}>
      <h1
        className={`${burgerIngredients.heading} mt-10 mb-5 text text_type_main-large`}
      >
        Соберите бургер
      </h1>
      <div className={`${burgerIngredients.tabWrapper} mb-10`}>
        <Tab
          value="bun"
          active={tab === "bun"}
          onClick={() => handleNavigationClick("bun")}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={tab === "sauce"}
          onClick={() => handleNavigationClick("sauce")}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={tab === "main"}
          onClick={() => handleNavigationClick("main")}
        >
          Начинки
        </Tab>
      </div>
      <div className={`${burgerIngredients.ingredientsWrapper} custom-scroll`}>
        <IntersectionObserver
          id="bun"
          onChange={handleIntersection}
          threshold={0.9}
        >
          <div ref={bunRef}>
            <h2
              className={`${burgerIngredients.heading} mb-6 text text_type_main-medium`}
            >
              Булки
            </h2>
            <ul className={burgerIngredients.ingredientsContainer}>
              {buns.map((ingredient) => (
                <BurgerIngredient
                  key={ingredient._id}
                  ingredient={ingredient}
                />
              ))}
            </ul>
          </div>
        </IntersectionObserver>
        <IntersectionObserver
          id="sauce"
          onChange={handleIntersection}
          threshold={0.8}
        >
          <div ref={sauceRef}>
            <h2
              className={`${burgerIngredients.heading} mt-2 mb-5 text text_type_main-medium`}
            >
              Соусы
            </h2>
            <ul className={burgerIngredients.ingredientsContainer}>
              {sauces.map((ingredient) => (
                <BurgerIngredient
                  key={ingredient._id}
                  ingredient={ingredient}
                />
              ))}
            </ul>
          </div>
        </IntersectionObserver>
        <IntersectionObserver
          id="main"
          onChange={handleIntersection}
          threshold={0.35}
        >
          <div ref={mainRef}>
            <h2
              className={`${burgerIngredients.heading} mt-2 mb-6 text text_type_main-medium`}
            >
              Начинки
            </h2>
            <ul className={burgerIngredients.ingredientsContainer}>
              {main.map((ingredient) => (
                <BurgerIngredient
                  key={ingredient._id}
                  ingredient={ingredient}
                />
              ))}
            </ul>
          </div>
        </IntersectionObserver>
      </div>
    </section>
  );
}
