import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./signInPage.module.scss";

const SignInPage = ({ setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async ({ username }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${username}`
      );
      const data = await response.json();

      if (data.length) {
        setUser(data[0]);
        navigate("/");
      } else {
        alert("Пользователь не найден");
      }
    } catch (e) {
      alert("Произошла ошибка при подключении к серверу");
    }
  };

  const onError = (errors) => {
    if (errors.username) {
      alert(errors.username.message);
    }
  };

  return (
    <div className={styles.signInContainer}>
      <div className={styles.formContainer}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <input
            {...register("username", { required: "Введите имя пользователя" })}
            className={styles.usernameInput}
            placeholder="Username"
          />
          <button className={styles.submitButton} type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
