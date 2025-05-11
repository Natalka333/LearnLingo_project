import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase";
import TeacherCard from "../TeacherCard/TeacherCard";


const TeachersList = () => {
    // Состояние для хранения массива преподавателей
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        // Ссылка на ветку "teachers" в базе данных
        const teachersRef = ref(database, "teachers");

        // onValue — слушатель, который срабатывает при любом изменении данных
        const unsubscribe = onValue(teachersRef, (snapshot) => {
            const data = snapshot.val(); // Получаем "сырые" данные

            if (data) {
                // Преобразуем объект преподавателей в массив
                const teachersArray = Object.entries(data).map(
                    ([id, teacher]) => ({
                        id,         // добавляем id (ключ из базы)
                        ...teacher, // разворачиваем все поля преподавателя
                    })
                );

                setTeachers(teachersArray); // Обновляем состояние
            } else {
                setTeachers([]); // Если данных нет — просто пустой массив
            }
        });

        // Очистка слушателя при размонтировании компонента
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h2>Список викладачів</h2>
            {teachers.map((teacher) => {
                return <TeacherCard key={teacher.id} teacher={teacher} />
            })}
        </div>
    );
};

export default TeachersList;
