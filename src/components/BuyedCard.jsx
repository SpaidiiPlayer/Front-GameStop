import styles from "./BuyedCard.module.css";
import { useUserFromLocalStorage } from "../lib/useUserFromLocalStorage";
import { confirmPurchase } from "../api/purchases";
import { Check, X } from "phosphor-react";

export function BuyedCard(props) {
  const user = useUserFromLocalStorage();

  return (
    <div className={styles.Cards}>
      <img src={props.data.cover_url} alt="Foto do produto" />
      <div className={styles.cardContent}>
        <span
          style={{
            fontWeight: "normal",
            color: "gray",
          }}
        >
          #{props.data.id}
        </span>
        <p>
          <p style={{ fontWeight: "bold" }}>{props.data.name} </p>
        </p>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <p>
            Quantidade:{" "}
            <p>
              <b>{props.data.quantity}</b>
            </p>
          </p>
          <p>
            Preço:{" "}
            <p>
              <b>R$ {props.data.total}</b>
            </p>
          </p>
          {props.data.have_discount && (
            <p>
              Desconto: <b>30%</b>
            </p>
          )}

          <p>
            Forma de pagamento: <b>{props.data.payment_form}</b>
          </p>
        </div>

        <p>Ano: {props.data.release_year}</p>
        <p>Status: {props.data.conservation_status}</p>
        <p>Console: {props.data.console}</p>
        {props.fromAdmin && <p>Id Cliente: {props.data.id_client}</p>}
        {props.fromAdmin && (
          <button
            onClick={() => props.confirmPurchase(props.data.id)}
            className={styles.buy}
          >
            Confirmar
          </button>
        )}
        {!props.fromAdmin &&
          (props.data.confirmed ? (
            <div className={styles.confirmed}>
              <Check size={32} /> CONFIRMADA
            </div>
          ) : (
            <div className={styles.notConfirmed}>
              <X size={32} />
              NÃO CONFIRMADA
            </div>
          ))}
      </div>
    </div>
  );
}
