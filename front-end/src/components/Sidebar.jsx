import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDumbbell,
    faBicycle,
    faPersonWalking,
    faPersonSwimming,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../sass/sidebar.module.scss";

const Sidebar = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles.icons}>
                <span className={styles.iconBox}>
                    <FontAwesomeIcon
                        icon={faDumbbell}
                        className={styles.icon}
                    />
                </span>
                <span className={styles.iconBox}>
                    <FontAwesomeIcon icon={faBicycle} className={styles.icon} />
                </span>
                <span className={styles.iconBox}>
                    <FontAwesomeIcon
                        icon={faPersonWalking}
                        className={styles.icon}
                    />
                </span>
                <span className={styles.iconBox}>
                    <FontAwesomeIcon
                        icon={faPersonSwimming}
                        className={styles.icon}
                    />
                </span>
            </div>

            <div className={styles.cr}>
                <p>Copiryght, SportSee 2020</p>
            </div>
        </aside>
    );
};

export default Sidebar;
