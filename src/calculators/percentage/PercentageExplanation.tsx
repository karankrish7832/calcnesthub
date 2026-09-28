import { useState } from "react";

import { useTranslation } from "react-i18next";

import Accordion from "../../components/Accordion/Accordion";

import styles from "./PercentageExplanation.module.css";

const PercentageExplanation = () => {
    const { t } = useTranslation();

    const [openFaqId, setOpenFaqId] =
        useState<number | null>(1);

    return (
        <article className={styles.explanation}>
            <h2>
                {t(
                    "calculators.percentage.explanation.title"
                )}
            </h2>

            <p>
                {t(
                    "calculators.percentage.explanation.intro1"
                )}
            </p>

            <p>
                {t(
                    "calculators.percentage.explanation.intro2"
                )}
            </p>

            <h3>
                {t(
                    "calculators.percentage.explanation.formulaTitle"
                )}
            </h3>

            <h4>
                {t(
                    "calculators.percentage.explanation.percentageOfTitle"
                )}
            </h4>

            <p className={styles.formula}>
                {t(
                    "calculators.percentage.explanation.percentageOfFormula"
                )}
            </p>

            <p>
                {t(
                    "calculators.percentage.explanation.percentageOfExample"
                )}
            </p>

            <h4>
                {t(
                    "calculators.percentage.explanation.whatPercentageTitle"
                )}
            </h4>

            <p className={styles.formula}>
                {t(
                    "calculators.percentage.explanation.whatPercentageFormula"
                )}
            </p>

            <p>
                {t(
                    "calculators.percentage.explanation.whatPercentageExample"
                )}
            </p>

            <h4>
                {t(
                    "calculators.percentage.explanation.increaseTitle"
                )}
            </h4>

            <p className={styles.formula}>
                {t(
                    "calculators.percentage.explanation.increaseFormula"
                )}
            </p>

            <p>
                {t(
                    "calculators.percentage.explanation.increaseExample"
                )}
            </p>

            <h4>
                {t(
                    "calculators.percentage.explanation.decreaseTitle"
                )}
            </h4>

            <p className={styles.formula}>
                {t(
                    "calculators.percentage.explanation.decreaseFormula"
                )}
            </p>

            <p>
                {t(
                    "calculators.percentage.explanation.decreaseExample"
                )}
            </p>

            <h3>
                {t(
                    "calculators.percentage.explanation.stepsTitle"
                )}
            </h3>

            <ol>
                <li>
                    {t(
                        "calculators.percentage.explanation.step1"
                    )}
                </li>
                <li>
                    {t(
                        "calculators.percentage.explanation.step2"
                    )}
                </li>
                <li>
                    {t(
                        "calculators.percentage.explanation.step3"
                    )}
                </li>
                <li>
                    {t(
                        "calculators.percentage.explanation.step4"
                    )}
                </li>
                <li>
                    {t(
                        "calculators.percentage.explanation.step5"
                    )}
                </li>
            </ol>

            <h3>
                {t(
                    "calculators.percentage.explanation.faqTitle"
                )}
            </h3>

            {(
                t(
                    "calculators.percentage.explanation.faqs",
                    {
                        returnObjects: true,
                    }
                ) as {
                    question: string;
                    answer: string;
                    id: number;
                }[]
            ).map((faq) => (
                <Accordion
                    key={faq.question}
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

export default PercentageExplanation;