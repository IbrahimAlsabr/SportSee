import axios from "axios";

import {
    mockUserInfo,
    mockUserActivity,
    mockUserAverageSessions,
    mockUserPerformance,
    mockUserScore,
    mockUserInfoCard,
} from "../__mock__/mockData";

const useMockData = import.meta.env.VITE_USE_MOCK_DATA === "true";

const API_URL = "http://localhost:3000/user";

// Function to fetch user information
export const getUserInfo = async (userId) => {
    if (useMockData) {
        return mockUserInfo.data.userInfos;
    }

    try {
        const response = await axios.get(`${API_URL}/${userId}`);
        return response.data.data.userInfos;
    } catch (error) {
        console.error("Error fetching user info:", error);
        throw error;
    }
};

// Function to fetch user score
export const getUserScore = async (userId) => {
    if (useMockData) {
        return mockUserScore.data;
    }

    try {
        const response = await axios.get(`${API_URL}/${userId}`);

        return response.data.data.score ?? response.data.data.todayScore;
    } catch (error) {
        console.error("Error fetching user info:", error);
        throw error;
    }
};

// Function to fetch user score
export const getUserInfoCard = async (userId) => {
    if (useMockData) {
        return mockUserInfoCard.data;
    }

    try {
        const response = await axios.get(`${API_URL}/${userId}`);
        return response.data.data.keyData;
    } catch (error) {
        console.error("Error fetching user info:", error);
        throw error;
    }
};

// Function to fetch user activity
export const getUserActivity = async (userId) => {
    if (useMockData) {
        return mockUserActivity.data.sessions;
    }

    try {
        const response = await axios.get(`${API_URL}/${userId}/activity`);
        return response.data.data.sessions;
    } catch (error) {
        console.error("Error fetching user activity:", error);
        throw error;
    }
};

// Function to fetch user average sessions
export const getUserAverageSessions = async (userId) => {
    if (useMockData) {
        return mockUserAverageSessions.data;
    }
    try {
        const response = await axios.get(
            `${API_URL}/${userId}/average-sessions`
        );
        return response.data.data;
    } catch (error) {
        console.error("Error fetching user average sessions:", error);
        throw error;
    }
};

// Function to fetch user performance
export const getUserPerformance = async (userId) => {
    if (useMockData) {
        return mockUserPerformance.data;
    }
    try {
        const response = await axios.get(`${API_URL}/${userId}/performance`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching user performance:", error);
        throw error;
    }
};
