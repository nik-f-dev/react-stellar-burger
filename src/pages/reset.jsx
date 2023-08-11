import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./reset.module.css";

import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getInput,
  showPassword,
  getNewPassword,
} from "../services/actions/reset";
import { useEffect, useRef } from "react";

export default function ResetPassword() {
  const dispatch = useDispatch();
  const form = useSelector((store) => store.reset);

  const inputFilled = form.code && form.password;

  const passwordRef = useRef();

  useEffect(() => {
    passwordRef.current.focus();
  }, []);

  const onChange = (e) => {
    dispatch(getInput(e));
  };

  const onIconClick = () => {
    dispatch(showPassword());
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(getNewPassword(form.password, form.code));
  };

  if (form.isResetSuccess) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={`${styles.wrapper}`}>
      <h2 className={`${styles.header} text text_type_main-medium`}>
        Восстановление пароля
      </h2>
      <form onSubmit={submit}>
        <Input
          ref={passwordRef}
          type={!form.showPassword ? "password" : "text"}
          placeholder={"Введите новый пароль"}
          icon={!form.showPassword ? "ShowIcon" : "HideIcon"}
          name={"password"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mt-6 mb-6"
          onChange={onChange}
          value={form.password}
          onIconClick={onIconClick}
          required
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          name={"code"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mt-6 mb-6"
          onChange={onChange}
          value={form.code}
          required
        />
        <div className={`${styles.LoginButton} mb-20`}>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            disabled={!inputFilled}
          >
            Сохранить
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
