import type {
    BMIForm,
    BMIErrors,
} from "./bmi.types";

export const validateBMI = (
    values: BMIForm
): BMIErrors => {
    const errors: BMIErrors = {};

    const ageYears = Number(
        values.ageYears
    );

    const ageMonths = values.ageMonths.trim()
        ? Number(values.ageMonths)
        : 0;

    const weight = Number(values.weight);

    if (!values.ageYears) {
        errors.ageYears =
            "calculators.bmi.validation.ageRequired";
    } else if (
        !Number.isFinite(ageYears) ||
        ageYears < 2
    ) {
        errors.ageYears =
            "calculators.bmi.validation.ageInvalid";
    }

    if (
        !Number.isFinite(ageMonths) ||
        ageMonths < 0 ||
        ageMonths > 11
    ) {
        errors.ageMonths =
            "calculators.bmi.validation.ageMonthsInvalid";
    }

    if (!values.weight) {
        errors.weight =
            "calculators.bmi.validation.weightRequired";
    } else if (
        !Number.isFinite(weight) ||
        weight <= 0
    ) {
        errors.weight =
            "calculators.bmi.validation.weightInvalid";
    }

    if (values.unitSystem === "metric") {
        const height = Number(
            values.height
        );

        if (!values.height) {
            errors.height =
                "calculators.bmi.validation.heightRequired";
        } else if (
            !Number.isFinite(height) ||
            height <= 0
        ) {
            errors.height =
                "calculators.bmi.validation.heightInvalid";
        }
    } else {
        const heightFeet = Number(
            values.heightFeet
        );

        const heightInches =
            values.heightInches.trim()
                ? Number(values.heightInches)
                : 0;

        if (!values.heightFeet) {
            errors.heightFeet =
                "calculators.bmi.validation.heightFeetRequired";
        } else if (
            !Number.isFinite(heightFeet) ||
            heightFeet <= 0
        ) {
            errors.heightFeet =
                "calculators.bmi.validation.heightFeetInvalid";
        }

        if (
            !Number.isFinite(heightInches) ||
            heightInches < 0 ||
            heightInches >= 12
        ) {
            errors.heightInches =
                "calculators.bmi.validation.heightInchesInvalid";
        }
    }

    return errors;
};