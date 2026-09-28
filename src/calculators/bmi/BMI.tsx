import { useState } from "react";

import { useTranslation } from "react-i18next";

import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import InputField from "../../components/InputField/InputField";
import ResultCard from "../../components/ResultCard/ResultCard";

import { useCountry } from "../../context/CountryContext";
import { useLocalizedNumberInput } from "../../hooks/useLocalizedNumberInput";

import BMIExplanation from "./BMIExplanation";

import type {
    BMIForm,
    BMIResult,
} from "./bmi.types";

import {
    calculateBMI,
} from "./bmi.utils";

import {
    validateBMI,
} from "./bmi.validation";

import styles from "./BMI.module.css";

const initialValues: BMIForm = {
    ageYears: "",
    ageMonths: "",
    sex: "male",
    unitSystem: "metric",
    weight: "",
    height: "",
    heightFeet: "",
    heightInches: "",
};

const BMI = () => {
    const { t } = useTranslation();
    const { country } = useCountry();

    const [values, setValues] =
        useState<BMIForm>(initialValues);

    const [errors, setErrors] =
        useState<
            ReturnType<typeof validateBMI>
        >({});

    const [result, setResult] =
        useState<BMIResult | null>(null);

    const ageYearsInput =
        useLocalizedNumberInput({
            value: values.ageYears,
            locale: country.locale,
            onChange: (value) => {
                setValues((current) => ({
                    ...current,
                    ageYears: value,
                }));

                setErrors((current) => ({
                    ...current,
                    ageYears: undefined,
                }));
            },
        });

    const ageMonthsInput =
        useLocalizedNumberInput({
            value: values.ageMonths,
            locale: country.locale,
            onChange: (value) => {
                setValues((current) => ({
                    ...current,
                    ageMonths: value,
                }));

                setErrors((current) => ({
                    ...current,
                    ageMonths: undefined,
                }));
            },
        });

    const weightInput =
        useLocalizedNumberInput({
            value: values.weight,
            locale: country.locale,
            onChange: (value) => {
                setValues((current) => ({
                    ...current,
                    weight: value,
                }));

                setErrors((current) => ({
                    ...current,
                    weight: undefined,
                }));
            },
        });

    const heightInput =
        useLocalizedNumberInput({
            value: values.height,
            locale: country.locale,
            onChange: (value) => {
                setValues((current) => ({
                    ...current,
                    height: value,
                }));

                setErrors((current) => ({
                    ...current,
                    height: undefined,
                }));
            },
        });

    const heightFeetInput =
        useLocalizedNumberInput({
            value: values.heightFeet,
            locale: country.locale,
            onChange: (value) => {
                setValues((current) => ({
                    ...current,
                    heightFeet: value,
                }));

                setErrors((current) => ({
                    ...current,
                    heightFeet: undefined,
                }));
            },
        });

    const heightInchesInput =
        useLocalizedNumberInput({
            value: values.heightInches,
            locale: country.locale,
            onChange: (value) => {
                setValues((current) => ({
                    ...current,
                    heightInches: value,
                }));

                setErrors((current) => ({
                    ...current,
                    heightInches: undefined,
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

        setErrors((current) => ({
            ...current,
            [name]: undefined,
        }));
    };

    const handleCalculate = (
        event: React.FormEvent
    ) => {
        event.preventDefault();

        const validationErrors =
            validateBMI(values);

        setErrors(validationErrors);

        if (
            Object.keys(validationErrors)
                .length > 0
        ) {
            return;
        }

        const calculatedResult =
            calculateBMI(values);

        setResult(calculatedResult);
    };

    const handleReset = () => {
        setValues(initialValues);
        setErrors({});
        setResult(null);
    };

    const formatNumber = (
        value: number,
        maximumFractionDigits = 2
    ) => {
        return new Intl.NumberFormat(
            country.locale,
            {
                maximumFractionDigits,
            }
        ).format(value);
    };

    const isChildOrTeen =
        result?.percentile !== undefined;

    return (
        <div className={styles.page}>
            <div className={styles.calculator}>
                <header className={styles.header}>
                    <h1>
                        {t(
                            "calculators.bmi.title"
                        )}
                    </h1>

                    <p>
                        {t(
                            "calculators.bmi.description"
                        )}
                    </p>
                </header>

                <form
                    className={styles.form}
                    onSubmit={handleCalculate}
                    noValidate
                >
                    <div
                        className={
                            styles.heightGroup
                        }
                    >
                        <InputField
                            id="ageYears"
                            name="ageYears"
                            label={t(
                                "calculators.bmi.ageYears"
                            )}
                            placeholder={t(
                                "calculators.bmi.enterAgeYears"
                            )}
                            value={
                                ageYearsInput.displayValue
                            }
                            onChange={
                                ageYearsInput.handleChange
                            }
                            inputMode="numeric"
                            error={
                                errors.ageYears
                                    ? t(
                                          errors.ageYears
                                      )
                                    : undefined
                            }
                        />

                        <InputField
                            id="ageMonths"
                            name="ageMonths"
                            label={t(
                                "calculators.bmi.ageMonths"
                            )}
                            placeholder={t(
                                "calculators.bmi.enterAgeMonths"
                            )}
                            value={
                                ageMonthsInput.displayValue
                            }
                            onChange={
                                ageMonthsInput.handleChange
                            }
                            inputMode="numeric"
                            error={
                                errors.ageMonths
                                    ? t(
                                          errors.ageMonths
                                      )
                                    : undefined
                            }
                        />
                    </div>

                    <Dropdown
                        id="sex"
                        name="sex"
                        label={t(
                            "calculators.bmi.sex"
                        )}
                        value={values.sex}
                        onChange={
                            handleChange
                        }
                        options={[
                            {
                                value: "male",
                                label: t(
                                    "calculators.bmi.male"
                                ),
                            },
                            {
                                value: "female",
                                label: t(
                                    "calculators.bmi.female"
                                ),
                            },
                        ]}
                    />

                    <Dropdown
                        id="unitSystem"
                        name="unitSystem"
                        label={t(
                            "calculators.bmi.unitSystem"
                        )}
                        value={
                            values.unitSystem
                        }
                        onChange={
                            handleChange
                        }
                        options={[
                            {
                                value: "metric",
                                label: t(
                                    "calculators.bmi.metric"
                                ),
                            },
                            {
                                value: "imperial",
                                label: t(
                                    "calculators.bmi.imperial"
                                ),
                            },
                        ]}
                    />

                    <InputField
                        id="weight"
                        name="weight"
                        label={t(
                            "calculators.bmi.weight"
                        )}
                        placeholder={t(
                            "calculators.bmi.enterWeight"
                        )}
                        value={
                            weightInput.displayValue
                        }
                        onChange={
                            weightInput.handleChange
                        }
                        inputMode="decimal"
                        suffix={
                            values.unitSystem ===
                            "metric"
                                ? t(
                                      "calculators.bmi.kg"
                                  )
                                : t(
                                      "calculators.bmi.lb"
                                  )
                        }
                        error={
                            errors.weight
                                ? t(
                                      errors.weight
                                  )
                                : undefined
                        }
                    />

                    {values.unitSystem ===
                    "metric" ? (
                        <InputField
                            id="height"
                            name="height"
                            label={t(
                                "calculators.bmi.height"
                            )}
                            placeholder={t(
                                "calculators.bmi.enterHeight"
                            )}
                            value={
                                heightInput.displayValue
                            }
                            onChange={
                                heightInput.handleChange
                            }
                            inputMode="decimal"
                            suffix={t(
                                "calculators.bmi.cm"
                            )}
                            error={
                                errors.height
                                    ? t(
                                          errors.height
                                      )
                                    : undefined
                            }
                        />
                    ) : (
                        <div
                            className={
                                styles.heightGroup
                            }
                        >
                            <InputField
                                id="heightFeet"
                                name="heightFeet"
                                label={t(
                                    "calculators.bmi.feet"
                                )}
                                placeholder={t(
                                    "calculators.bmi.enterFeet"
                                )}
                                value={
                                    heightFeetInput.displayValue
                                }
                                onChange={
                                    heightFeetInput.handleChange
                                }
                                inputMode="numeric"
                                suffix={t(
                                    "calculators.bmi.ft"
                                )}
                                error={
                                    errors.heightFeet
                                        ? t(
                                              errors.heightFeet
                                          )
                                        : undefined
                                }
                            />

                            <InputField
                                id="heightInches"
                                name="heightInches"
                                label={t(
                                    "calculators.bmi.inches"
                                )}
                                placeholder={t(
                                    "calculators.bmi.enterInches"
                                )}
                                value={
                                    heightInchesInput.displayValue
                                }
                                onChange={
                                    heightInchesInput.handleChange
                                }
                                inputMode="decimal"
                                suffix={t(
                                    "calculators.bmi.in"
                                )}
                                error={
                                    errors.heightInches
                                        ? t(
                                              errors.heightInches
                                          )
                                        : undefined
                                }
                            />
                        </div>
                    )}

                    <div
                        className={styles.actions}
                    >
                        <Button type="submit">
                            {t(
                                "calculators.bmi.calculate"
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
                                "calculators.bmi.reset"
                            )}
                        </Button>
                    </div>
                </form>

                {result && (
                    <ResultCard
                        title={t(
                            "calculators.bmi.resultTitle"
                        )}
                        results={[
                            {
                                label: t(
                                    "calculators.bmi.bmiResult"
                                ),
                                value: formatNumber(
                                    result.bmi
                                ),
                            },
                            ...(isChildOrTeen
                                ? [
                                    {
                                        label: t(
                                            "calculators.bmi.percentile"
                                        ),
                                        value: `${formatNumber(
                                            result.percentile ?? 0,
                                            1
                                        )}%`,
                                    },
                                    {
                                        label: t(
                                            "calculators.bmi.category"
                                        ),
                                        value: t(
                                            `calculators.bmi.categories.${result.category}`
                                        ),
                                    },
                                ]
                                : [
                                    {
                                        label: t(
                                            "calculators.bmi.category"
                                        ),
                                        value: t(
                                            `calculators.bmi.categories.${result.category}`
                                        ),
                                    },
                                ]),
                        ]}
                    />
                )}
            </div>

            <BMIExplanation />
        </div>
    );
};

export default BMI;