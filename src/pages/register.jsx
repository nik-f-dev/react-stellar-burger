import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./register.module.css";

import { useSelector, useDispatch } from "react-redux";
import { getForm, register, showPassword } from "../services/actions/register";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const firstInput = useRef();
  const passwordRef = useRef();
  const form = useSelector((state) => state.register);

  const inputFilled = form.email && form.password && form.name;

  useEffect(() => {
    firstInput.current.focus();
  }, []);

  const onChange = (e) => {
    dispatch(getForm(e));
  };

  const onIconClick = () => {
    dispatch(showPassword());
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(register(form.name, form.email, form.password));
  };
  return (
    <div className={`${styles.wrapper}`}>
      <h2 className={`${styles.header} text text_type_main-medium`}>
        Регистрация
      </h2>
      <form onSubmit={submit}>
        <Input
          ref={firstInput}
          type={"text"}
          placeholder={"Имя"}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6 mt-6"
          onChange={onChange}
          value={form.name}
          required
        />
        <Input
          type={"email"}
          placeholder={"E-mail"}
          name={"email"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
          onChange={onChange}
          value={form.email}
          required
        />
        <Input
          type={!form.showPassword ? "text" : "password"}
          placeholder={"Пароль"}
          ref={passwordRef}
          onIconClick={onIconClick}
          icon={!form.showPassword ? "HideIcon" : "ShowIcon"}
          name={"password"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
          onChange={onChange}
          value={form.password}
          required
        />
        <div className={`${styles.LoginButton} mb-20`}>
          <Button
            htmlType="submit"
            type="primary"
            size="medium"
            disabled={!inputFilled}
          >
            Зарегистрироваться
          </Button>
        </div>
      </form>

      <div className={`${styles.buttonWrapper} mb-4`}>
        <p className={`${styles.hint} text text_type_main-default`}>
          Уже зарегистрированы?
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
