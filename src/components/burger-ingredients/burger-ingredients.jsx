import burgerIngredients from "./burger-ingredients.module.css";
import { useRef } from "react";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import IntersectionObserver from "react-intersection-observer";
import { getTab } from "../../services/actions/tab";

export default function BurgerIngredients() {
  const dispatch = useDispatch();

  const ingredients = useSelector(
    (state) => state.burgerIngredients.ingredients
  );
  const tab = useSelector((state) => state.tab.currentTab);

  const buns = ingredients.filter((item) => item.type === "bun");
  const main = ingredients.filter((item) => item.type === "main");
  const sauces = ingredients.filter((item) => item.type === "sauce");

  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const handleIntersection = (inView, entry) => {
    if (inView) {
      dispatch(getTab(entry.target.id));
    }
  };

  const handleNavigationClick = (value) => {
    dispatch(getTab(value));
    switch (value) {
      case "bun":
        bunRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "sauce":
        sauceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "main":
        mainRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
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
