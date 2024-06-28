/* eslint-disable react/prop-types */
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useUserAverageSessionsData } from '../hooks/useFetchData';

const Legend = ({ userId }) => {
	
	const data = useUserAverageSessionsData(userId);
    return (
        <ResponsiveContainer width="100%" height={200} fill="#fff">
            <LineChart
                width={500}
                height={200}
                data={data}
                margin={{
                    top: 40,
                    right: 5,
                    left: 5,
                    bottom: 20,
                }}
            >
                <XAxis
                    dataKey="day"
                    stroke="#FFFFFF"
                    opacity={0.5}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={25}
                />
                <Tooltip
                    cursor={false}
                    itemStyle={{ color: "#000" }}
                    formatter={(value) => [`${value} min`, ""]}
                    labelFormatter={() => ""}
                    separator=""
                />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="#ffffff"
                    activeDot={{ r: 8 }}
                    dot={false}
                    strokeWidth={2}
                    legendType="none"
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default Legend;
