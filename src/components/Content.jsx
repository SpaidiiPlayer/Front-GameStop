import styles from "./Content.module.css";
import { Card } from "./GameCards.jsx";
import { PlusCircle } from "phosphor-react";
import { PencilSimple } from "phosphor-react";
import { Plus, Minus } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCartridge, getAllCartridges } from "../api/cartridges.js";

function Content() {
  const [cards, setCards] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  function getCardsFromApi() {
    getAllCartridges().then((allCards) => {
      console.log(allCards);
      setCards(allCards.rows);
    });
  }

  useEffect(() => {
    getCardsFromApi();
  }, []);

  function onDelete(id) {
    return deleteCartridge(id).then(() => {
      getCardsFromApi();
    });
  }

  return (
    <div className={styles.Content}>
      <div className={styles.Title}>
        <PlusCircle size={24} /> Produtos
      </div>
      <div className={styles.Buttons}>
        <button
          onClick={() => {
            setIsEditing((prev) => !prev);
            setIsDeleting(false);
          }}
        >
          Editar <PencilSimple size={24} />
        </button>
        <Link to="/Register">
          <button>
            Adicionar <Plus size={24} />
          </button>
        </Link>
        <button
          onClick={() => {
            setIsDeleting((prev) => !prev);
            setIsEditing(false);
          }}
        >
          Remover <Minus size={24} />
        </button>
      </div>

      <div className={styles.Cardlist}>
        {cards?.length > 0 &&
          cards?.map((gamecard, index) => (
            <>
              <Card
                key={gamecard.id}
                isEditing={isEditing}
                isDeleting={isDeleting}
                cover_url={gamecard.cover_url}
                id={gamecard.id}
                name={gamecard.name}
                release_year={gamecard.release_year}
                conservation_status={gamecard.conservation_status}
                console={gamecard.console}
                onDelete={onDelete}
              />
            </>
          ))}
      </div>
    </div>
  );
}

export default Content;
