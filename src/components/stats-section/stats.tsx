import styles from "./stats.module.css";

export const Stats = () => {
  return (
    <section className={`${styles.statsWrapper}`}>
      <div className={`${styles.statusWrapper}  mb-15`}>
        <div className={`${styles.status} mr-9`}>
          <p className={`${styles.statusHeading} text text_type_main-medium`}>
            Готовы:
          </p>
          <ul className={`${styles.ordersList} custom-scroll`}>
            <li
              className={`${styles.orderNumber} ${styles.orderNumberReady} text text_type_digits-default`}
            >
              034533
            </li>
            <li
              className={`${styles.orderNumber} ${styles.orderNumberReady} text text_type_digits-default`}
            >
              034533
            </li>
            <li
              className={`${styles.orderNumber} ${styles.orderNumberReady} text text_type_digits-default`}
            >
              034533
            </li>
            <li
              className={`${styles.orderNumber} ${styles.orderNumberReady} text text_type_digits-default`}
            >
              034533
            </li>
            <li
              className={`${styles.orderNumber} ${styles.orderNumberReady} text text_type_digits-default`}
            >
              034533
            </li>
          </ul>
        </div>
        <div className={`${styles.status}`}>
          <p className={`${styles.statusHeading} text text_type_main-medium`}>
            В работе:
          </p>
          <ul className={`${styles.ordersList} custom-scroll`}>
            <li
              className={`${styles.orderNumber} text text_type_digits-default`}
            >
              034533
            </li>
            <li
              className={`${styles.orderNumber} text text_type_digits-default`}
            >
              034533
            </li>
            <li
              className={`${styles.orderNumber} text text_type_digits-default`}
            >
              034533
            </li>
            <li
              className={`${styles.orderNumber} text text_type_digits-default`}
            >
              034533
            </li>
            <li
              className={`${styles.orderNumber} text text_type_digits-default`}
            >
              034533
            </li>
          </ul>
        </div>
      </div>
      <p className={`${styles.heading}  text text_type_main-medium`}>
        Выполнено за все время:
      </p>
      <p className={`${styles.headingNumber} text text_type_digits-large`}>
        28 752
      </p>
      <p className={`${styles.heading} text text_type_main-medium`}>
        Выполнено за сегодня:
      </p>
      <p className={`${styles.headingNumber} text text_type_digits-large`}>
        138
      </p>
    </section>
  );
};
