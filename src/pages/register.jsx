import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./register.module.css";

export default function RegisterPage() {
  return (
    <div className={`${styles.wrapper}`}>
      <h2 className={`${styles.header} text text_type_main-medium`}>
        Регистрация
      </h2>
      <Input
        type={"text"}
        placeholder={"Имя"}
        name={"name"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mb-6 mt-6"
      />
      <Input
        type={"email"}
        placeholder={"E-mail"}
        name={"name"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mb-6"
      />
      <Input
        type={"password"}
        placeholder={"Пароль"}
        icon={"ShowIcon"}
        name={"name"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mb-6"
      />
      <div className={`${styles.LoginButton} mb-20`}>
        <Button htmlType="button" type="primary" size="medium">
          Зарегистрироваться
        </Button>
      </div>

      <div className={`${styles.buttonWrapper} mb-4`}>
        <p className={`${styles.hint} text text_type_main-default`}>
          Уже зарегистрированы?
        </p>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={styles.button}
        >
          Войти
        </Button>
      </div>
    </div>
  );
}
