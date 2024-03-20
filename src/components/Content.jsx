import styles from "./Content.module.css";
import { Card } from "./GameCards.jsx";
import { PlusCircle } from "phosphor-react";
import { Funnel } from "phosphor-react";
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

  const cardlist = [
    {
      id: "1",
      cover_url:
        "https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg",
      name: "Super Mario w",
      release_year: "21/11/2019",
      conservation_status: "Bom",
      console: "PS2",
    },
    {
      id: "2",
      cover_url:
        "https://archive.org/download/super-mario-moto/screenshot_02.png",
      name: "Super Mario Moto",
      release_year: "12/02/1999",
      conservation_status: "Ruim",
      console: "Nintendo Switch",
    },
    {
      id: "3",
      cover_url:
        "https://cdn.sistemawbuy.com.br/arquivos/c30f3cdb5ede193830560f4c44f96b28/produtos/6496190606606/20230623191333-6496190d7c41a_mini.jpg",
      name: "Sonic X",
      release_year: "05/03/2000",
      conservation_status: "Aceitável",
      console: "XboX",
    },
    {
      id: "4",
      cover_url:
        "https://archive.org/download/super-mario-moto/screenshot_02.png",
      name: "Mario Moto",
      release_year: "15/04/2003",
      conservation_status: "Novo",
      console: "XboX",
    },
    {
      id: "5",
      cover_url:
        "https://cdn.sistemawbuy.com.br/arquivos/c30f3cdb5ede193830560f4c44f96b28/produtos/6496190606606/20230623191333-6496190d7c41a_mini.jpg",
      name: "Sonic X",
      drelease_year: "05/10/2010",
      conservation_status: "Veterano de Guerra",
      console: "PSP",
    },
    {
      id: "6",
      cover_url:
        "https://i.pinimg.com/564x/c4/65/7b/c4657be2b28a02cac60512ad2a746077.jpg",
      name: "Super Mario W",
      release_year: "10/12/2001",
      conservation_status: "Aceitável",
      console: "XboX",
    },
    {
      id: "7",
      cover_url:
        "https://cdn.sistemawbuy.com.br/arquivos/c30f3cdb5ede193830560f4c44f96b28/produtos/6496190606606/20230623191333-6496190d7c41a_mini.jpg",
      name: "Sonic X",
      release_year: "05/03/2000",
      conservation_status: "Aceitável",
      console: "XboX",
    },
  ];

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
