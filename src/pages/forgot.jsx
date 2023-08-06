import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./forgot.module.css";

import { Link, Navigate } from "react-router-dom";
import { getInput, getSucessChange } from "../services/actions/forgot";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const form = useSelector((store) => store.forgot);

  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const onChange = (e) => {
    dispatch(getInput(e));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(getSucessChange(form.email));
  };

  if (form.isForgotSuccess) {
    return <Navigate to="/reset-password" />;
  }
  return (
    <div className={`${styles.wrapper}`}>
      <h2 className={`${styles.header} text text_type_main-medium`}>
        Восстановление пароля
      </h2>
      <form onSubmit={submit}>
        <Input
          ref={emailRef}
          type={"email"}
          placeholder={"Укажите E-mail"}
          name={"email"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mt-6 mb-6"
          onChange={onChange}
          value={form.email}
          required
        />
        <div className={`${styles.LoginButton} mb-20`}>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            disabled={!form.email}
          >
            Восстановить
          </Button>
        </div>
      </form>

      <div className={`${styles.buttonWrapper} mb-4`}>
        <p className={`${styles.hint} text text_type_main-default`}>
          Вспомнили пароль?
        </p>
        <Link to="/login">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={styles.button}
          >
            Войти
          </Button>
        </Link>
      </div>
    </div>
  );
}
