import styles from "./NewAccount.module.css";
import { SignIn } from "phosphor-react";
import { useState } from "react";
import { createUser } from "../api/user";
import { setUserOnLocalStorage } from "../lib/setUserOnLocalStorage";

function NewAccount() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    is_flamengo: false,
    watch_one_piece: false,
    is_from_sousa: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTrue = (event) => {
    const { name, checked } = event.target;

    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    createUser(formData)
      .then((response) => {
        setIsLoading(false);
        setUserOnLocalStorage(response);
        if (response.type === "CLIENT") {
          window.location.href = "/";
        }
        if (response.type === "ADMIN") {
          window.location.href = "/admin";
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  };

  return (
    <div className={styles.Forms}>
      <div className={styles.Title}>
        <SignIn size={32} /> Registre-se
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.LineItem}>
            <label id="name" htmlFor="name">
              Nome *
            </label>
            <input
              className={styles.Input}
              type="text"
              id="name"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.LineItem}>
            <label id="email" htmlFor="email">
              Email *
            </label>
            <input
              className={styles.Input}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.LineItem}>
            <label id="password" htmlFor="password">
              Senha *
            </label>
            <input
              className={styles.Input}
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.LineItem}>
            <span>Torcedor do flamengo:</span>
            <label className={styles.Switch}>
              <div className={styles.SwitchWapper}>
                <input
                  type="checkbox"
                  name="is_flamengo"
                  onChange={handleTrue}
                />
                <span className={styles.SwitchButton}></span>
              </div>
            </label>
          </div>

          <div className={styles.LineItem}>
            <span>Assiste One Piece:</span>
            <label className={styles.Switch}>
              <div className={styles.SwitchWapper}>
                <input
                  type="checkbox"
                  name="watch_one_piece"
                  onChange={handleTrue}
                />
                <span className={styles.SwitchButton}></span>
              </div>
            </label>
          </div>

          <div className={styles.LineItem}>
            <span>Nasceu em Sousa-PB:</span>
            <label className={styles.Switch}>
              <div className={styles.SwitchWapper}>
                <input
                  type="checkbox"
                  name="is_from_sousa"
                  onChange={handleTrue}
                />
                <span className={styles.SwitchButton}></span>
              </div>
            </label>
          </div>

          <div className={styles.LineButton}>
            <input
              disabled={
                isLoading ||
                (formData.email.length === 0 &&
                  formData.password.length === 0 &&
                  formData.name.length === 0)
              }
              className={styles.Send}
              type="submit"
              value="Registrar-se"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewAccount;
