import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import BasicCalculator from "../../calculators/BasicCalculator/BasicCalculator";

import styles from "./Home.module.css";

const Home = () => {
    const { t } = useTranslation();

    const popularCalculators = [
        {
            name: t(
                "home.popularCalculators.simpleInterest.name"
            ),
            description: t(
                "home.popularCalculators.simpleInterest.description"
            ),
            path: "/calculators/simple-interest",
        },
        {
            name: t(
                "home.popularCalculators.compoundInterest.name"
            ),
            description: t(
                "home.popularCalculators.compoundInterest.description"
            ),
            path: "/calculators/compound-interest",
        },
        {
            name: t(
                "home.popularCalculators.emi.name"
            ),
            description: t(
                "home.popularCalculators.emi.description"
            ),
            path: "/calculators/emi",
        },
        {
            name: t(
                "home.popularCalculators.bmi.name"
            ),
            description: t(
                "home.popularCalculators.bmi.description"
            ),
            path: "/calculators/bmi",
        },
        {
            name: t(
                "home.popularCalculators.age.name"
            ),
            description: t(
                "home.popularCalculators.age.description"
            ),
            path: "/calculators/age",
        },
        {
            name: t(
                "home.popularCalculators.unitConverter.name"
            ),
            description: t(
                "home.popularCalculators.unitConverter.description"
            ),
            path: "/calculators/unit-converter",
        },
    ];

    const categories = [
        {
            name: t(
                "home.categories.financial.name"
            ),
            description: t(
                "home.categories.financial.description"
            ),
            path: "/calculators/simple-interest",
        },
        {
            name: t(
                "home.categories.math.name"
            ),
            description: t(
                "home.categories.math.description"
            ),
            path: "/calculators/average",
        },
        {
            name: t(
                "home.categories.health.name"
            ),
            description: t(
                "home.categories.health.description"
            ),
            path: "/calculators/bmi",
        },
        {
            name: t(
                "home.categories.everyday.name"
            ),
            description: t(
                "home.categories.everyday.description"
            ),
            path: "/calculators/unit-converter",
        },
    ];

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <p className={styles.eyebrow}>
                        {t("home.hero.eyebrow")}
                    </p>

                    <h1>
                        {t("home.hero.title")}
                    </h1>

                    <p className={styles.heroDescription}>
                        {t("home.hero.description")}
                    </p>

                    <div className={styles.heroActions}>
                        <Link
                            to="/calculators/simple-interest"
                            className={styles.primaryButton}
                        >
                            {t(
                                "home.hero.exploreCalculators"
                            )}
                        </Link>

                        <a
                            href="#basic-calculator"
                            className={styles.secondaryButton}
                        >
                            {t(
                                "home.hero.tryBasicCalculator"
                            )}
                        </a>
                    </div>
                </div>
            </section>

            <section
                id="basic-calculator"
                className={styles.calculatorSection}
            >
                <div className={styles.sectionHeader}>
                    <h2>
                        {t("home.basicCalculator.title")}
                    </h2>

                    <p>
                        {t(
                            "home.basicCalculator.description"
                        )}
                    </p>
                </div>

                <BasicCalculator />
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <p className={styles.eyebrow}>
                        {t(
                            "home.popularCalculators.eyebrow"
                        )}
                    </p>

                    <h2>
                        {t(
                            "home.popularCalculators.title"
                        )}
                    </h2>

                    <p>
                        {t(
                            "home.popularCalculators.description"
                        )}
                    </p>
                </div>

                <div className={styles.calculatorGrid}>
                    {popularCalculators.map(
                        (calculator) => (
                            <Link
                                key={calculator.path}
                                to={calculator.path}
                                className={
                                    styles.calculatorCard
                                }
                            >
                                <h3>
                                    {calculator.name}
                                </h3>

                                <p>
                                    {
                                        calculator.description
                                    }
                                </p>

                                <span>
                                    {t(
                                        "home.common.useCalculator"
                                    )}
                                </span>
                            </Link>
                        )
                    )}
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <p className={styles.eyebrow}>
                        {t(
                            "home.categories.eyebrow"
                        )}
                    </p>

                    <h2>
                        {t(
                            "home.categories.title"
                        )}
                    </h2>
                </div>

                <div className={styles.categoryGrid}>
                    {categories.map(
                        (category) => (
                            <Link
                                key={category.name}
                                to={category.path}
                                className={
                                    styles.categoryCard
                                }
                            >
                                <h3>
                                    {category.name}
                                </h3>

                                <p>
                                    {
                                        category.description
                                    }
                                </p>

                                <span>
                                    {t(
                                        "home.common.explore"
                                    )}
                                </span>
                            </Link>
                        )
                    )}
                </div>
            </section>

            <section className={styles.featuresSection}>
                <div className={styles.sectionHeader}>
                    <p className={styles.eyebrow}>
                        {t(
                            "home.features.eyebrow"
                        )}
                    </p>

                    <h2>
                        {t(
                            "home.features.title"
                        )}
                    </h2>
                </div>

                <div className={styles.featureGrid}>
                    <article className={styles.featureCard}>
                        <h3>
                            {t(
                                "home.features.free.title"
                            )}
                        </h3>

                        <p>
                            {t(
                                "home.features.free.description"
                            )}
                        </p>
                    </article>

                    <article className={styles.featureCard}>
                        <h3>
                            {t(
                                "home.features.fast.title"
                            )}
                        </h3>

                        <p>
                            {t(
                                "home.features.fast.description"
                            )}
                        </p>
                    </article>

                    <article className={styles.featureCard}>
                        <h3>
                            {t(
                                "home.features.simple.title"
                            )}
                        </h3>

                        <p>
                            {t(
                                "home.features.simple.description"
                            )}
                        </p>
                    </article>

                    <article className={styles.featureCard}>
                        <h3>
                            {t(
                                "home.features.mobile.title"
                            )}
                        </h3>

                        <p>
                            {t(
                                "home.features.mobile.description"
                            )}
                        </p>
                    </article>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <h2>
                    {t("home.cta.title")}
                </h2>

                <p>
                    {t("home.cta.description")}
                </p>

                <Link
                    to="/calculators/simple-interest"
                    className={styles.primaryButton}
                >
                    {t(
                        "home.cta.button"
                    )}
                </Link>
            </section>
        </main>
    );
};

export default Home;