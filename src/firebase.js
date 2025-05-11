// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD-SuB9KVcRPtcxN0VKzSogA96CRgIOCpg",
    authDomain: "learnlingo-26ac6.firebaseapp.com",
    databaseURL: "https://learnlingo-26ac6-default-rtdb.firebaseio.com",
    projectId: "learnlingo-26ac6",
    storageBucket: "learnlingo-26ac6.appspot.com",
    messagingSenderId: "774824266362",
    appId: "1:774824266362:web:a61eb1a3e7a3f302b209c3",
    measurementId: "G-JDZWH0Y7Z9",
};

// Ініціалізація
const app = initializeApp(firebaseConfig);

// Імпортуємо базу даних
export const database = getDatabase(app);
