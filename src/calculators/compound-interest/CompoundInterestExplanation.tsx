import { useState } from "react";

import { useTranslation } from "react-i18next";

import Accordion from "../../components/Accordion/Accordion";

import styles from "./CompoundInterestExplanation.module.css";

const CompoundInterestExplanation = () => {
    const { t } = useTranslation();

    const [openFaqId, setOpenFaqId] =
        useState<number | null>(1);

    return (
        <article className={styles.explanation}>
            <h2>
                {t(
                    "calculators.compoundInterest.explanation.title"
                )}
            </h2>

            <p>
                {t(
                    "calculators.compoundInterest.explanation.intro1"
                )}
            </p>

            <p>
                {t(
                    "calculators.compoundInterest.explanation.intro2"
                )}
            </p>

            <h3>
                {t(
                    "calculators.compoundInterest.explanation.formulaTitle"
                )}
            </h3>

            <p className={styles.formula}>
                {t(
                    "calculators.compoundInterest.explanation.formula"
                )}
            </p>

            <p>
                {t(
                    "calculators.compoundInterest.explanation.where"
                )}
            </p>

            <ul>
                <li>
                    {t(
                        "calculators.compoundInterest.explanation.principal"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.rate"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.frequency"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.time"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.amount"
                    )}
                </li>
            </ul>

            <h3>
                {t(
                    "calculators.compoundInterest.explanation.interestTitle"
                )}
            </h3>

            <p>
                {t(
                    "calculators.compoundInterest.explanation.interestIntro"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.compoundInterest.explanation.interestFormula"
                )}
            </p>

            <h3>
                {t(
                    "calculators.compoundInterest.explanation.frequencyTitle"
                )}
            </h3>

            <p>
                {t(
                    "calculators.compoundInterest.explanation.frequencyIntro"
                )}
            </p>

            <ul>
                <li>
                    {t(
                        "calculators.compoundInterest.explanation.annually"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.semiAnnually"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.quarterly"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.monthly"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.daily"
                    )}
                </li>
            </ul>

            <h3>
                {t(
                    "calculators.compoundInterest.explanation.exampleTitle"
                )}
            </h3>

            <p>
                {t(
                    "calculators.compoundInterest.explanation.exampleIntro"
                )}
            </p>

            <ul>
                <li>
                    {t(
                        "calculators.compoundInterest.explanation.examplePrincipal"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.exampleRate"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.exampleTenure"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.exampleFrequency"
                    )}
                </li>
            </ul>

            <p>
                {t(
                    "calculators.compoundInterest.explanation.exampleFormulaIntro"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.compoundInterest.explanation.exampleFormula"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.compoundInterest.explanation.exampleAmount"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.compoundInterest.explanation.exampleInterest"
                )}
            </p>

            <h3>
                {t(
                    "calculators.compoundInterest.explanation.stepsTitle"
                )}
            </h3>

            <ol>
                <li>
                    {t(
                        "calculators.compoundInterest.explanation.step1"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.step2"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.step3"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.step4"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.compoundInterest.explanation.step5"
                    )}
                </li>
            </ol>

            <h3>
                {t(
                    "calculators.compoundInterest.explanation.faqTitle"
                )}
            </h3>

            {(
                t(
                    "calculators.compoundInterest.explanation.faqs",
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
                    isOpen={openFaqId === faq.id}
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

export default CompoundInterestExplanation;