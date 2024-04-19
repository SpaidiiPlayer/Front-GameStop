import styles from './Header.module.css';
import { List } from 'phosphor-react';
import { MagnifyingGlass } from 'phosphor-react';
import { ShoppingCart } from 'phosphor-react';
import { SignIn } from "phosphor-react"
import { Link } from "react-router-dom";

export function Header(){

    return(
        <header className={styles.header}> 
            <div className={styles.leftside}>
                    <button>
                        <strong><List  size={40} /></strong>
                    </button>
                <div className={styles.title}><Link to='/'><strong>Game<span>Stop</span></strong></Link></div>
            </div>
            <div className={styles.rightside}>
                <button><Link to="/Login" ><SignIn size={32} /></Link></button>
                <button><MagnifyingGlass size={32} /></button>
                <button><ShoppingCart size={32} /></button>
            </div>
        </header>
    );
}