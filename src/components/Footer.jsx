import styles from "./Footer.module.css";
import { Phone } from "phosphor-react";
import { WhatsappLogo } from "phosphor-react";
import { InstagramLogo } from "phosphor-react";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerbuttons}>
        <button>
          <Phone size={32} />
        </button>
        <button>
          <WhatsappLogo size={32} />
        </button>
        <button>
          <InstagramLogo size={32} />
        </button>
      </div>
    </div>
  );
}
