import { useState } from "react";
import { useTranslation } from "react-i18next";
import InputField from "../../components/InputField/InputField";
import ResultCard from "../../components/ResultCard/ResultCard";
import { useCountry } from "../../context/CountryContext";
import { useLocalizedNumberInput } from "../../hooks/useLocalizedNumberInput";
import { formatCurrency } from "../../utils/formatCurrency";
import { getCurrencyFormatInfo } from "../../utils/currencyFormat";
import CompoundInterestExplanation from "./CompoundInterestExplanation";
import type {
    CompoundInterestErrors,
    CompoundInterestForm,
    CompoundInterestResult,
} from "./compoundInterest.types";
import { calculateCompoundInterest } from "./compoundInterest.utils";
import {
    validateCompoundInterest,
} from "./compoundInterest.validation";
import Dropdown from "../../components/Button/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import styles from "./CompoundInterest.module.css";

const initialValues: CompoundInterestForm = {
    principal: "",
    rate: "",
    years: "",
    months: "",
    frequency: "1",
};

const CompoundInterest = () => {
    const { t } = useTranslation();
    const { country } = useCountry();

    const currencyFormat =
        getCurrencyFormatInfo(country);

    const [values, setValues] =
        useState<CompoundInterestForm>(
            initialValues
        );

    const [errors, setErrors] =
        useState<CompoundInterestErrors>({});

    const [result, setResult] =
        useState<CompoundInterestResult | null>(
            null
        );

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
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
            ...(name === "years" || name === "months"
                ? { tenure: undefined }
                : {}),
        }));
    };

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const validationErrors =
            validateCompoundInterest(values);

        setErrors(validationErrors);

        if (
            Object.keys(validationErrors)
                .length > 0
        ) {
            setResult(null);
            return;
        }

        const calculationResult =
            calculateCompoundInterest(
                values
            );

        setResult(calculationResult);
    };

    const handleReset = () => {
        setValues(initialValues);
        setErrors({});
        setResult(null);
    };

    const formatDuration = (
        totalMonths: number
    ) => {
        const durationYears =
            Math.floor(totalMonths / 12);

        const durationMonths =
            totalMonths % 12;

        const parts: string[] = [];

        if (durationYears > 0) {
            const yearLabel =
                durationYears === 1
                    ? t(
                          "calculators.compoundInterest.year"
                      )
                    : t(
                          "calculators.compoundInterest.years"
                      );

            parts.push(
                `${durationYears} ${yearLabel}`
            );
        }

        if (durationMonths > 0) {
            const monthLabel =
                durationMonths === 1
                    ? t(
                          "calculators.compoundInterest.month"
                      )
                    : t(
                          "calculators.compoundInterest.months"
                      );

            parts.push(
                `${durationMonths} ${monthLabel}`
            );
        }

        return parts.join(" ");
    };

    return (
        <div className={styles.page}>
            <section className={styles.calculator}>
                <div className={styles.header}>
                    <h1>
                        {t(
                            "calculators.compoundInterest.title"
                        )}
                    </h1>

                    <p>
                        {t(
                            "calculators.compoundInterest.description"
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
                            "calculators.compoundInterest.principalAmount"
                        )}
                        placeholder={t(
                            "calculators.compoundInterest.enterAmount"
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
                            principalInput.displayValue
                        }
                        onChange={
                            principalInput.handleChange
                        }
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
                            "calculators.compoundInterest.interestRate"
                        )}
                        placeholder={t(
                            "calculators.compoundInterest.enterRate"
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
                                "calculators.compoundInterest.timePeriod"
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
                                    "calculators.compoundInterest.years"
                                )}
                                placeholder={t(
                                    "calculators.compoundInterest.enterYears"
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
                                    "calculators.compoundInterest.months"
                                )}
                                placeholder={t(
                                    "calculators.compoundInterest.enterMonths"
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

                    <Dropdown
                        id="frequency"
                        name="frequency"
                        label={t(
                            "calculators.compoundInterest.compoundingFrequency"
                        )}
                        value={values.frequency}
                        onChange={handleChange}
                        error={
                            errors.frequency
                                ? t(errors.frequency)
                                : undefined
                        }
                        options={[
                            {
                                value: "1",
                                label: t(
                                    "calculators.compoundInterest.annually"
                                ),
                            },
                            {
                                value: "2",
                                label: t(
                                    "calculators.compoundInterest.semiAnnually"
                                ),
                            },
                            {
                                value: "4",
                                label: t(
                                    "calculators.compoundInterest.quarterly"
                                ),
                            },
                            {
                                value: "12",
                                label: t(
                                    "calculators.compoundInterest.monthly"
                                ),
                            },
                            {
                                value: "365",
                                label: t(
                                    "calculators.compoundInterest.daily"
                                ),
                            },
                        ]}
                    />

                    <div className={styles.actions}>
                        <Button type="submit">
                            {t(
                                "calculators.compoundInterest.calculate"
                            )}
                        </Button>

                        <Button
                            type="button"
                            variant="secondary"
                            onClick={handleReset}
                        >
                            {t(
                                "calculators.compoundInterest.reset"
                            )}
                        </Button>
                    </div>
                </form>

                {result && (
                    <ResultCard
                        results={[
                            {
                                label: t(
                                    "calculators.compoundInterest.compoundInterest"
                                ),
                                value: formatCurrency(
                                    result.compoundInterest,
                                    country
                                ),
                            },
                            {
                                label: t(
                                    "calculators.compoundInterest.totalAmount"
                                ),
                                value: formatCurrency(
                                    result.totalAmount,
                                    country
                                ),
                            },
                            {
                                label: t(
                                    "calculators.compoundInterest.duration"
                                ),
                                value: formatDuration(
                                    result.totalMonths
                                ),
                            },
                        ]}
                    />
                )}
            </section>

            <CompoundInterestExplanation />
        </div>
    );
};

export default CompoundInterest;