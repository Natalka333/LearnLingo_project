// src/utils/uploadTeachers.js
import { database } from "../firebase.js";
import { ref, set } from "firebase/database";
import teachers from "../data/teachers.json";

export const uploadTeachers = async () => {
    try {
        await set(ref(database, "teachers"), teachers);
        console.log("Викладачі успішно додані!");
    } catch (error) {
        console.error("Помилка при додаванні викладачів:", error);
    }
};
