import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import DateInput from "../../components/DateInput/DateInput";
import ResultCard from "../../components/ResultCard/ResultCard";
import AgeExplanation from "./AgeExplanation";

import type {
    AgeForm,
    AgeResult,
} from "./age.types";

import {
    calculateAge,
    getTodayDate
} from "./age.utils";

import {
    validateAge,
} from "./age.validation";

import styles from "./Age.module.css";

const initialValues: AgeForm = {
    dateOfBirth: "",
    asOfDate: getTodayDate(),
};

const Age = () => {
    const { t } = useTranslation();

    const [values, setValues] =
        useState<AgeForm>(initialValues);

    const [errors, setErrors] =
        useState<
            ReturnType<typeof validateAge>
        >({});

    const [result, setResult] =
        useState<AgeResult | null>(null);

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
        }));
    };

    const handleCalculate = (
        event: React.FormEvent
    ) => {
        event.preventDefault();

        const validationErrors =
            validateAge(values);

        setErrors(validationErrors);

        if (
            Object.keys(validationErrors)
                .length > 0
        ) {
            return;
        }

        setResult(
            calculateAge(values)
        );
    };

    const handleReset = () => {
        setValues(initialValues);
        setErrors({});
        setResult(null);
    };

    return (
        <div className={styles.page}>
            <div className={styles.calculator}>
                <header className={styles.header}>
                    <h1>
                        {t(
                            "calculators.age.title"
                        )}
                    </h1>

                    <p>
                        {t(
                            "calculators.age.description"
                        )}
                    </p>
                </header>

                <form
                    className={styles.form}
                    onSubmit={handleCalculate}
                    noValidate
                >
                    <div className={styles.dateGroup}>
                        <DateInput
                            id="dateOfBirth"
                            name="dateOfBirth"
                            label={t(
                                "calculators.age.dateOfBirth"
                            )}
                            placeholder={t(
                                "calculators.age.enterDateOfBirth"
                            )}
                            value={values.dateOfBirth}
                            onChange={handleChange}
                            error={
                                errors.dateOfBirth
                                    ? t(errors.dateOfBirth)
                                    : undefined
                            }
                        />

                        <DateInput
                            id="asOfDate"
                            name="asOfDate"
                            label={t(
                                "calculators.age.asOfDate"
                            )}
                            placeholder={t(
                                "calculators.age.enterAsOfDate"
                            )}
                            value={values.asOfDate}
                            onChange={handleChange}
                            error={
                                errors.asOfDate
                                    ? t(errors.asOfDate)
                                    : undefined
                            }
                        />
                    </div>

                    <div
                        className={
                            styles.actions
                        }
                    >
                        <Button type="submit">
                            {t(
                                "calculators.age.calculate"
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
                                "calculators.age.reset"
                            )}
                        </Button>
                    </div>
                </form>

                {result && (
                    <ResultCard
                        title={t(
                            "calculators.age.resultTitle"
                        )}
                        results={[
                            {
                                label: t(
                                    "calculators.age.age"
                                ),
                                value: `${result.years} ${t(
                                    "calculators.age.years"
                                )} ${result.months} ${t(
                                    "calculators.age.months"
                                )} ${result.days} ${t(
                                    "calculators.age.days"
                                )}`,
                            },
                            {
                                label: t(
                                    "calculators.age.totalMonths"
                                ),
                                value: result.totalMonths,
                            },
                            {
                                label: t(
                                    "calculators.age.totalWeeks"
                                ),
                                value: result.totalWeeks,
                            },
                            {
                                label: t(
                                    "calculators.age.totalDays"
                                ),
                                value: result.totalDays,
                            },
                            {
                                label: t(
                                    "calculators.age.nextBirthday"
                                ),
                                value: result.nextBirthday,
                            },
                            {
                                label: t(
                                    "calculators.age.daysUntilBirthday"
                                ),
                                value: result.daysUntilBirthday,
                            },
                        ]}
                    />
                )}
            </div>
            <AgeExplanation />
        </div>
    );
};

export default Age;