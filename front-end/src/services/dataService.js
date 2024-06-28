import axios from "axios";

const API_URL = "http://localhost:3000/user";

// Function to fetch user information
export const getUserInfo = async (userId) => {
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
    try {
        const response = await axios.get(`${API_URL}/${userId}`);
        return response.data.data.score;
    } catch (error) {
        console.error("Error fetching user info:", error);
        throw error;
    }
};

// Function to fetch user score
export const getUserInfoCard = async (userId) => {
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
    try {
        const response = await axios.get(`${API_URL}/${userId}/performance`);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching user performance:", error);
        throw error;
    }
};
