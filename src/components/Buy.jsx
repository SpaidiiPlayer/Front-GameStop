import { useEffect, useState } from "react";
import { useUserFromLocalStorage } from "../lib/useUserFromLocalStorage";
import styles from "./Buy.module.css";
import { ShoppingCart } from "phosphor-react";
import { useUserDiscount } from "../lib/useUserDiscount";
import { createPurchase } from "../api/purchases";

function Buy(props) {
  const user = useUserFromLocalStorage();
  const hasDiscount = useUserDiscount(user);
  const [quantity, setQuantity] = useState(0);
  const [selectedPaymentForm, setSelectedPaymentForm] = useState(null);

  useEffect(() => {
    if (user?.type === "ADMIN") {
      window.location.href = "/";
    }
  });

  const handleSubmit = () => {
    const purchaseObject = {
      id_cartridge: props.location.state.id,
      id_client: user.id,
      payment_form: selectedPaymentForm,
      quantity: quantity,
    };

    createPurchase(purchaseObject)
      .then((response) => {
        if (response.id_client) {
          window.location.replace("./Success");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.content}>
      <div className={styles.imgContain}>
        <img
          className={styles.cartridgeImg}
          src={props.location.state.cover_url}
        />
      </div>

      <div>
        <p className={styles.id}>#{props.location.state.id}</p>
        <h1>{props.location.state.name}</h1>
        <div className={styles.contentSubInfo}>
          <div>
            <p>
              <b>Ano de lançamento: </b>
              {props.location.state.release_year}
            </p>
            <p>
              <b>Console: </b>
              {props.location.state.console}
            </p>
            <p>
              <b>Status de Conservação: </b>
              {props.location.state.conservation_status}
            </p>
          </div>

          <div>
            <h2>R$ {props.location.state.price}</h2>
            <p>Quantidade Disponível: {props.location.state.quantity}</p>
            <div className={styles.quantity}>
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 0 ? (prev = 0) : --prev))
                }
              >
                -
              </button>
              <input type="number" min="1" readOnly value={quantity} />
              <button
                onClick={() =>
                  setQuantity((prev) =>
                    prev === props.location.state.quantity
                      ? (prev = props.location.state.quantity)
                      : ++prev
                  )
                }
              >
                +
              </button>
            </div>
            {hasDiscount ? (
              <p className={styles.discountHeader}>
                PARABÉNS VOCÊ TEM 30% DE DESCONTO
              </p>
            ) : null}
            {user?.is_flamengo ? (
              <p className={styles.discountPoint}>
                &#x2022; Você torce para o Flamengo!
              </p>
            ) : null}
            {user?.watch_one_piece ? (
              <p className={styles.discountPoint}>
                &#x2022; Você assiste One Piece!
              </p>
            ) : null}
            {user?.is_from_sousa ? (
              <p className={styles.discountPoint}>&#x2022; Você é de Sousa!</p>
            ) : null}
            <p style={{ marginTop: 10 }}>
              Preço Total:{" "}
              <b>
                R${" "}
                {quantity *
                  props.location.state.price *
                  (hasDiscount ? 0.7 : 1)}
              </b>
            </p>

            <div style={{ marginTop: 10 }}>
              <p>Selecione o Método de Pagamento</p>
              <div>
                <input
                  type="radio"
                  value="PIX"
                  checked={selectedPaymentForm === "PIX"}
                  onChange={() => setSelectedPaymentForm("PIX")}
                />
                <span>PIX</span>
              </div>

              <div>
                <input
                  type="radio"
                  value="CARTAO"
                  checked={selectedPaymentForm === "CARTAO"}
                  onChange={() => setSelectedPaymentForm("CARTAO")}
                />
                <span>CARTAO</span>
              </div>

              <div>
                <input
                  type="radio"
                  value="BOLETO"
                  checked={selectedPaymentForm === "BOLETO"}
                  onChange={() => setSelectedPaymentForm("BOLETO")}
                />
                <span>BOLETO</span>
              </div>

              <div>
                <input
                  type="radio"
                  value="BERRIES"
                  checked={selectedPaymentForm === "BERRIES"}
                  onChange={() => setSelectedPaymentForm("BERRIES")}
                />
                <span>BERRIES</span>
              </div>

              {selectedPaymentForm === "PIX" && (
                <div>
                  <p style={{ marginTop: 10 }}>
                    <b>Escaneie o QR CODE:</b>
                  </p>
                  <img
                    style={{ width: 264, height: 264 }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/800px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png"
                  />
                </div>
              )}

              {selectedPaymentForm === "BOLETO" && (
                <div>
                  <p style={{ marginTop: 10 }}>
                    <b>Escaneie o código do boleto:</b>
                  </p>
                  <img
                    style={{ width: 400, height: 200, objectFit: "cover" }}
                    src="https://codigosdebarrasbrasil.com.br/wp-content/uploads/2016/10/1-codigo-de-barras.jpg"
                  />
                </div>
              )}

              {selectedPaymentForm === "CARTAO" && (
                <div>
                  <p style={{ marginTop: 10 }}>
                    <b>Insira o número do seu cartao:</b>
                  </p>
                  <input
                    className={styles.cardInput}
                    placeholder="1234 1234 1234 1234"
                  />
                  <p style={{ marginTop: 5 }}>
                    <b>Data de Validade:</b>
                  </p>
                  <input
                    className={styles.cardInputSmall}
                    placeholder="12/34"
                  />
                  <p style={{ marginTop: 5 }}>
                    <b>CVV</b>
                  </p>
                  <input className={styles.cardInputSmall} placeholder="321" />
                </div>
              )}

              {selectedPaymentForm === "BERRIES" && (
                <div>
                  <div>
                    <p style={{ marginTop: 10 }}>
                      <b>Insira o número de Berries:</b>
                    </p>
                    <input
                      className={styles.cardInputSmall}
                      placeholder="300"
                      type="number"
                    />
                  </div>
                  <img
                    style={{ width: 200, height: 200, objectFit: "cover" }}
                    src="https://i.ebayimg.com/images/g/tqkAAOSwKZNjevnS/s-l1600.jpg"
                  />
                </div>
              )}
            </div>

            <button
              disabled={quantity === 0 || !selectedPaymentForm}
              onClick={() => handleSubmit()}
              className={styles.buy}
            >
              Finalizar Compra <ShoppingCart size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
