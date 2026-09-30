import { useState } from "react";
import { useTranslation } from "react-i18next";
import Accordion from "../../components/Accordion/Accordion";
import styles from "./UnitConverterExplanation.module.css";

const UnitConverterExplanation = () => {
    const { t } = useTranslation();

    const [openFaq, setOpenFaq] = useState<number | null>(1);

    const faqs = t(
        "calculators.unitConverter.explanation.faqs",
        {
            returnObjects: true,
        }
    ) as {
        id: number;
        question: string;
        answer: string;
    }[];

    return (
        <section className={styles.explanation}>
            <h2>
                {t(
                    "calculators.unitConverter.explanation.title"
                )}
            </h2>

            <p>
                {t(
                    "calculators.unitConverter.explanation.intro1"
                )}
            </p>

            <p>
                {t(
                    "calculators.unitConverter.explanation.intro2"
                )}
            </p>

            <h3>
                {t(
                    "calculators.unitConverter.explanation.howItWorksTitle"
                )}
            </h3>

            <ol>
                <li>
                    {t(
                        "calculators.unitConverter.explanation.step1"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.unitConverter.explanation.step2"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.unitConverter.explanation.step3"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.unitConverter.explanation.step4"
                    )}
                </li>
            </ol>

            <h3>
                {t(
                    "calculators.unitConverter.explanation.exampleTitle"
                )}
            </h3>

            <p>
                {t(
                    "calculators.unitConverter.explanation.exampleIntro"
                )}
            </p>

            <div className={styles.formula}>
                {t(
                    "calculators.unitConverter.explanation.example"
                )}
            </div>

            <h3>
                {t(
                    "calculators.unitConverter.explanation.categoriesTitle"
                )}
            </h3>

            <ul>
                <li>
                    {t(
                        "calculators.unitConverter.explanation.length"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.unitConverter.explanation.weight"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.unitConverter.explanation.temperature"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.unitConverter.explanation.area"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.unitConverter.explanation.volume"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.unitConverter.explanation.time"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.unitConverter.explanation.speed"
                    )}
                </li>

                <li>
                    {t(
                        "calculators.unitConverter.explanation.data"
                    )}
                </li>
            </ul>

            <div className={styles.faq}>
                <h3>
                    {t(
                        "calculators.unitConverter.explanation.faqTitle"
                    )}
                </h3>

                <div className={styles.faqList}>
                    {faqs.map((faq) => (
                        <Accordion
                            key={faq.id}
                            title={faq.question}
                            exclusive
                            isOpen={
                                openFaq === faq.id
                            }
                            onToggle={() =>
                                setOpenFaq(
                                    openFaq === faq.id
                                        ? null
                                        : faq.id
                                )
                            }
                        >
                            <p>
                                {faq.answer}
                            </p>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UnitConverterExplanation;