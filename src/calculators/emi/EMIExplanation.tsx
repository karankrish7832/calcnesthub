import { useState } from "react";

import { useTranslation } from "react-i18next";

import Accordion from "../../components/Accordion/Accordion";

import styles from "./EMIExplanation.module.css";

const EMIExplanation = () => {
    const { t } = useTranslation();

    const [openFaqId, setOpenFaqId] =
        useState<number | null>(1);

    return (
        <article className={styles.explanation}>
            <h2>
                {t(
                    "calculators.emi.explanation.title"
                )}
            </h2>

            <p>
                {t(
                    "calculators.emi.explanation.intro1"
                )}
            </p>

            <p>
                {t(
                    "calculators.emi.explanation.intro2"
                )}
            </p>

            <h3>
                {t(
                    "calculators.emi.explanation.formulaTitle"
                )}
            </h3>

            <p className={styles.formula}>
                {t(
                    "calculators.emi.explanation.formula"
                )}
            </p>

            <p>
                {t(
                    "calculators.emi.explanation.where"
                )}
            </p>

            <ul>
                <li>
                    {t(
                        "calculators.emi.explanation.principal"
                    )}
                </li>
                <li>
                    {t(
                        "calculators.emi.explanation.rate"
                    )}
                </li>
                <li>
                    {t(
                        "calculators.emi.explanation.monthlyRate"
                    )}
                </li>
                <li>
                    {t(
                        "calculators.emi.explanation.tenure"
                    )}
                </li>
                <li>
                    {t(
                        "calculators.emi.explanation.emi"
                    )}
                </li>
            </ul>

            <h3>
                {t(
                    "calculators.emi.explanation.interestTitle"
                )}
            </h3>

            <p>
                {t(
                    "calculators.emi.explanation.interestIntro"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.emi.explanation.totalPaymentFormula"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.emi.explanation.totalInterestFormula"
                )}
            </p>

            <h3>
                {t(
                    "calculators.emi.explanation.exampleTitle"
                )}
            </h3>

            <p>
                {t(
                    "calculators.emi.explanation.exampleIntro"
                )}
            </p>

            <ul>
                <li>
                    {t(
                        "calculators.emi.explanation.exampleLoan"
                    )}
                </li>
                <li>
                    {t(
                        "calculators.emi.explanation.exampleRate"
                    )}
                </li>
                <li>
                    {t(
                        "calculators.emi.explanation.exampleTenure"
                    )}
                </li>
            </ul>

            <p>
                {t(
                    "calculators.emi.explanation.exampleFormulaIntro"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.emi.explanation.exampleFormula"
                )}
            </p>

            <p>
                {t(
                    "calculators.emi.explanation.exampleEmi"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.emi.explanation.exampleTotalInterest"
                )}
            </p>

            <p className={styles.formula}>
                {t(
                    "calculators.emi.explanation.exampleTotalPayment"
                )}
            </p>

            <h3>
                {t(
                    "calculators.emi.explanation.stepsTitle"
                )}
            </h3>

            <ol>
                <li>
                    {t(
                        "calculators.emi.explanation.step1"
                    )}
                </li>
                <li>
                    {t(
                        "calculators.emi.explanation.step2"
                    )}
                </li>
                <li>
                    {t(
                        "calculators.emi.explanation.step3"
                    )}
                </li>
                <li>
                    {t(
                        "calculators.emi.explanation.step4"
                    )}
                </li>
                <li>
                    {t(
                        "calculators.emi.explanation.step5"
                    )}
                </li>
            </ol>

            <h3>
                {t(
                    "calculators.emi.explanation.faqTitle"
                )}
            </h3>

            {(
                t(
                    "calculators.emi.explanation.faqs",
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

export default EMIExplanation;