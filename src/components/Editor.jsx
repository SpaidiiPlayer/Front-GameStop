import styles from "./Editor.module.css";
import { PencilSimple } from "phosphor-react";
import React, { useState } from "react";
import { updateCartridge } from "../api/cartridges";

function Editor(props) {
  const [formData, setFormData] = useState({
    name: props.location.state.dados.name,
    conservation_status: props.location.state.dados.conservation_status,
    console: props.location.state.dados.console,
    release_year: props.location.state.dados.release_year,
    cover_url: props.location.state.dados.cover_url,
  });

  console.log(formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCartridge(props.location.state.dados.id, formData)
      .then(() => {
        window.location.replace("/");
        return;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.Forms}>
      <div className={styles.Title}>
        <PencilSimple size={32} /> Editor de Produtos
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.LineItem}>
            ID: {props.location.state.dados.id}
          </div>

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
              value={formData.conservation_status}
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
              type="text"
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

          <div className={styles.LineButton}>
            <input
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

export default Editor;
