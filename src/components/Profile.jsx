import { ShoppingCart, User } from "phosphor-react";
import { useUserFromLocalStorage } from "../lib/useUserFromLocalStorage";
import styles from "./Profile.module.css";
import { useEffect, useState } from "react";
import { getPurchasesFromUser } from "../api/user";
import { BuyedCard } from "./BuyedCard";
import {
  confirmPurchase,
  getConfirmedPurchases,
  getNotConfirmedPurchases,
} from "../api/purchases";

export const Profile = () => {
  const user = useUserFromLocalStorage();
  const [purchases, setPurchases] = useState(null);
  const [confirmedPurchases, setConfirmedPurchases] = useState(null);
  const [notconfirmedPurchases, setNotConfirmedPurchases] = useState(null);

  useEffect(() => {
    user?.id &&
      user?.type === "CLIENT" &&
      getPurchasesFromUser(user.id).then((results) => {
        setPurchases(results.rows);
      });

    user?.id &&
      user?.type === "ADMIN" &&
      getConfirmedPurchases(user.id).then((results) => {
        setConfirmedPurchases(results.rows);
      });

    user?.id &&
      user?.type === "ADMIN" &&
      getNotConfirmedPurchases().then((results) => {
        setNotConfirmedPurchases(results.rows);
      });
  }, [user]);

  const handleConfirmPurchase = (id) => {
    confirmPurchase({ id_seller: user.id, id: id })
      .then(() => {
        getConfirmedPurchases(user.id).then((results) => {
          setConfirmedPurchases(results.rows);
        });
        getNotConfirmedPurchases().then((results) => {
          setNotConfirmedPurchases(results.rows);
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className={styles.main}>
      <div className={styles.mainContent}>
        <h1>
          Perfil de {user?.type === "ADMIN" ? "Administrador" : "Usuário"}
        </h1>
        <User size={32} />
      </div>

      <div className={styles.mainData}>
        <p>
          Nome: <b>{user?.name}</b>
        </p>

        <p>
          Email: <b>{user?.email}</b>
        </p>

        <p>
          Torcedor do Flamengo: <b>{user?.is_flamengo ? "Sim" : "Não"}</b>
        </p>

        <p>
          Fã de One Piece: <b>{user?.watch_one_piece ? "Sim" : "Não"}</b>
        </p>

        <p>
          Morador de Sousa: <b>{user?.is_from_sousa ? "Sim" : "Não"}</b>
        </p>
        {user?.type === "ADMIN" && (
          <a href="./Admin">
            <button onClick={() => {}} className={styles.adminButton}>
              Seção de Administração
            </button>
          </a>
        )}

        <button
          onClick={() => {
            window.localStorage.removeItem("gamestop_user");
            window.location.href = "./";
          }}
          className={styles.logoutButton}
        >
          Logout
        </button>
      </div>

      {user?.type === "CLIENT" && (
        <div className={styles.purchases}>
          <div className={styles.purchasesMain}>
            <h2>Compras Realizadas</h2>
            <ShoppingCart size={32} />
          </div>

          <div className={styles.purchasesItems}>
            {purchases?.length > 0 &&
              purchases?.map((gamecard) => (
                <>
                  <BuyedCard key={gamecard.id} data={gamecard} />
                </>
              ))}
          </div>
        </div>
      )}

      {user?.type === "ADMIN" && (
        <div className={styles.purchases}>
          <div className={styles.purchasesMain}>
            <h2>
              Relatório de Vendas do Administrador do mês de{" "}
              <span>
                {Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
                  new Date()
                )}
              </span>
            </h2>
          </div>

          <div className={styles.confirmedPurchaseItems}>
            {confirmedPurchases?.length > 0 &&
              confirmedPurchases?.map((gamecard) => {
                const currentDate = new Date();
                const gamecardDate = new Date(gamecard.date);
                if (gamecardDate.getMonth() != currentDate.getMonth()) return;

                return (
                  <>
                    <div className={styles.confirmedPurchase}>
                      <span> {gamecard.id} | </span>
                      <span> {gamecard.name} | </span>
                      <span> Quantidade: {gamecard.quantity} |</span>
                      <span> Preço: {gamecard.total} |</span>
                      <span> Id Cliente: {gamecard.id_client} |</span>
                      <span> Desconto: {gamecard.discount} |</span>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      )}

      {user?.type === "ADMIN" && (
        <div className={styles.purchases}>
          <div className={styles.purchasesMain}>
            <h2>Confirmar Compras</h2>
            <ShoppingCart size={32} />
          </div>

          <div className={styles.purchasesItems}>
            {notconfirmedPurchases?.length > 0 &&
              notconfirmedPurchases?.map((gamecard) => (
                <>
                  <BuyedCard
                    key={gamecard.id}
                    data={gamecard}
                    fromAdmin={true}
                    confirmPurchase={handleConfirmPurchase}
                  />
                </>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
