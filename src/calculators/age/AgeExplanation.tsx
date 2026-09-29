import { useState } from "react";

import { useTranslation } from "react-i18next";

import Accordion from "../../components/Accordion/Accordion";

import styles from "./AgeExplanation.module.css";

const AgeExplanation = () => {
    const { t } = useTranslation();

    const [openFaqId, setOpenFaqId] =
        useState<number | null>(1);

    return (
        <article className={styles.explanation}>
            <h2>
                {t(
                    "calculators.age.explanation.title"
                )}
            </h2>

            <p>
                {t(
                    "calculators.age.explanation.intro1"
                )}
            </p>

            <p>
                {t(
                    "calculators.age.explanation.intro2"
                )}
            </p>

            <h3>
                {t(
                    "calculators.age.explanation.formulaTitle"
                )}
            </h3>

            <p className={styles.formula}>
                {t(
                    "calculators.age.explanation.formula"
                )}
            </p>

            <p>
                {t(
                    "calculators.age.explanation.where"
                )}
            </p>

            <h3>
                {t(
                    "calculators.age.explanation.exampleTitle"
                )}
            </h3>

            <p>
                {t(
                    "calculators.age.explanation.exampleIntro"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.age.explanation.exampleResult"
                )}
            </p>

            <p>
                {t(
                    "calculators.age.explanation.totalDaysExplanation"
                )}
            </p>

            <h3>
                {t(
                    "calculators.age.explanation.birthdayTitle"
                )}
            </h3>

            <p>
                {t(
                    "calculators.age.explanation.birthdayExplanation"
                )}
            </p>

            <h3>
                {t(
                    "calculators.age.explanation.stepsTitle"
                )}
            </h3>

            <ol>
                <li>
                    {t(
                        "calculators.age.explanation.step1"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.age.explanation.step2"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.age.explanation.step3"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.age.explanation.step4"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.age.explanation.step5"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.age.explanation.step6"
                    )}
                </li>
            </ol>

            <h3>
                {t(
                    "calculators.age.explanation.faqTitle"
                )}
            </h3>

            {(
                t(
                    "calculators.age.explanation.faqs",
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

export default AgeExplanation;