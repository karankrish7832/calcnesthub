import type {
    PercentageForm,
    PercentageErrors,
} from "./percentage.types";

export const validatePercentage = (
    values: PercentageForm
): PercentageErrors => {
    const errors: PercentageErrors = {};

    const firstValue = Number(
        values.firstValue
    );

    const secondValue = Number(
        values.secondValue
    );

    if (!values.firstValue) {
        errors.firstValue =
            "calculators.percentage.validation.firstValueRequired";
    } else if (!Number.isFinite(firstValue)) {
        errors.firstValue =
            "calculators.percentage.validation.firstValueInvalid";
    }

    if (!values.secondValue) {
        errors.secondValue =
            "calculators.percentage.validation.secondValueRequired";
    } else if (!Number.isFinite(secondValue)) {
        errors.secondValue =
            "calculators.percentage.validation.secondValueInvalid";
    }

    if (
        values.calculationType ===
            "whatPercentage" &&
        Number.isFinite(secondValue) &&
        secondValue === 0
    ) {
        errors.secondValue =
            "calculators.percentage.validation.secondValueNotZero";
    }

    if (
        values.calculationType ===
            "percentageIncrease" &&
        Number.isFinite(firstValue) &&
        firstValue === 0
    ) {
        errors.firstValue =
            "calculators.percentage.validation.firstValueNotZero";
    }

    if (
        values.calculationType ===
            "percentageDecrease" &&
        Number.isFinite(firstValue) &&
        firstValue === 0
    ) {
        errors.firstValue =
            "calculators.percentage.validation.firstValueNotZero";
    }

    return errors;
};