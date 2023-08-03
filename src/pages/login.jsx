import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={`${styles.wrapper}`}>
      <h2 className={`${styles.header} text text_type_main-medium`}>Вход</h2>
      <Input
        type={"email"}
        placeholder={"E-mail"}
        name={"name"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mb-6 mt-6"
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
          Войти
        </Button>
      </div>

      <div className={`${styles.buttonWrapper} mb-4`}>
        <p className={`${styles.hint} text text_type_main-default`}>
          Вы — новый пользователь?
        </p>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={styles.button}
        >
          Зарегистрироваться
        </Button>
      </div>
      <div className={styles.buttonWrapper}>
        <p className={`${styles.hint} text text_type_main-default`}>
          Забыли пароль?
        </p>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={styles.button}
        >
          Восстановить пароль
        </Button>
      </div>
    </div>
  );
}
