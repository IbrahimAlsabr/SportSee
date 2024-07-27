import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NutrientInfoCard from "./components/NutrientCard";
import GreetingMessage from "./components/GreetingMessage";
import globalStyles from "./sass/global.module.scss";
import styles from "./sass/home.module.scss";
import CustomBarChart from "./components/Activity";
import RadarChartCustom from "./components/Performance";
import Legend from "./components/AvgSession";
import Score from "./components/Score";
import { useUseNutrientCardData } from "./hooks/useFetchData";

function App() {
    const userId = import.meta.env.VITE_USER_ID_API_DATA;
    const nutrients = useUseNutrientCardData(userId);

    return (
        <div className={globalStyles.container}>
            <Header></Header>

            <div className={styles.sidebarMain}>
                <Sidebar></Sidebar>

                <main className={styles.main}>
                    <GreetingMessage userId={userId} />

                    <div className={styles.statics}>
                        <div className={styles.acPerfeScore}>
                            <div className={styles.activity}>
                                <div className={styles.title}>
                                    <h3>Activité quotidienne</h3>
                                    <div>
                                        <span>Poids (kg)</span>
                                        <span>Calories brûlées (kCal)</span>
                                    </div>
                                </div>

                                <CustomBarChart
                                    userId={userId}
                                ></CustomBarChart>
                            </div>

                            <div className={styles.three}>
                                <div className={styles.radarLegend}>
                                    <RadarChartCustom
                                        userId={userId}
                                    ></RadarChartCustom>
                                </div>

                                <div className={styles.sessions}>
                                    <h3>Durée moyenne des sessions</h3>
                                    <Legend userId={userId}></Legend>
                                </div>

                                <div className={styles.score}>
                                    <h3>Score</h3>
                                    <Score userId={userId} />
                                </div>
                            </div>
                        </div>

                        <div>
                            {nutrients.map((nutrient) => (
                                <NutrientInfoCard
                                    key={nutrient.type}
                                    type={nutrient.type}
                                    value={nutrient.value}
                                    label={nutrient.label}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
