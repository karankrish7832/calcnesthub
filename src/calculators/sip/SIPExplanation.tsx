import { useState } from "react";
import { useTranslation } from "react-i18next";
import Accordion from "../../components/Accordion/Accordion";
import styles from "./SIPExplanation.module.css";

const SIPExplanation = () => {
    const { t } = useTranslation();
    const [openFaqId, setOpenFaqId] = useState<number | null>(1);
    return (
        <article className={styles.explanation}>
            <h2>{t("calculators.sip.explanation.title")}</h2>
            <p>{t("calculators.sip.explanation.intro1")}</p>
            <p>{t("calculators.sip.explanation.intro2")}</p>
            <h3>{t("calculators.sip.explanation.formulaTitle")}</h3>
            <p className={styles.formula}>{t("calculators.sip.explanation.formula")}</p>
            <p>{t("calculators.sip.explanation.where")}</p>
            <ul>
                <li>{t("calculators.sip.explanation.monthlyInvestment")}</li>
                <li>{t("calculators.sip.explanation.monthlyRate")}</li>
                <li>{t("calculators.sip.explanation.numberOfPayments")}</li>
                <li>{t("calculators.sip.explanation.futureValue")}</li>
            </ul>
            <h3>{t("calculators.sip.explanation.exampleTitle")}</h3>
            <p>{t("calculators.sip.explanation.exampleIntro")}</p>
            <ul>
                <li>{t("calculators.sip.explanation.exampleInvestment")}</li>
                <li>{t("calculators.sip.explanation.exampleRate")}</li>
                <li>{t("calculators.sip.explanation.exampleTenure")}</li>
            </ul>
            <p>{t("calculators.sip.explanation.exampleFormulaIntro")}</p>
            <p className={styles.formula}>{t("calculators.sip.explanation.exampleFormula")}</p>
            <p>{t("calculators.sip.explanation.exampleTotalInvestment")}</p>
            <p className={styles.formula}>{t("calculators.sip.explanation.exampleReturns")}</p>
            <h3>{t("calculators.sip.explanation.stepsTitle")}</h3>
            <ol>
                <li>{t("calculators.sip.explanation.step1")}</li>
                <li>{t("calculators.sip.explanation.step2")}</li>
                <li>{t("calculators.sip.explanation.step3")}</li>
                <li>{t("calculators.sip.explanation.step4")}</li>
                <li>{t("calculators.sip.explanation.step5")}</li>
            </ol>
            <section>
                <h3>{t("calculators.sip.explanation.resultsTitle")}</h3>
                <p>{t("calculators.sip.explanation.resultsIntro")}</p>
                <h4>{t("calculators.sip.explanation.totalInvestmentTitle")}</h4>
                <p>{t("calculators.sip.explanation.totalInvestmentDescription")}</p>
                <h4>{t("calculators.sip.explanation.estimatedReturnsTitle")}</h4>
                <p>{t("calculators.sip.explanation.estimatedReturnsDescription")}</p>
                <h4>{t("calculators.sip.explanation.futureValueTitle")}</h4>
                <p>{t("calculators.sip.explanation.futureValueDescription")}</p>
                <div className={styles.formula}>
                    {t("calculators.sip.explanation.futureValueRelationship")}
                </div>
            </section>
            <h3>{t("calculators.sip.explanation.faqTitle")}</h3>
            {(t("calculators.sip.explanation.faqs", { returnObjects: true }) as { question: string; answer: string; id: number }[]).map((faq) => (
                <Accordion
                    key={faq.id}
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
export default SIPExplanation;