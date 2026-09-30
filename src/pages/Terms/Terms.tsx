import { useEffect } from "react";

import { useTranslation } from "react-i18next";

import styles from "./Terms.module.css";

const Terms = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `${t("terms.title")} – CalcNestHub`;
    }, [t]);

    return (
        <article className={styles.page}>
            <h1>{t("terms.title")}</h1>

            <p className={styles.updated}>
                {t("terms.lastUpdated")}
            </p>

            <section>
                <h2>
                    {t(
                        "terms.acceptanceOfTerms.title"
                    )}
                </h2>

                <p>
                    {t(
                        "terms.acceptanceOfTerms.paragraph"
                    )}
                </p>
            </section>

            <section>
                <h2>
                    {t(
                        "terms.useOfCalculators.title"
                    )}
                </h2>

                <p>
                    {t(
                        "terms.useOfCalculators.paragraph1"
                    )}
                </p>

                <p>
                    {t(
                        "terms.useOfCalculators.paragraph2"
                    )}
                </p>
            </section>

            <section>
                <h2>
                    {t(
                        "terms.financialInformation.title"
                    )}
                </h2>

                <p>
                    {t(
                        "terms.financialInformation.paragraph1"
                    )}
                </p>

                <p>
                    {t(
                        "terms.financialInformation.paragraph2"
                    )}
                </p>
            </section>

            <section>
                <h2>
                    {t(
                        "terms.healthInformation.title"
                    )}
                </h2>

                <p>
                    {t(
                        "terms.healthInformation.paragraph1"
                    )}
                </p>

                <p>
                    {t(
                        "terms.healthInformation.paragraph2"
                    )}
                </p>
            </section>

            <section>
                <h2>
                    {t(
                        "terms.userResponsibility.title"
                    )}
                </h2>

                <p>
                    {t(
                        "terms.userResponsibility.paragraph1"
                    )}
                </p>

                <p>
                    {t(
                        "terms.userResponsibility.paragraph2"
                    )}
                </p>
            </section>

            <section>
                <h2>{t("terms.accuracy.title")}</h2>

                <p>
                    {t("terms.accuracy.paragraph")}
                </p>
            </section>

            <section>
                <h2>
                    {t(
                        "terms.prohibitedUse.title"
                    )}
                </h2>

                <p>
                    {t(
                        "terms.prohibitedUse.paragraph"
                    )}
                </p>
            </section>

            <section>
                <h2>
                    {t(
                        "terms.intellectualProperty.title"
                    )}
                </h2>

                <p>
                    {t(
                        "terms.intellectualProperty.paragraph"
                    )}
                </p>
            </section>

            <section>
                <h2>
                    {t(
                        "terms.thirdPartyServices.title"
                    )}
                </h2>

                <p>
                    {t(
                        "terms.thirdPartyServices.paragraph"
                    )}
                </p>
            </section>

            <section>
                <h2>
                    {t("terms.availability.title")}
                </h2>

                <p>
                    {t(
                        "terms.availability.paragraph"
                    )}
                </p>
            </section>

            <section>
                <h2>
                    {t(
                        "terms.limitationOfLiability.title"
                    )}
                </h2>

                <p>
                    {t(
                        "terms.limitationOfLiability.paragraph"
                    )}
                </p>
            </section>

            <section>
                <h2>
                    {t(
                        "terms.changesToTerms.title"
                    )}
                </h2>

                <p>
                    {t(
                        "terms.changesToTerms.paragraph"
                    )}
                </p>
            </section>

            <section>
                <h2>{t("terms.contact.title")}</h2>

                <p>
                    {t("terms.contact.paragraph")}
                </p>
            </section>
        </article>
    );
};

export default Terms;