import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    const { t } = useTranslation();

    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copyright}>
                    © {currentYear} CalcNestHub.{" "}
                    {t("footer.allRightsReserved")}
                </p>

                <nav className={styles.links}>
                    <Link to="/privacy">
                        {t("footer.privacy")}
                    </Link>

                    <Link to="/terms">
                        {t("footer.terms")}
                    </Link>

                    <Link to="/contact">
                        {t("footer.contactUs")}
                    </Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;