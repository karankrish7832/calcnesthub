import { useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "../../components/InputField/InputField";
import ResultCard from "../../components/ResultCard/ResultCard";
import { useCountry } from "../../context/CountryContext";
import { useLocalizedNumberInput } from "../../hooks/useLocalizedNumberInput";
import { formatCurrency } from "../../utils/formatCurrency";
import { getCurrencyFormatInfo } from "../../utils/currencyFormat";
import SimpleInterestExplanation from "./SimpleInterestExplanation";
import type {
    SimpleInterestForm,
    SimpleInterestResult,
    SimpleInterestErrors,
} from "./simpleInterest.types";
import { calculateSimpleInterest } from "./simpleInterest.utils";
import {
    validateSimpleInterest,
} from "./simpleInterest.validation";
import styles from "./SimpleInterest.module.css";

const initialValues: SimpleInterestForm = {
    principal: "",
    rate: "",
    years: "",
    months: "",
};

const SimpleInterest = () => {
    const { t } = useTranslation();
    const { country } = useCountry();
    const currencyFormat = getCurrencyFormatInfo(country);
    const [values, setValues] = useState<SimpleInterestForm>(initialValues);
    const [errors, setErrors] = useState<SimpleInterestErrors>({});
    const [result, setResult] = useState<SimpleInterestResult | null>(null);

    const currencyAffix =
        currencyFormat.currencyPosition === "prefix"
            ? `${currencyFormat.currencySymbol}${currencyFormat.currencySpacing}`
            : `${currencyFormat.currencySpacing}${currencyFormat.currencySymbol}`;

    const principalInput =
        useLocalizedNumberInput({
            value: values.principal,
            locale: country.locale,
            onChange: (value) => {
                setValues((current) => ({
                    ...current,
                    principal: value,
                }));

                setErrors((current) => ({
                    ...current,
                    principal: undefined,
                }));
            },
        });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;

        setValues((current) => ({
            ...current,
            [name]: value,
        }));

        setErrors((current) => ({
            ...current,
            [name]: undefined,
            tenure: undefined,
        }));
    };

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const validationErrors = validateSimpleInterest(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            setResult(null);
            return;
        }

        const calculationResult = calculateSimpleInterest(values);
        setResult(calculationResult);
    };

    return (
        <div className={styles.page}>
            <section className={styles.calculator}>
                <div className={styles.header}>
                    <h1>
                        {t(
                            "calculators.simpleInterest.title"
                        )}
                    </h1>

                    <p>
                        {t(
                            "calculators.simpleInterest.description"
                        )}
                    </p>
                </div>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <InputField
                        id="principal"
                        name="principal"
                        label={t(
                            "calculators.simpleInterest.principalAmount"
                        )}
                        placeholder={t(
                            "calculators.simpleInterest.enterAmount"
                        )}
                        type="text"
                        inputMode="decimal"
                        prefix={
                            currencyFormat.currencyPosition === "prefix"
                                ? currencyAffix
                                : undefined
                        }
                        suffix={
                            currencyFormat.currencyPosition === "suffix"
                                ? currencyAffix
                                : undefined
                        }
                        value={principalInput.displayValue}
                        onChange={principalInput.handleChange}
                        error={
                            errors.principal
                                ? t(
                                      errors.principal
                                  )
                                : undefined
                        }
                    />

                    <InputField
                        id="rate"
                        name="rate"
                        label={t(
                            "calculators.simpleInterest.interestRate"
                        )}
                        placeholder={t(
                            "calculators.simpleInterest.enterRate"
                        )}
                        type="number"
                        min="0"
                        step="any"
                        suffix="%"
                        value={values.rate}
                        onChange={handleChange}
                        error={
                            errors.rate
                                ? t(
                                      errors.rate
                                  )
                                : undefined
                        }
                    />

                    <fieldset
                        className={
                            styles.tenureField
                        }
                    >
                        <legend>
                            {t(
                                "calculators.simpleInterest.timePeriod"
                            )}
                        </legend>

                        <div
                            className={
                                styles.tenureGroup
                            }
                        >
                            <InputField
                                id="years"
                                name="years"
                                label={t(
                                    "calculators.simpleInterest.years"
                                )}
                                placeholder={t(
                                    "calculators.simpleInterest.enterYears"
                                )}
                                type="number"
                                min="0"
                                step="1"
                                value={values.years}
                                onChange={handleChange}
                                error={
                                    errors.years
                                        ? t(
                                              errors.years
                                          )
                                        : undefined
                                }
                            />

                            <InputField
                                id="months"
                                name="months"
                                label={t(
                                    "calculators.simpleInterest.months"
                                )}
                                placeholder={t(
                                    "calculators.simpleInterest.enterMonths"
                                )}
                                type="number"
                                min="0"
                                step="1"
                                value={
                                    values.months
                                }
                                onChange={handleChange}
                                error={
                                    errors.months
                                        ? t(
                                              errors.months
                                          )
                                        : undefined
                                }
                            />
                        </div>

                        {errors.tenure && (
                            <p
                                className={
                                    styles.error
                                }
                            >
                                {t(
                                    errors.tenure
                                )}
                            </p>
                        )}
                    </fieldset>

                    <button
                        className={
                            styles.calculateButton
                        }
                        type="submit"
                    >
                        {t(
                            "calculators.simpleInterest.calculateInterest"
                        )}
                    </button>
                </form>

                {result && (
                    <ResultCard
                        results={[
                            {
                                label: t(
                                    "calculators.simpleInterest.simpleInterest"
                                ),
                                value: formatCurrency(
                                    result.interest,
                                    country
                                ),
                            },
                            {
                                label: t(
                                    "calculators.simpleInterest.totalAmount"
                                ),
                                value: formatCurrency(
                                    result.totalAmount,
                                    country
                                ),
                            },
                        ]}
                    />
                )}
            </section>

            <SimpleInterestExplanation />
        </div>
    );
};

export default SimpleInterest;