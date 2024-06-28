/* eslint-disable react/prop-types */

import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar,
    ResponsiveContainer,
} from "recharts";
import { useUserPerformanceData } from "../hooks/useFetchData";

const RadarChartCustom = ({ userId }) => {
    const data = useUserPerformanceData(userId);

    return (
        <ResponsiveContainer width="100%" height={250}>
            <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
                <PolarGrid />
                <PolarAngleAxis
                    dataKey="subject"
                    stroke="#fff"
                    fontSize={12}
                    fontWeight={200}
                />
                <Radar dataKey="A" fill="rgb(196, 11, 11)" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
};

export default RadarChartCustom;
