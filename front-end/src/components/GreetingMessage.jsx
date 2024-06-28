/* eslint-disable react/prop-types */
import styles from "../sass/greeting-message.module.scss";
import { useUserInfoData } from "../hooks/useFetchData";

const GreetingMessage = ({ userId }) => {
    const name = useUserInfoData(userId).firstName;

    return (
        <div className={styles.greetingMessage}>
            <h1>
                Bonjour <span className={styles.name}>{name}</span>
                <p className={styles.congratulatoryMessage}>
                    Félicitation ! Vous avez explosé vos objectifs hier{" "}
                    <span>👏</span>
                </p>
            </h1>
        </div>
    );
};

export default GreetingMessage;
