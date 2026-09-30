import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";

const CONTACT_EMAIL = "calcnesthub@gmail.com";

const Contact = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `${t("contact.title")} – CalcNestHub`;
    }, [t]);

    return (
        <article className={styles.page}>
            <header className={styles.header}>
                <h1>{t("contact.title")}</h1>

                <p>
                    {t("contact.description")}
                </p>
            </header>

            <section className={styles.section}>
                <h2>{t("contact.getInTouch")}</h2>

                <p>{t("contact.message")}</p>

                <a
                    className={styles.email}
                    href={`mailto:${CONTACT_EMAIL}`}
                >
                    {CONTACT_EMAIL}
                </a>
            </section>

            <section className={styles.section}>
                <h2>{t("contact.feedbackTitle")}</h2>

                <p>{t("contact.feedbackDescription")}</p>
            </section>
        </article>
    );
};

export default Contact;