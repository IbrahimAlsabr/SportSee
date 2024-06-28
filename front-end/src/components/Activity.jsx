/* eslint-disable react/prop-types */
import {
    BarChart,
    Bar,
    XAxis,
    CartesianGrid,
    Tooltip,
    YAxis,
    ResponsiveContainer,
} from "recharts";

import { useUserActivityData } from "../hooks/useFetchData";

const CustomBarChart = ({ userId }) => {
    const data = useUserActivityData(userId);

    return (
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data} barGap={5}>
                <CartesianGrid stroke="#03030300" />
                <XAxis
                    dataKey="dayNumber"
                    stroke="#ddd"
                />
                <YAxis
                    yAxisId="left"
                    orientation="left"
                    stroke="#fff"
                    padding={{ bottom: 20 }}
                    hide
                />
                <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#ddd"
                    padding={{ bottom: 20 }}
                />
                <Tooltip
                    cursor={false}
                    contentStyle={{
                        border: "none",
                        padding: 0,
                        margin: 0,
                    }}
                    itemStyle={{
                        backgroundColor: "red",
                        padding: 10,
                        margin: 0,
                        color: "#fff",
                    }}
                    formatter={(value, name) => {
                        return name === "kilogram"
                            ? [`${value} Kg`, ""]
                            : [`${value} Clr`, ""];
                    }}
                    labelFormatter={() => ""}
                    separator=""
                />
                <Bar
                    yAxisId="right"
                    dataKey="kilogram"
                    fill="#020203"
                    barSize={12}
                    radius={[10, 10, 0, 0]}
                />
                <Bar
                    yAxisId="left"
                    dataKey="calories"
                    fill="#e60000"
                    barSize={12}
                    radius={[10, 10, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CustomBarChart;
