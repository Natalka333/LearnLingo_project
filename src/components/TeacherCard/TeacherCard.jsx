import { useState } from "react";
import { MdOutlineLanguage, MdStar, MdVideocam, MdAttachMoney, MdFavoriteBorder } from "react-icons/md";
import TeacherDetails from "../TeacherDetails/TeacherDetails";
import css from "./TeacherCard.module.css";

const TeacherCard = ({ teacher }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={css.teacherCard}>
            <img src={teacher.avatar_url} alt={teacher.name} className={css.avatar} />

            <div className={css.content}>
                <div className={css.topRow}>
                    <div className={css.tags}>
                        <span><MdOutlineLanguage /> Languages</span>
                        <span><MdVideocam /> Lessons online</span>
                        <span>Lessons done: {teacher.lessons_done}</span>
                        <span><MdStar /> {teacher.rating}</span>
                        <span><MdAttachMoney /> Price / 1 hour: {teacher.price_per_hour}$</span>
                    </div>
                    <button className={css.favButton}><MdFavoriteBorder /></button>
                </div>

                <h3 className={css.name}>{teacher.name} {teacher.surname}</h3>
                <p className={css.speaks}><strong>Speaks:</strong> {teacher.languages?.join(", ")}</p>

                <p className={css.lessonInfo}><strong>Lesson Info:</strong> {teacher.lesson_info}</p>
                <p className={css.conditions}><strong>Conditions:</strong> {teacher.conditions}</p>

                <div className={css.levels}>
                    {teacher.levels?.map(level => (
                        <span key={level} className={css.levelTag}>#{level}</span>
                    ))}
                </div>

                <button className={css.readMoreButton} onClick={() => setExpanded(p => !p)}>
                    {expanded ? "Hide" : "Read more"}
                </button>

                {expanded && <TeacherDetails teacher={teacher} />}
            </div>
        </div>
    );
};

export default TeacherCard;
