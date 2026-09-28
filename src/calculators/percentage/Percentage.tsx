import { useState } from "react";

import { useTranslation } from "react-i18next";

import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import InputField from "../../components/InputField/InputField";
import ResultCard from "../../components/ResultCard/ResultCard";
import { useLocalizedNumberInput } from "../../hooks/useLocalizedNumberInput";
import PercentageExplanation from "./PercentageExplanation";
import type {
    PercentageCalculationType,
    PercentageErrors,
    PercentageForm,
    PercentageResult,
} from "./percentage.types";
import { calculatePercentage } from "./percentage.utils";
import {
    validatePercentage,
} from "./percentage.validation";
import styles from "./Percentage.module.css";

const initialValues: PercentageForm = {
    calculationType: "percentageOf",
    firstValue: "",
    secondValue: "",
};

const Percentage = () => {
    const { t, i18n } = useTranslation();

    const [values, setValues] =
        useState<PercentageForm>(
            initialValues
        );

    const [errors, setErrors] =
        useState<PercentageErrors>({});

    const [result, setResult] =
        useState<PercentageResult | null>(
            null
        );

    const firstValueInput =
        useLocalizedNumberInput({
            value: values.firstValue,
            locale: i18n.language,
            onChange: (value) => {
                setValues((current) => ({
                    ...current,
                    firstValue: value,
                }));

                setErrors((current) => ({
                    ...current,
                    firstValue: undefined,
                }));
            },
        });

    const secondValueInput =
        useLocalizedNumberInput({
            value: values.secondValue,
            locale: i18n.language,
            onChange: (value) => {
                setValues((current) => ({
                    ...current,
                    secondValue: value,
                }));

                setErrors((current) => ({
                    ...current,
                    secondValue: undefined,
                }));
            },
        });

    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement
        >
    ) => {
        const { name, value } =
            event.target;

        setValues((current) => ({
            ...current,
            [name]: value,
        }));

        setErrors({});

        setResult(null);
    };

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const validationErrors =
            validatePercentage(values);

        setErrors(validationErrors);

        if (
            Object.keys(validationErrors)
                .length > 0
        ) {
            setResult(null);
            return;
        }

        const calculationResult =
            calculatePercentage(values);

        setResult(calculationResult);
    };

    const handleReset = () => {
        setValues(initialValues);
        setErrors({});
        setResult(null);
    };

    const getInputLabels = () => {
        switch (values.calculationType) {
            case "percentageOf":
                return {
                    first: t(
                        "calculators.percentage.percentage"
                    ),
                    firstPlaceholder: t(
                        "calculators.percentage.enterPercentage"
                    ),
                    second: t(
                        "calculators.percentage.value"
                    ),
                    secondPlaceholder: t(
                        "calculators.percentage.enterValue"
                    ),
                };

            case "whatPercentage":
                return {
                    first: t(
                        "calculators.percentage.firstValue"
                    ),
                    firstPlaceholder: t(
                        "calculators.percentage.enterFirstValue"
                    ),
                    second: t(
                        "calculators.percentage.secondValue"
                    ),
                    secondPlaceholder: t(
                        "calculators.percentage.enterSecondValue"
                    ),
                };

            case "percentageIncrease":
                return {
                    first: t(
                        "calculators.percentage.originalValue"
                    ),
                    firstPlaceholder: t(
                        "calculators.percentage.enterOriginalValue"
                    ),
                    second: t(
                        "calculators.percentage.newValue"
                    ),
                    secondPlaceholder: t(
                        "calculators.percentage.enterNewValue"
                    ),
                };

            case "percentageDecrease":
                return {
                    first: t(
                        "calculators.percentage.originalValue"
                    ),
                    firstPlaceholder: t(
                        "calculators.percentage.enterOriginalValue"
                    ),
                    second: t(
                        "calculators.percentage.newValue"
                    ),
                    secondPlaceholder: t(
                        "calculators.percentage.enterNewValue"
                    ),
                };
        }
    };

    const labels = getInputLabels();

    const getResultLabel = () => {
        switch (values.calculationType) {
            case "percentageOf":
                return t(
                    "calculators.percentage.result"
                );

            case "whatPercentage":
                return t(
                    "calculators.percentage.percentageResult"
                );

            case "percentageIncrease":
                return t(
                    "calculators.percentage.percentageIncreaseResult"
                );

            case "percentageDecrease":
                return t(
                    "calculators.percentage.percentageDecreaseResult"
                );
        }
    };

    const formatResult = () => {
        if (!result) {
            return "";
        }

        if (
            result.calculationType ===
                "whatPercentage" ||
            result.calculationType ===
                "percentageIncrease" ||
            result.calculationType ===
                "percentageDecrease"
        ) {
            return `${result.value.toFixed(2)}%`;
        }

        return result.value.toLocaleString(
            i18n.language,
            {
                maximumFractionDigits: 2,
            }
        );
    };

    const options: {
        value: PercentageCalculationType;
        label: string;
    }[] = [
        {
            value: "percentageOf",
            label: t(
                "calculators.percentage.percentageOfOption"
            ),
        },
        {
            value: "whatPercentage",
            label: t(
                "calculators.percentage.whatPercentageOption"
            ),
        },
        {
            value: "percentageIncrease",
            label: t(
                "calculators.percentage.percentageIncreaseOption"
            ),
        },
        {
            value: "percentageDecrease",
            label: t(
                "calculators.percentage.percentageDecreaseOption"
            ),
        },
    ];

    return (
        <div className={styles.page}>
            <section
                className={styles.calculator}
            >
                <div className={styles.header}>
                    <h1>
                        {t(
                            "calculators.percentage.title"
                        )}
                    </h1>

                    <p>
                        {t(
                            "calculators.percentage.description"
                        )}
                    </p>
                </div>

                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <Dropdown
                        id="calculationType"
                        name="calculationType"
                        label={t(
                            "calculators.percentage.calculationType"
                        )}
                        value={
                            values.calculationType
                        }
                        onChange={
                            handleChange
                        }
                        options={options}
                    />

                    <InputField
                        id="firstValue"
                        name="firstValue"
                        label={labels.first}
                        placeholder={
                            labels.firstPlaceholder
                        }
                        type="text"
                        inputMode="decimal"
                        value={
                            firstValueInput.displayValue
                        }
                        onChange={
                            firstValueInput.handleChange
                        }
                        error={
                            errors.firstValue
                                ? t(
                                      errors.firstValue
                                  )
                                : undefined
                        }
                    />

                    <InputField
                        id="secondValue"
                        name="secondValue"
                        label={labels.second}
                        placeholder={
                            labels.secondPlaceholder
                        }
                        type="text"
                        inputMode="decimal"
                        value={
                            secondValueInput.displayValue
                        }
                        onChange={
                            secondValueInput.handleChange
                        }
                        error={
                            errors.secondValue
                                ? t(
                                      errors.secondValue
                                  )
                                : undefined
                        }
                    />

                    <div
                        className={
                            styles.actions
                        }
                    >
                        <Button type="submit">
                            {t(
                                "calculators.percentage.calculate"
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
                                "calculators.percentage.reset"
                            )}
                        </Button>
                    </div>
                </form>

                {result && (
                    <ResultCard
                        results={[
                            {
                                label: getResultLabel(),
                                value: formatResult(),
                            },
                        ]}
                    />
                )}
            </section>

            <PercentageExplanation />
        </div>
    );
};

export default Percentage;