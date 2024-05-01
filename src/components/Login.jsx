import styles from "./Login.module.css";
import { SignIn } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api/user";
import { setUserOnLocalStorage } from "../lib/setUserOnLocalStorage";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Dados do formulário:", JSON.stringify(formData));
    await loginUser(formData)
      .then((response) => {
        console.log(response);
        setUserOnLocalStorage(response);
        if (response.type === "ADMIN") {
          window.location.href = "/Admin";
        }

        if (response.type === "CLIENT") {
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.Forms}>
      <div className={styles.Title}>
        <SignIn size={32} /> Login
      </div>

      <div>
        <form onSubmit={handleSubmit}>
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
              value={formData.password}
              onChange={handleChange}
              placeholder="Senha"
              required
            />
          </div>

          <div className={styles.LineButton}>
            <input className={styles.Send} type="submit" value="Entrar" />
            <Link to="/NewAccount">
              <button className={styles.Register}>Registrar-se </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
