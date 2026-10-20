import { useState } from "react";
import { useTranslation } from "react-i18next";
import Accordion from "../../components/Accordion/Accordion";
import styles from "./LoanExplanation.module.css";

const LoanExplanation = () => {
    const { t } = useTranslation();
    const [openFaqId, setOpenFaqId] = useState<number | null>(1);
    return (
        <article className={styles.explanation}>
            <h2>{t("calculators.loan.explanation.title")}</h2>
            <p>{t("calculators.loan.explanation.intro1")}</p>
            <p>{t("calculators.loan.explanation.intro2")}</p>
            <h3>{t("calculators.loan.explanation.formulaTitle")}</h3>
            <p className={styles.formula}>{t("calculators.loan.explanation.formula")}</p>
            <p>{t("calculators.loan.explanation.where")}</p>
            <ul>
                <li>{t("calculators.loan.explanation.principal")}</li>
                <li>{t("calculators.loan.explanation.rate")}</li>
                <li>{t("calculators.loan.explanation.monthlyRate")}</li>
                <li>{t("calculators.loan.explanation.numberOfPayments")}</li>
                <li>{t("calculators.loan.explanation.monthlyPayment")}</li>
            </ul>
            <p>{t("calculators.loan.explanation.totalPaymentIntro")}</p>
            <p className={styles.formula}>{t("calculators.loan.explanation.totalPaymentFormula")}</p>
            <p>{t("calculators.loan.explanation.totalInterestIntro")}</p>
            <p className={styles.formula}>{t("calculators.loan.explanation.totalInterestFormula")}</p>
            <h3>{t("calculators.loan.explanation.exampleTitle")}</h3>
            <p>{t("calculators.loan.explanation.exampleIntro")}</p>
            <ul>
                <li>{t("calculators.loan.explanation.examplePrincipal")}</li>
                <li>{t("calculators.loan.explanation.exampleRate")}</li>
                <li>{t("calculators.loan.explanation.exampleTenure")}</li>
            </ul>
            <p>{t("calculators.loan.explanation.exampleFormulaIntro")}</p>
            <p className={styles.formula}>{t("calculators.loan.explanation.exampleFormula")}</p>
            <p>{t("calculators.loan.explanation.exampleInterest")}</p>
            <p className={styles.formula}>{t("calculators.loan.explanation.exampleTotal")}</p>
            <h3>{t("calculators.loan.explanation.stepsTitle")}</h3>
            <ol>
                <li>{t("calculators.loan.explanation.step1")}</li>
                <li>{t("calculators.loan.explanation.step2")}</li>
                <li>{t("calculators.loan.explanation.step3")}</li>
                <li>{t("calculators.loan.explanation.step4")}</li>
                <li>{t("calculators.loan.explanation.step5")}</li>
            </ol>
            <h3>{t("calculators.loan.explanation.faqTitle")}</h3>
            {(t("calculators.loan.explanation.faqs", { returnObjects: true }) as { question: string; answer: string; id: number }[]).map((faq) => (
                <Accordion
                    key={faq.question}
                    title={faq.question}
                    exclusive
                    isOpen={openFaqId === faq.id}
                    onToggle={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                >
                    <p>{faq.answer}</p>
                </Accordion>
            ))}
        </article>
    );
};
export default LoanExplanation;