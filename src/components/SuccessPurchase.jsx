import styles from "./SuccessPurchase.module.css";

export const SuccessPurchase = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainContent}>
        <h1>PARABÉNS PELA SUA COMPRA!</h1>
        <h2>
          Acesse seu <a href="./Profile">Perfil</a> para saber quando sua compra
          for confirmada!
        </h2>
        <h3>
          Ou veja continue navegando na <a href="./">Loja!</a>
        </h3>
      </div>
    </div>
  );
};
