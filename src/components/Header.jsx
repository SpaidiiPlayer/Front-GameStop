import styles from "./Header.module.css";
import { List } from "phosphor-react";
import { MagnifyingGlass } from "phosphor-react";
import { ShoppingCart } from "phosphor-react";
import { SignIn, User } from "phosphor-react";
import { Link } from "react-router-dom";
import { useUserFromLocalStorage } from "../lib/useUserFromLocalStorage";

export function Header() {
  const user = useUserFromLocalStorage();

  console.log(user);

  return (
    <header className={styles.header}>
      <div className={styles.leftside}>
        <div className={styles.title}>
          <Link to="/">
            <strong>
              Game<span>Stop</span>
            </strong>
          </Link>
        </div>
      </div>
      <div className={styles.rightside}>
        <button>
          {user?.id ? (
            <Link to="/Profile">
              <User size={32} />
            </Link>
          ) : (
            <Link to="/Login">
              <SignIn size={32} />
            </Link>
          )}
        </button>
      </div>
    </header>
  );
}
