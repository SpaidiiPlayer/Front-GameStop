import styles from "./Register.module.css";
import { PlusCircle } from "phosphor-react";
import React, { useState } from "react";
import { createCartridge } from "../api/cartridges";

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    conservation_status: "GOOD",
    console: "",
    release_year: "",
    cover_url: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createCartridge(formData).then((result) => {
      if (result.status) {
        setErrorMessage(result.message);
        return;
      }
      window?.location.replace("/");
      setFormData({
        name: "",
        conservation_status: "",
        console: "",
        release_year: "",
        cover_url: "",
      });
      return;
    });
  };

  return (
    <div className={styles.Forms}>
      <div className={styles.Title}>
        <PlusCircle size={32} /> Cadastro de Produtos
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.LineItem}>
            <label id="name" htmlFor="Name">
              Nome *
            </label>
            <input
              className={styles.Input}
              type="text"
              id="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.LineItem}>
            <label id="conservation_status" htmlFor="Conservation">
              Estado de Conservação *
            </label>
            <select
              className={styles.select}
              name="conservation_status"
              onChange={handleChange}
            >
              <option className={styles.input} value="GOOD">
                Bom
              </option>
              <option className={styles.input} value="OK">
                Ok
              </option>
              <option className={styles.input} value="BAD">
                Ruim
              </option>
            </select>
          </div>

          <div className={styles.LineItem}>
            <label id="console" htmlFor="Console">
              Console *
            </label>
            <input
              className={styles.Input}
              type="text"
              id="Console"
              name="console"
              value={formData.console}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.LineItem}>
            <label id="release_year" htmlFor="Year">
              Ano de lançamento *
            </label>
            <input
              className={styles.Input}
              type="number"
              placeholder="1977"
              id="Year"
              name="release_year"
              value={formData.release_year}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.LineItem}>
            <label id="cover_url" htmlFor="URL">
              URL da imagem
            </label>
            <input
              className={styles.Input}
              type="text"
              id="URL"
              name="cover_url"
              value={formData.cover_url}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>
            {errorMessage.length > 0 && `Error: ${errorMessage}`}
          </p>
          <div className={styles.LineButton}>
            <input
              disabled={isLoading}
              className={styles.Send}
              type="submit"
              value="Finalizar Cadastro"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
