import { useState, useEffect } from "react";
import {
    getUserInfo,
    getUserActivity,
    getUserAverageSessions,
    getUserPerformance,
    getUserScore,
    getUserInfoCard,
} from "../services/dataService";

const useFetchData = (fetchFunction, userId, processData) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const result = await fetchFunction(userId);

                const processedResult = processData
                    ? processData(result)
                    : result;
                setData(processedResult);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchDataAsync();
    }, [fetchFunction, userId, processData]);

    return data;
};

export const useUserActivityData = (userId) =>
    useFetchData(getUserActivity, userId, (data) =>
        data.map((item) => ({
            ...item,
            dayNumber: item.day.slice(-2),
        }))
    );

export const useUserAverageSessionsData = (userId) =>
    useFetchData(getUserAverageSessions, userId, (data) =>
        data.sessions.map((item) => ({
            day: item.day,
            sessionLength: item.sessionLength,
        }))
    );

export const useUserPerformanceData = (userId) =>
    useFetchData(getUserPerformance, userId, (data) => {
        const { kind, data: radarData } = data;
        return radarData.map((item) => ({
            subject: kind[item.kind],
            A: item.value,
        }));
    });

export const useUseNutrientCardData = (userId) =>
    useFetchData(getUserInfoCard, userId, (data) => {
        const nutrients = [
            {
                type: "calories",
                value: `${data.calorieCount}kCal`,
                label: "Calories",
            },
            {
                type: "proteins",
                value: `${data.proteinCount}g`,
                label: "Proteines",
            },
            {
                type: "carbs",
                value: `${data.carbohydrateCount}g`,
                label: "Glucides",
            },
            {
                type: "lipids",
                value: `${data.lipidCount}g`,
                label: "Lipides",
            },
        ];
        return nutrients;
    });

export const useUserInfoData = (userId) =>
    useFetchData(getUserInfo, userId, (data) => {
        return data;
    });

export const useUserScoreData = (userId) =>
    useFetchData(getUserScore, userId, (data) => {
        return data * 100;
    });
