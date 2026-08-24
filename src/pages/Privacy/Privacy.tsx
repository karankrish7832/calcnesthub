import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Privacy.module.css";

const Privacy = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `${t("privacy.title")} – CalcNestHub`;
    }, [t]);

    return (
        <article className={styles.page}>
            <h1>{t("privacy.title")}</h1>

            <p className={styles.updated}>
                {t("privacy.lastUpdated")}
            </p>

            <section>
                <h2>{t("privacy.introduction.title")}</h2>

                <p>
                    {t("privacy.introduction.paragraph1")}
                </p>

                <p>
                    {t("privacy.introduction.paragraph2")}
                </p>
            </section>

            <section>
                <h2>
                    {t("privacy.informationWeCollect.title")}
                </h2>

                <p>
                    {t(
                        "privacy.informationWeCollect.paragraph1"
                    )}
                </p>

                <p>
                    {t(
                        "privacy.informationWeCollect.paragraph2"
                    )}
                </p>

                <p>
                    {t(
                        "privacy.informationWeCollect.paragraph3"
                    )}
                </p>
            </section>

            <section>
                <h2>{t("privacy.calculatorData.title")}</h2>

                <p>
                    {t("privacy.calculatorData.paragraph")}
                </p>
            </section>

            <section>
                <h2>{t("privacy.countryAndPreferences.title")}</h2>

                <p>
                    {t(
                        "privacy.countryAndPreferences.paragraph1"
                    )}
                </p>

                <p>
                    {t(
                        "privacy.countryAndPreferences.paragraph2"
                    )}
                </p>

                <p>
                    {t(
                        "privacy.countryAndPreferences.paragraph3"
                    )}
                </p>

                <p>
                    {t(
                        "privacy.countryAndPreferences.paragraph4"
                    )}
                </p>
            </section>

            <section>
                <h2>{t("privacy.googleAnalytics.title")}</h2>

                <p>
                    {t("privacy.googleAnalytics.paragraph1")}
                </p>

                <p>
                    {t("privacy.googleAnalytics.paragraph2")}
                </p>

                <p>
                    {t("privacy.googleAnalytics.paragraph3")}
                </p>

                <p>
                    {t("privacy.googleAnalytics.paragraph4")}{" "}
                    <a
                        href="https://policies.google.com/technologies/partner-sites"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("privacy.googleAnalytics.googleLink")}
                    </a>
                    .
                </p>

                <p>
                    {t("privacy.googleAnalytics.paragraph5")}
                </p>
            </section>

            <section>
                <h2>
                    {t("privacy.thirdPartyServices.title")}
                </h2>

                <p>
                    {t(
                        "privacy.thirdPartyServices.paragraph1"
                    )}
                </p>

                <p>
                    {t(
                        "privacy.thirdPartyServices.paragraph2"
                    )}
                </p>
            </section>

            <section>
                <h2>
                    {t("privacy.changesToPolicy.title")}
                </h2>

                <p>
                    {t("privacy.changesToPolicy.paragraph")}
                </p>
            </section>

            <section>
                <h2>{t("privacy.contact.title")}</h2>

                <p>
                    {t("privacy.contact.paragraph")}
                </p>
            </section>
        </article>
    );
};

export default Privacy;