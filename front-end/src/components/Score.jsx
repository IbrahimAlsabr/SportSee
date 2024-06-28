import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "../sass/score.module.scss";
import styles from "../sass/score.module.scss";
import { useUserScoreData } from "../hooks/useFetchData";

// eslint-disable-next-line react/prop-types
const Score = ({ userId }) => {
    const score = useUserScoreData(userId);

    const data = [
        { name: "Completed", value: score },
        { name: "Remaining", value: 100 - score },
    ];

    const COLORS = ["#FF0000", "#E5E5E5"];

    return (
        <div className={styles.scoreCard}>
            <div className={styles.scoreChart}>
                <ResponsiveContainer width="100%" height={200}>
                    <PieChart margin={{ top: 20 }}>
                        <Pie
                            data={data}
                            startAngle={90}
                            endAngle={-270}
                            innerRadius="90%"
                            outerRadius="100%"
                            dataKey="value"
                            paddingAngle={0}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className={styles.scoreText}>
                    <p className={styles.scorePercentage}>{`${score}%`}</p>
                    <p className={styles.scoreLabel}>de votre objectif</p>
                </div>
            </div>
        </div>
    );
};

export default Score;
