import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../sass/nutrient-info-card.module.scss"; // Correct import for CSS modules
import {
    faFire,
    faDrumstickBite,
    faAppleAlt,
    faHamburger,
} from "@fortawesome/free-solid-svg-icons";

const iconMapping = {
    calories: faFire,
    proteins: faDrumstickBite,
    carbs: faAppleAlt,
    lipids: faHamburger,
};

const NutrientInfoCard = ({ type, value, label }) => {

    return (
        <div className={styles["nutrient-card"]}>
            <div className={`${styles["icon-container"]} ${styles[type]}`}>
                <FontAwesomeIcon icon={iconMapping[type]} />
            </div>
            <div className={styles["nutrient-details"]}>
                <h2>{value}</h2>
                <p>{label}</p>
            </div>
        </div>
    );
};

NutrientInfoCard.propTypes = {
    type: PropTypes.oneOf(["calories", "proteins", "carbs", "lipids"])
        .isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default NutrientInfoCard;
