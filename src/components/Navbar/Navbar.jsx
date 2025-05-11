import { Link, NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import css from "./Navbar.module.css";

const Navbar = () => {
    return (
        <header className={css.header}>
            <div className={css.logo}>
                <span className={css.logoCircle}></span>
                <span className={css.logoText}>LearnLingo</span>
            </div>

            <nav className={css.nav}>
                <NavLink to="/" className={({ isActive }) => isActive ? css.active : ""}>
                    Home
                </NavLink>
                <NavLink to="/teachers" className={({ isActive }) => isActive ? css.active : ""}>
                    Teachers
                </NavLink>
            </nav>

            <div className={css.actions}>
                <Link to="/login" className={css.login}>
                    <FaSignInAlt /> Log in
                </Link>
                <Link to="/register" className={css.register}>
                    Registration
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
