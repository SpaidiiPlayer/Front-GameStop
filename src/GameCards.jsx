import styles from './GameCards.module.css';

export function Cards(props){
    return(
        <div className={styles.Cards}>
            <img src={props.url} alt="Foto do produto" />
            <p>{props.id}. {props.desc}</p>
            <p>{props.date}</p>
            <p>{props.conservation}</p>
            <p>{props.console}</p>
        </div>
    )
}