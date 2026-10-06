import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/calcnest-logo.svg";
import mobileLogo from "../../assets/images/calcnest-mobile-logo.png";
import moonIcon from "../../assets/images/moon.svg";
import sunIcon from "../../assets/images/sun.svg";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";

interface HeaderProps {
    onLogoClick: () => void;
    onMenuClick: () => void;
    onHomeClick: () => void;
    isSidebarOpen: boolean;
}

const Header = ({
    onLogoClick,
    onMenuClick,
    onHomeClick,
    isSidebarOpen,
}: HeaderProps) => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <button
                    type="button"
                    className={styles.menuButton}
                    onClick={onMenuClick}
                    aria-label={
                        isSidebarOpen
                            ? t("header.closeMenu")
                            : t("header.openMenu")
                    }
                    aria-expanded={isSidebarOpen}
                >
                    {isSidebarOpen ? "✕" : "☰"}
                </button>

                <Link
                    to="/"
                    className={styles.logoLink}
                    aria-label={t("header.home")}
                    onClick={onLogoClick}
                >
                    <picture>
                        <source
                            media="(max-width: 768px)"
                            srcSet={mobileLogo}
                        />

                        <img
                            src={logo}
                            alt="CalcNestHub"
                            className={styles.logo}
                            width={249}
                            height={150}
                        />
                    </picture>
                </Link>

                <div className={styles.headerActions}>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `${styles.homeLink} ${
                                isActive
                                    ? styles.homeLinkActive
                                    : ""
                            }`
                        }
                        onClick={onHomeClick}
                    >
                        {t("header.home")}
                    </NavLink>

                    <button
                        type="button"
                        className={`${styles.themeToggle} ${
                            theme === "dark" ? styles.dark : ""
                        }`}
                        onClick={toggleTheme}
                        aria-label={
                            theme === "light"
                                ? t("header.switchToDark")
                                : t("header.switchToLight")
                        }
                    >
                        <span className={styles.toggleTrack}>
                            <span className={styles.toggleIcon}>
                                <img
                                    src={sunIcon}
                                    alt=""
                                    className={styles.sunIcon}
                                />

                                <img
                                    src={moonIcon}
                                    alt=""
                                    className={styles.moonIcon}
                                />
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;