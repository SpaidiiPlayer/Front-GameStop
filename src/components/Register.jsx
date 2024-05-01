import styles from "./Register.module.css";
import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { createCartridge } from "../api/cartridges";
import { useUserFromLocalStorage } from "../lib/useUserFromLocalStorage";

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    conservation_status: "GOOD",
    console: "",
    release_year: "",
    cover_url: "",
    price: 0,
    quantity: 0,
    made_in_mari: false,
  });
  const user = useUserFromLocalStorage();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    createCartridge(formData).then((result) => {
      setIsLoading(false);
      if (result.status) {
        setErrorMessage(result.message);
        return;
      }
      user.type === "CLIENT" && window?.location.replace("/");
      user.type === "ADMIN" && window?.location.replace("/Admin");

      setFormData({
        name: "",
        conservation_status: "",
        console: "",
        release_year: "",
        cover_url: "",
        price: 0,
        quantity: 0,
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
              placeholder="Nome"
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
              placeholder="Console"
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
              placeholder="Ano de Lançamento"
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
              placeholder="URL da Imagem"
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
              placeholder="Preço"
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
              placeholder="Quantidade"
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
