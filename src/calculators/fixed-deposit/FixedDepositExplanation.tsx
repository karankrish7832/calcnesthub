import { useTranslation } from "react-i18next";
import Accordion from "../../components/Accordion/Accordion";
import styles from "./FixedDepositExplanation.module.css";
interface FixedDepositFAQ {
    id: string;
    question: string;
    answer: string;
}
const FixedDepositExplanation = () => {
    const { t } = useTranslation();
    const baseKey = "calculators.fixedDeposit.explanation";
    const faqs = t(`${baseKey}.faqs`, { returnObjects: true }) as FixedDepositFAQ[];
    return (
        <article className={styles.explanation}>
            <h2>{t(`${baseKey}.title`)}</h2>
            <p>{t(`${baseKey}.intro1`)}</p>
            <p>{t(`${baseKey}.intro2`)}</p>
            <h3>{t(`${baseKey}.formulaTitle`)}</h3>
            <div className={styles.formula}>{t(`${baseKey}.formula`)}</div>
            <p>{t(`${baseKey}.where`)}</p>
            <ul>
                <li>{t(`${baseKey}.principal`)}</li>
                <li>{t(`${baseKey}.rate`)}</li>
                <li>{t(`${baseKey}.compoundingFrequency`)}</li>
                <li>{t(`${baseKey}.time`)}</li>
            </ul>
            <h3>{t(`${baseKey}.exampleTitle`)}</h3>
            <p>{t(`${baseKey}.exampleIntro`)}</p>
            <ul>
                <li>{t(`${baseKey}.examplePrincipal`)}</li>
                <li>{t(`${baseKey}.exampleRate`)}</li>
                <li>{t(`${baseKey}.exampleTenure`)}</li>
                <li>{t(`${baseKey}.exampleMaturity`)}</li>
                <li>{t(`${baseKey}.exampleInterest`)}</li>
            </ul>
            <h3>{t(`${baseKey}.stepsTitle`)}</h3>
            <ol>
                <li>{t(`${baseKey}.step1`)}</li>
                <li>{t(`${baseKey}.step2`)}</li>
                <li>{t(`${baseKey}.step3`)}</li>
                <li>{t(`${baseKey}.step4`)}</li>
            </ol>
            <h3>{t(`${baseKey}.faqTitle`)}</h3>
            {Array.isArray(faqs) && faqs.map((faq) => (
                <Accordion key={faq.id} title={faq.question}>
                    <p>{faq.answer}</p>
                </Accordion>
            ))}
        </article>
    );
};
export default FixedDepositExplanation;