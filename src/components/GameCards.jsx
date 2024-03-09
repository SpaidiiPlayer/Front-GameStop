import styles from './GameCards.module.css';
import { Link } from 'react-router-dom'
import { PencilSimple } from 'phosphor-react';
import { Trash } from 'phosphor-react';

export function Card(props){
    return(
        <div className={styles.Cards}>
            <img src={props.cover_url} alt="Foto do produto" />
            <p>{props.id}. {props.name}</p>
            <p>{props.release_year}</p>
            <p>{props.conservation_status}</p>
            <p>{props.console}</p>
            <Link to={{ pathname: "./Editor", state: { dados: props }}}><button className={styles.Pencil}><PencilSimple size={22}/></button></Link>
            <button className={styles.Trash}><Trash size={22}/></button>
        </div>
    )
}