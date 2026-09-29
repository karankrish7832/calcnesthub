import { useState } from "react";

import { useTranslation } from "react-i18next";

import Accordion from "../../components/Accordion/Accordion";

import styles from "./AverageExplanation.module.css";

const AverageExplanation = () => {
    const { t } = useTranslation();

    const [openFaqId, setOpenFaqId] =
        useState<number | null>(1);

    return (
        <article className={styles.explanation}>
            <h2>
                {t(
                    "calculators.average.explanation.title"
                )}
            </h2>

            <p>
                {t(
                    "calculators.average.explanation.intro1"
                )}
            </p>

            <p>
                {t(
                    "calculators.average.explanation.intro2"
                )}
            </p>

            <h3>
                {t(
                    "calculators.average.explanation.formulaTitle"
                )}
            </h3>

            <p className={styles.formula}>
                {t(
                    "calculators.average.explanation.formula"
                )}
            </p>

            <p>
                {t(
                    "calculators.average.explanation.where"
                )}
            </p>

            <h3>
                {t(
                    "calculators.average.explanation.exampleTitle"
                )}
            </h3>

            <p>
                {t(
                    "calculators.average.explanation.exampleIntro"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.average.explanation.exampleResult"
                )}
            </p>

            <h3>
                {t(
                    "calculators.average.explanation.stepsTitle"
                )}
            </h3>

            <ol>
                <li>
                    {t(
                        "calculators.average.explanation.step1"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.average.explanation.step2"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.average.explanation.step3"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.average.explanation.step4"
                    )}
                </li>
            </ol>

            <h3>
                {t(
                    "calculators.average.explanation.faqTitle"
                )}
            </h3>

            {(
                t(
                    "calculators.average.explanation.faqs",
                    {
                        returnObjects: true,
                    }
                ) as {
                    id: number;
                    question: string;
                    answer: string;
                }[]
            ).map((faq) => (
                <Accordion
                    key={faq.id}
                    title={faq.question}
                    exclusive
                    isOpen={
                        openFaqId === faq.id
                    }
                    onToggle={() =>
                        setOpenFaqId(
                            openFaqId === faq.id
                                ? null
                                : faq.id
                        )
                    }
                >
                    <p>{faq.answer}</p>
                </Accordion>
            ))}
        </article>
    );
};

export default AverageExplanation;