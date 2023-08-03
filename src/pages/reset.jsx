import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./reset.module.css";

export default function ResetPassword() {
  return (
    <div className={`${styles.wrapper}`}>
      <h2 className={`${styles.header} text text_type_main-medium`}>
        Восстановление пароля
      </h2>
      <Input
        type={"password"}
        placeholder={"Введите новый пароль"}
        icon={"ShowIcon"}
        name={"name"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mt-6 mb-6"
      />
      <Input
        type={"text"}
        placeholder={"Введите код из письма"}
        name={"name"}
        error={false}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mt-6 mb-6"
      />
      <div className={`${styles.LoginButton} mb-20`}>
        <Button htmlType="button" type="primary" size="medium">
          Сохранить
        </Button>
      </div>

      <div className={`${styles.buttonWrapper} mb-4`}>
        <p className={`${styles.hint} text text_type_main-default`}>
          Вспомнили пароль?
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
