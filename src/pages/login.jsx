import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./login.module.css";

import { useSelector, useDispatch } from "react-redux";
import { getInputValue, login, showPassword } from "../services/actions/login";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function LoginPage() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.login);

  const inputFilled = form.email && form.password;

  const emailInput = useRef();

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  const onChange = (e) => {
    dispatch(getInputValue(e));
  };

  const onIconClick = () => {
    dispatch(showPassword());
    console.log(form.showPassword);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(login(form.email, form.password));
  };
  return (
    <div className={`${styles.wrapper}`}>
      <h2 className={`${styles.header} text text_type_main-medium`}>Вход</h2>
      <form onSubmit={submit}>
        <Input
          type={"email"}
          ref={emailInput}
          placeholder={"E-mail"}
          name={"email"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6 mt-6"
          onChange={onChange}
          value={form.email}
          required
        />
        <Input
          type={!form.showPassword ? "text" : "password"}
          placeholder={"Пароль"}
          icon={!form.showPassword ? "HideIcon" : "ShowIcon"}
          name={"password"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
          onChange={onChange}
          value={form.password}
          onIconClick={onIconClick}
          required
        />
        <div className={`${styles.LoginButton} mb-20`}>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            disabled={!inputFilled}
          >
            Войти
          </Button>
        </div>
      </form>

      <div className={`${styles.buttonWrapper} mb-4`}>
        <p className={`${styles.hint} text text_type_main-default`}>
          Вы — новый пользователь?
        </p>
        <Link to="/register">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={styles.button}
          >
            Зарегистрироваться
          </Button>
        </Link>
      </div>
      <div className={styles.buttonWrapper}>
        <p className={`${styles.hint} text text_type_main-default`}>
          Забыли пароль?
        </p>
        <Link to="/forgot-password">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={styles.button}
          >
            Восстановить пароль
          </Button>
        </Link>
      </div>
    </div>
  );
}
