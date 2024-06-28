import styles from "../sass/header.module.scss";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <img src={logo} alt="Logo" />
            </div>

            <nav className={styles.nav}>
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
