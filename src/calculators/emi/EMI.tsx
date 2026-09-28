import { useState } from "react";

import { useTranslation } from "react-i18next";

import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import ResultCard from "../../components/ResultCard/ResultCard";

import { useCountry } from "../../context/CountryContext";
import { useLocalizedNumberInput } from "../../hooks/useLocalizedNumberInput";

import { formatCurrency } from "../../utils/formatCurrency";
import { getCurrencyFormatInfo } from "../../utils/currencyFormat";

import EMIExplanation from "./EMIExplanation";

import type {
    EMIForm,
    EMIResult,
} from "./emi.types";

import { calculateEMI, formatEMIDuration } from "./emi.utils";

import {
    validateEMI,
} from "./emi.validation";

import styles from "./EMI.module.css";

const initialValues: EMIForm = {
    loanAmount: "",
    interestRate: "",
    years: "",
    months: "",
};

const EMI = () => {
    const { t } = useTranslation();
    const { country } = useCountry();

    const currencyFormat =
        getCurrencyFormatInfo(country);

    const [values, setValues] =
        useState<EMIForm>(initialValues);

    const [errors, setErrors] =
        useState<ReturnType<typeof validateEMI>>({});

    const [result, setResult] =
        useState<EMIResult | null>(null);

    const currencyAffix =
        currencyFormat.currencyPosition === "prefix"
            ? `${currencyFormat.currencySymbol}${currencyFormat.currencySpacing}`
            : `${currencyFormat.currencySpacing}${currencyFormat.currencySymbol}`;

    const loanAmountInput =
        useLocalizedNumberInput({
            value: values.loanAmount,
            locale: country.locale,
            onChange: (value) => {
                setValues((current) => ({
                    ...current,
                    loanAmount: value,
                }));

                setErrors((current) => ({
                    ...current,
                    loanAmount: undefined,
                }));
            },
        });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } =
            event.target;

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

        const validationErrors =
            validateEMI(values);

        setErrors(validationErrors);

        if (
            Object.keys(validationErrors)
                .length > 0
        ) {
            setResult(null);
            return;
        }

        const calculationResult =
            calculateEMI(values);

        setResult(calculationResult);
    };

    const handleReset = () => {
        setValues(initialValues);
        setErrors({});
        setResult(null);
    };

    return (
        <div className={styles.page}>
            <section className={styles.calculator}>
                <div className={styles.header}>
                    <h1>
                        {t(
                            "calculators.emi.title"
                        )}
                    </h1>

                    <p>
                        {t(
                            "calculators.emi.description"
                        )}
                    </p>
                </div>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <InputField
                        id="loanAmount"
                        name="loanAmount"
                        label={t(
                            "calculators.emi.loanAmount"
                        )}
                        placeholder={t(
                            "calculators.emi.enterAmount"
                        )}
                        type="text"
                        inputMode="decimal"
                        prefix={
                            currencyFormat.currencyPosition ===
                            "prefix"
                                ? currencyAffix
                                : undefined
                        }
                        suffix={
                            currencyFormat.currencyPosition ===
                            "suffix"
                                ? currencyAffix
                                : undefined
                        }
                        value={
                            loanAmountInput.displayValue
                        }
                        onChange={
                            loanAmountInput.handleChange
                        }
                        error={
                            errors.loanAmount
                                ? t(
                                      errors.loanAmount
                                  )
                                : undefined
                        }
                    />

                    <InputField
                        id="interestRate"
                        name="interestRate"
                        label={t(
                            "calculators.emi.interestRate"
                        )}
                        placeholder={t(
                            "calculators.emi.enterRate"
                        )}
                        type="number"
                        min="0"
                        step="0.01"
                        suffix="%"
                        value={
                            values.interestRate
                        }
                        onChange={handleChange}
                        error={
                            errors.interestRate
                                ? t(
                                      errors.interestRate
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
                                "calculators.emi.loanTenure"
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
                                    "calculators.emi.years"
                                )}
                                placeholder={t(
                                    "calculators.emi.enterYears"
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
                                    "calculators.emi.months"
                                )}
                                placeholder={t(
                                    "calculators.emi.enterMonths"
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

                    <div
                        className={styles.actions}
                    >
                        <Button type="submit">
                            {t(
                                "calculators.emi.calculate"
                            )}
                        </Button>

                        <Button
                            type="button"
                            variant="secondary"
                            onClick={
                                handleReset
                            }
                        >
                            {t(
                                "calculators.emi.reset"
                            )}
                        </Button>
                    </div>
                </form>

                {result && (
                    <ResultCard
                        results={[
                            {
                                label: t(
                                    "calculators.emi.monthlyEmi"
                                ),
                                value: formatCurrency(
                                    result.emi,
                                    country
                                ),
                            },
                            {
                                label: t(
                                    "calculators.emi.totalInterest"
                                ),
                                value: formatCurrency(
                                    result.totalInterest,
                                    country
                                ),
                            },
                            {
                                label: t(
                                    "calculators.emi.totalPayment"
                                ),
                                value: formatCurrency(
                                    result.totalPayment,
                                    country
                                ),
                            },
                            {
                                label: t(
                                    "calculators.emi.duration"
                                ),
                                value: formatEMIDuration(
                                    result.totalMonths,
                                    t(
                                        "calculators.emi.year"
                                    ),
                                    t(
                                        "calculators.emi.years"
                                    ),
                                    t(
                                        "calculators.emi.month"
                                    ),
                                    t(
                                        "calculators.emi.months"
                                    )
                                ),
                            },
                        ]}
                    />
                )}
            </section>

            <EMIExplanation />
        </div>
    );
};

export default EMI;