import styles from "./Editor.module.css";
import { PencilSimple } from "phosphor-react";
import { useState } from "react";
import { updateCartridge } from "../api/cartridges";
import { useUserFromLocalStorage } from "../lib/useUserFromLocalStorage";

function Editor(props) {
  const user = useUserFromLocalStorage();
  const [formData, setFormData] = useState({
    name: props.location.state.dados.name,
    conservation_status: props.location.state.dados.conservation_status,
    console: props.location.state.dados.console,
    release_year: props.location.state.dados.release_year,
    cover_url: props.location.state.dados.cover_url,
    quantity: props.location.state.dados.quantity,
    price: parseFloat(props.location.state.dados.price),
    made_in_mari: props.location.state.dados.made_in_mari,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCartridge(props.location.state.dados.id, formData)
      .then(() => {
        user?.type === "ADMIN"
          ? window.location.replace("./Admin")
          : window.location.replace("/");
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

          <div className={styles.LineItem}>
            <label id="price" htmlFor="URL">
              Preço
            </label>
            <input
              className={styles.Input}
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  price: parseFloat(event.target.value),
                });
              }}
            />
          </div>

          <div className={styles.LineItem}>
            <label id="quantity" htmlFor="URL">
              Quantity
            </label>
            <input
              className={styles.Input}
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  quantity: parseInt(event.target.value),
                });
              }}
            />
          </div>

          <div className={styles.LineItem}>
            <span>Feito em Mari:</span>
            <label className={styles.Switch}>
              <div className={styles.SwitchWapper}>
                <input
                  type="checkbox"
                  name="made_in_mari"
                  checked={formData.made_in_mari}
                  onChange={(event) => {
                    console.log(Boolean(event.target.checked));
                    setFormData({
                      ...formData,
                      made_in_mari: Boolean(event.target.checked),
                    });
                  }}
                />
                <span className={styles.SwitchButton}></span>
              </div>
            </label>
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
