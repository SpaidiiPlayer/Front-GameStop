import styles from "./ContentUser.module.css";
import { Card } from "./GameCards.jsx";
import { PlusCircle } from "phosphor-react";
import { Confetti } from "phosphor-react"
import { useEffect, useState } from "react";
import { deleteCartridge, getAllCartridges } from "../api/cartridges.js";

function ContentUser() {
  const [cards, setCards] = useState([]);

  function getCardsFromApi() {
    getAllCartridges().then((allCards) => {
      console.log(allCards);
      setCards(allCards.rows);
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

        <a href="https://i.imgur.com/BNMFOxN.png" target="_blank" >
            <button>
                Ajude nosso São João <Confetti size={32} />
            </button>
        </a>
      </div>

      <div className={styles.Cardlist}>
        {cards?.length > 0 &&
          cards?.map((gamecard, index) => (
            <>
              <Card
                key={gamecard.id}
                cover_url={gamecard.cover_url}
                id={gamecard.id}
                name={gamecard.name}
                release_year={gamecard.release_year}
                conservation_status={gamecard.conservation_status}
                console={gamecard.console}
              />
            </>
          ))}
      </div>
    </div>
  );
}

export default ContentUser;
