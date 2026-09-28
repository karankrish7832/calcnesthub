import { useState } from "react";

import { useTranslation } from "react-i18next";

import Accordion from "../../components/Accordion/Accordion";

import styles from "./BMIExplanation.module.css";

const BMIExplanation = () => {
    const { t } = useTranslation();

    const [openFaqId, setOpenFaqId] =
        useState<number | null>(1);

    return (
        <article className={styles.explanation}>
            <h2>
                {t(
                    "calculators.bmi.explanation.title"
                )}
            </h2>

            <p>
                {t(
                    "calculators.bmi.explanation.intro1"
                )}
            </p>

            <p>
                {t(
                    "calculators.bmi.explanation.intro2"
                )}
            </p>

            <h3>
                {t(
                    "calculators.bmi.explanation.formulaTitle"
                )}
            </h3>

            <p className={styles.formula}>
                {t(
                    "calculators.bmi.explanation.metricFormula"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.bmi.explanation.imperialFormula"
                )}
            </p>

            <p>
                {t(
                    "calculators.bmi.explanation.where"
                )}
            </p>

            <ul>
                <li>
                    {t(
                        "calculators.bmi.explanation.weight"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.bmi.explanation.height"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.bmi.explanation.bmi"
                    )}
                </li>
            </ul>

            <h3>
                {t(
                    "calculators.bmi.explanation.categoriesTitle"
                )}
            </h3>

            <ul>
                <li>
                    {t(
                        "calculators.bmi.explanation.underweight"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.bmi.explanation.normal"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.bmi.explanation.overweight"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.bmi.explanation.obesity"
                    )}
                </li>
            </ul>

            <h3>
                {t(
                    "calculators.bmi.explanation.childCategoriesTitle"
                )}
            </h3>

            <p>
                {t(
                    "calculators.bmi.explanation.childExplanation"
                )}
            </p>

            <ul>
                <li>
                    {t(
                        "calculators.bmi.explanation.childUnderweight"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.bmi.explanation.childHealthyWeight"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.bmi.explanation.childOverweight"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.bmi.explanation.childObesity"
                    )}
                </li>
            </ul>

            <h3>
                {t(
                    "calculators.bmi.explanation.exampleTitle"
                )}
            </h3>

            <p>
                {t(
                    "calculators.bmi.explanation.exampleIntro"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.bmi.explanation.exampleFormula"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.bmi.explanation.exampleResult"
                )}
            </p>

            <p>
                {t(
                    "calculators.bmi.explanation.exampleCategory"
                )}
            </p>

            <h3>
                {t(
                    "calculators.bmi.explanation.stepsTitle"
                )}
            </h3>

            <ol>
                <li>
                    {t(
                        "calculators.bmi.explanation.step1"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.bmi.explanation.step2"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.bmi.explanation.step3"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.bmi.explanation.step4"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.bmi.explanation.step5"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.bmi.explanation.step6"
                    )}
                </li>
            </ol>

            <h3>
                {t(
                    "calculators.bmi.explanation.faqTitle"
                )}
            </h3>

            {(
                t(
                    "calculators.bmi.explanation.faqs",
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

export default BMIExplanation;