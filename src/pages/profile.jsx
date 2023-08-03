import { useRef, useState } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./profile.module.css";

export default function Profile() {
  const [value, setValue] = useState("");
  const nameInputRef = useRef(null);
  const loginInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  return (
    <div>
      <Input
        type={"text"}
        placeholder={"Имя"}
        onChange={(e) => setValue(e.target.value)}
        icon={"EditIcon"}
        value={value}
        name={"name"}
        error={false}
        ref={nameInputRef}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mb-6"
      />
      <Input
        type={"email"}
        placeholder={"Логин"}
        onChange={(e) => setValue(e.target.value)}
        icon={"EditIcon"}
        value={value}
        name={"name"}
        error={false}
        ref={loginInputRef}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mb-6"
      />
      <Input
        type={"password"}
        placeholder={"Пароль"}
        onChange={(e) => setValue(e.target.value)}
        icon={"EditIcon"}
        value={value}
        name={"name"}
        error={false}
        ref={passwordInputRef}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mb-6"
      />
      <div className={styles.buttonWrapper}>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={styles.button}
        >
          Отмена
        </Button>
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          extraClass="ml-2"
        >
          Сохранить
        </Button>
      </div>
    </div>
  );
}
