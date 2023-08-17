import { ChangeEvent, useEffect, useRef } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./profile.module.css";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import {
  changeUser,
  changeProfileValue,
  getPreviousUser,
  getUserDate,
} from "../services/actions/login";

export default function Profile() {
  const dispatch = useAppDispatch();
  const nameInputRef = useRef<HTMLInputElement>(null);
  const loginInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeProfileValue(e));
  };

  useEffect(() => {
    dispatch(getUserDate());
  }, []);

  const handleSave = () => {
    dispatch(
      changeUser(form.user?.name, form.user?.email, form.user?.password)
    );
  };

  const handleReset = () => {
    dispatch(getPreviousUser());
  };

  const form = useAppSelector((store) => store.login);

  return (
    <form>
      <Input
        type={"text"}
        placeholder={"Имя"}
        icon={"EditIcon"}
        value={form.user?.name || ""}
        name={"name"}
        error={false}
        ref={nameInputRef}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mb-6"
        onChange={onChange}
      />
      <Input
        type={"email"}
        placeholder={"Логин"}
        icon={"EditIcon"}
        value={form.user?.email || ""}
        name={"email"}
        error={false}
        ref={loginInputRef}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mb-6"
        onChange={onChange}
      />
      <Input
        type={"password"}
        placeholder={"Пароль"}
        icon={"EditIcon"}
        value={form.user?.password || ""}
        name={"password"}
        error={false}
        ref={passwordInputRef}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mb-6"
        onChange={onChange}
      />
      <div className={styles.buttonWrapper}>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={styles.button}
          onClick={handleReset}
        >
          Отмена
        </Button>
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          extraClass="ml-2"
          onClick={handleSave}
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
}
