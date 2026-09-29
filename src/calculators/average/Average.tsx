import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import ResultCard from "../../components/ResultCard/ResultCard";
import AverageInput from "./AverageInput";
import {
    calculateAverage,
} from "./average.utils";
import {
    validateAverage,
} from "./average.validation";

import type {
    AverageErrors,
    AverageForm,
    AverageResult,
} from "./average.types";
import AverageExplanation from "./AverageExplanation";
import styles from "./Average.module.css";

const initialValues: AverageForm = {
    values: ["", ""],
};

const Average = () => {
    const { t } = useTranslation();

    const [values, setValues] =
        useState<string[]>(
            initialValues.values
        );

    const [errors, setErrors] =
        useState<AverageErrors>({});

    const [result, setResult] =
        useState<AverageResult | null>(
            null
        );

    const updateValue = (
        index: number,
        value: string
    ) => {
        setValues((currentValues) =>
            currentValues.map(
                (currentValue, currentIndex) =>
                    currentIndex === index
                        ? value
                        : currentValue
            )
        );

        setErrors((currentErrors) => {
            const updatedErrors = [
                ...(currentErrors.values ?? []),
            ];

            updatedErrors[index] =
                undefined;

            return {
                values: updatedErrors,
            };
        });

        setResult(null);
    };

    const addValue = () => {
        setValues((currentValues) => [
            ...currentValues,
            "",
        ]);

        setResult(null);
    };

    const removeValue = (
        index: number
    ) => {
        if (values.length <= 2) {
            return;
        }

        setValues((currentValues) =>
            currentValues.filter(
                (_, currentIndex) =>
                    currentIndex !== index
            )
        );

        setErrors((currentErrors) => ({
            values:
                currentErrors.values?.filter(
                    (_, currentIndex) =>
                        currentIndex !== index
                ),
        }));

        setResult(null);
    };

    const handleCalculate = (
        event: FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const formValues: AverageForm = {
            values,
        };

        const validationErrors =
            validateAverage(formValues);

        const hasErrors =
            validationErrors.values?.some(
                Boolean
            );

        setErrors(validationErrors);

        if (hasErrors) {
            setResult(null);
            return;
        }

        setResult(
            calculateAverage(formValues)
        );
    };

    const handleReset = () => {
        setValues([
            ...initialValues.values,
        ]);
        setErrors({});
        setResult(null);
    };

    return (
        <div className={styles.page}>
            <section
                className={styles.calculator}
            >
                <header
                    className={styles.header}
                >
                    <h1>
                        {t(
                            "calculators.average.title"
                        )}
                    </h1>

                    <p>
                        {t(
                            "calculators.average.description"
                        )}
                    </p>
                </header>

                <form
                    className={styles.form}
                    onSubmit={
                        handleCalculate
                    }
                    noValidate
                >
                    <div
                        className={
                            styles.values
                        }
                    >
                        {values.map(
                            (value, index) => (
                                <AverageInput
                                    key={index}
                                    index={index}
                                    value={value}
                                    error={
                                        errors
                                            .values?.[
                                            index
                                        ]
                                            ? t(
                                                  errors
                                                      .values[
                                                      index
                                                  ]!
                                              )
                                            : undefined
                                    }
                                    canRemove={
                                        values.length >
                                        2
                                    }
                                    onChange={(
                                        newValue
                                    ) =>
                                        updateValue(
                                            index,
                                            newValue
                                        )
                                    }
                                    onRemove={() =>
                                        removeValue(
                                            index
                                        )
                                    }
                                />
                            )
                        )}
                    </div>

                    <Button
                        type="button"
                        variant="secondary"
                        onClick={addValue}
                    >
                        {t(
                            "calculators.average.addNumber"
                        )}
                    </Button>

                    <div
                        className={
                            styles.actions
                        }
                    >
                        <Button type="submit">
                            {t(
                                "calculators.average.calculate"
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
                                "calculators.average.reset"
                            )}
                        </Button>
                    </div>
                </form>

                {result && (
                    <ResultCard
                        title={t(
                            "calculators.average.resultTitle"
                        )}
                        results={[
                            {
                                label: t(
                                    "calculators.average.average"
                                ),
                                value:
                                    result.average.toLocaleString(
                                        undefined,
                                        {
                                            maximumFractionDigits: 2,
                                        }
                                    ),
                            },
                            {
                                label: t(
                                    "calculators.average.sum"
                                ),
                                value:
                                    result.sum.toLocaleString(
                                        undefined,
                                        {
                                            maximumFractionDigits: 2,
                                        }
                                    ),
                            },
                            {
                                label: t(
                                    "calculators.average.count"
                                ),
                                value:
                                    result.count.toLocaleString(),
                            },
                        ]}
                    />
                )}
            </section>
            <AverageExplanation />
        </div>
    );
};

export default Average;