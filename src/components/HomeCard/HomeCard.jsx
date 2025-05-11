import css from './HomeCard.module.css';
import { FaArrowRight } from 'react-icons/fa';

const HomeCard = () => {
    return (
        <div className={css.container}>
            <section className={css.hero}>
                <div className={css.left}>
                    <h2 className={css.h2}>
                        Unlock your potential with the best <mark>language</mark> tutors
                    </h2>
                    <p>
                        Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.
                    </p>
                    <button className={css.cta}>Get started</button>
                </div>
                <div className={css.right}>
                    <div className={css.imageContainer}>
                        <img src="/public/image_user_png.png" alt="hero" />
                    </div>
                </div>
            </section>

            <section className={css.stats}>
                <div className={css.statItem}>
                    <span className={css.number}>32,000 +</span>
                    <span className={css.label}>Experienced<br />tutors</span>
                </div>
                <div className={css.statItem}>
                    <span className={css.number}>300,000 +</span>
                    <span className={css.label}>5-star tutor<br />reviews</span>
                </div>
                <div className={css.statItem}>
                    <span className={css.number}>120 +</span>
                    <span className={css.label}>Subjects<br />taught</span>
                </div>
                <div className={css.statItem}>
                    <span className={css.number}>200 +</span>
                    <span className={css.label}>Tutor<br />nationalities</span>
                </div>
            </section>

        </div>
    );
};

export default HomeCard;
