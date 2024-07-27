// mockData.js

export const mockUserInfo = {
    data: {
        id: 34,
        userInfos: {
            firstName: "Alice",
            lastName: "Smith",
            age: 29,
        },
        todayScore: 0.75,
        keyData: {
            calorieCount: 2100,
            proteinCount: 130,
            carbohydrateCount: 320,
            lipidCount: 60,
        },
    },
};

export const mockUserActivity = {
    data: {
        userId: 34,
        sessions: [
            { day: "2020-08-01", kilogram: 70, calories: 200 },
            { day: "2020-08-02", kilogram: 70, calories: 250 },
            { day: "2020-08-03", kilogram: 71, calories: 230 },
            { day: "2020-08-04", kilogram: 71, calories: 260 },
            { day: "2020-08-05", kilogram: 70, calories: 210 },
            { day: "2020-08-06", kilogram: 69, calories: 220 },
            { day: "2020-08-07", kilogram: 68, calories: 300 },
        ],
    },
};

export const mockUserAverageSessions = {
    data: {
        userId: 34,
        sessions: [
            { day: 1, sessionLength: 25 },
            { day: 2, sessionLength: 35 },
            { day: 3, sessionLength: 40 },
            { day: 4, sessionLength: 45 },
            { day: 5, sessionLength: 50 },
            { day: 6, sessionLength: 20 },
            { day: 7, sessionLength: 55 },
        ],
    },
};

export const mockUserPerformance = {
    data: {
        userId: 34,
        kind: {
            1: "cardio",
            2: "energy",
            3: "endurance",
            4: "strength",
            5: "speed",
            6: "intensity",
        },
        data: [
            { value: 85, kind: 1 },
            { value: 110, kind: 2 },
            { value: 130, kind: 3 },
            { value: 70, kind: 4 },
            { value: 190, kind: 5 },
            { value: 95, kind: 6 },
        ],
    },
};

export const mockUserScore = {
    data: 0.92,
};

export const mockUserInfoCard = {
    data: {
        calorieCount: 2200,
        proteinCount: 140,
        carbohydrateCount: 310,
        lipidCount: 70,
    },
};
