import styles from "./ContentUser.module.css";
import { Card } from "./GameCards.jsx";
import { PlusCircle } from "phosphor-react";
import { Confetti } from "phosphor-react";
import { useEffect, useState } from "react";
import {
  getAllCartridges,
  getCartridgesFromConsole,
  getCartridgesFromName,
  getCartridgesFromPrice,
  getCartridgesMari,
} from "../api/cartridges.js";

function ContentUser() {
  const [cards, setCards] = useState([]);
  const [filterPrice, setFilterPrice] = useState({ from: null, to: null });
  const [madeInMari, setMadeInMari] = useState(false);
  const [name, setName] = useState("");
  const [videoConsole, setVideoConsole] = useState("");

  function getCardsFromApi() {
    getAllCartridges()
      .then((allCards) => {
        console.log(allCards);
        setCards(allCards.rows);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  useEffect(() => {
    getCardsFromApi();
  }, []);

  return (
    <div className={styles.Content}>
      <div className={styles.Title}>
        <PlusCircle size={24} /> Produtos
      </div>

      <div className={styles.Buttons}>
        <h2> Filtros</h2>
        <div className={styles.LineItem}>
          <span>Feito Em Mari</span>
          <label className={styles.Switch}>
            <div className={styles.SwitchWapper}>
              <input
                type="checkbox"
                name="made_in_mari"
                checked={madeInMari}
                onChange={(event) => {
                  console.log(Boolean(event.target.checked));
                  if (event.target.checked) {
                    setMadeInMari(true);

                    getCartridgesMari().then((value) => {
                      setCards(value.rows);
                    });
                    setFilterPrice({ to: 0, from: 0 });
                    setName("");
                    setVideoConsole("");
                  } else {
                    setMadeInMari(false);

                    getAllCartridges().then((value) => {
                      setCards(value.rows);
                    });
                  }
                }}
              />
              <span className={styles.SwitchButton}></span>
            </div>
          </label>
        </div>

        <span>Faixa de Preço</span>
        <div className={styles.filterPrice}>
          <input
            type="number"
            placeholder="From"
            value={filterPrice.from}
            onChange={(event) =>
              setFilterPrice({
                ...filterPrice,
                from: parseFloat(event.target.value),
              })
            }
          />
          <input
            type="number"
            placeholder="To"
            value={filterPrice.to}
            onChange={(event) => {
              setFilterPrice({
                ...filterPrice,
                to: parseFloat(event.target.value),
              });
            }}
          />
          <button
            onClick={() => {
              setMadeInMari(false);
              setName("");
              setVideoConsole("");

              getCartridgesFromPrice(filterPrice.from, filterPrice.to).then(
                (value) => {
                  setCards(value.rows);
                }
              );
              if (!filterPrice.to && !filterPrice.from) {
                getAllCartridges().then((value) => {
                  setCards(value.rows);
                });
              }
            }}
            className={styles.filterButton}
          >
            {" "}
            Filtrar por preço
          </button>
        </div>

        <div className={styles.filterPrice}>
          <input
            type="text"
            placeholder="Pesquise por nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <button
            onClick={() => {
              setMadeInMari(false);
              getCartridgesFromName(name).then((value) => {
                setCards(value.rows);
              });
              if (!name) {
                getAllCartridges().then((value) => {
                  setCards(value.rows);
                });
              }
              setMadeInMari(false);
              setFilterPrice({ from: 0, to: 0 });
            }}
            className={styles.filterButton}
          >
            {" "}
            Filtrar por nome
          </button>
        </div>

        <div className={styles.filterPrice}>
          <input
            type="text"
            placeholder="Pesquise por Console"
            value={videoConsole}
            onChange={(event) => setVideoConsole(event.target.value)}
          />

          <button
            onClick={() => {
              setMadeInMari(false);
              getCartridgesFromConsole(videoConsole).then((value) => {
                setCards(value.rows);
              });
              if (!videoConsole) {
                getAllCartridges().then((value) => {
                  setCards(value.rows);
                });
              }
              setMadeInMari(false);
              setName("");
              setFilterPrice({ from: 0, to: 0 });
            }}
            className={styles.filterButton}
          >
            {" "}
            Filtrar por Console
          </button>
        </div>
      </div>

      <div className={styles.Cardlist}>
        {cards?.length > 0 &&
          cards?.map((gamecard) => (
            <>
              <Card
                key={gamecard.id}
                cover_url={gamecard.cover_url}
                id={gamecard.id}
                name={gamecard.name}
                release_year={gamecard.release_year}
                conservation_status={gamecard.conservation_status}
                console={gamecard.console}
                gamecard={gamecard}
              />
            </>
          ))}
      </div>

      {/* <a href="https://i.imgur.com/BNMFOxN.png" target="_blank">
        <button>
          Ajude nosso São João <Confetti size={32} />
        </button>
      </a> */}
    </div>
  );
}

export default ContentUser;
