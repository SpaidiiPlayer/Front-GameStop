import styles from "./GameCards.module.css";
import { Link } from "react-router-dom";
import { PencilSimple } from "phosphor-react";
import { Trash } from "phosphor-react";
import { deleteCartridge } from "../api/cartridges";

export function Card(props) {
  return (
    <div className={styles.Cards}>
      <img src={props.cover_url} alt="Foto do produto" />
      <p>
        <p style={{ fontWeight: "bold" }}>
          {props.name}{" "}
          <span
            style={{
              fontWeight: "normal",
              color: "gray",
            }}
          >
            #{props.id}
          </span>
        </p>
      </p>

      <p>{props.release_year}</p>
      <p>{props.conservation_status}</p>
      <p>{props.console}</p>
      {props.isEditing && (
        <Link
          to={{
            pathname: "./Editor",
            state: {
              dados: {
                name: props.name,
                id: props.id,
                conservation_status: props.conservation_status,
                console: props.console,
                release_year: props.release_year,
                cover_url: props.cover_url,
              },
            },
          }}
        >
          <button className={styles.Pencil}>
            <PencilSimple size={22} />
          </button>
        </Link>
      )}
      {props.isDeleting && (
        <button
          onClick={() => {
            props.onDelete(props.id);
          }}
          className={styles.Trash}
        >
          <Trash size={22} />
        </button>
      )}
    </div>
  );
}
