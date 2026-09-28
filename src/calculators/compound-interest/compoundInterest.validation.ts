import type {
    CompoundInterestForm,
    CompoundInterestErrors,
} from "./compoundInterest.types";

export const validateCompoundInterest = (
    values: CompoundInterestForm
): CompoundInterestErrors => {
    const errors: CompoundInterestErrors = {};

    const principal = Number(
        values.principal
    );

    const rate = Number(values.rate);

    const years = values.years.trim()
        ? Number(values.years)
        : 0;

    const months = values.months.trim()
        ? Number(values.months)
        : 0;

    const frequency = Number(
        values.frequency
    );

    if (!values.principal) {
        errors.principal =
            "calculators.compoundInterest.validation.principalRequired";
    } else if (
        !Number.isFinite(principal) ||
        principal <= 0
    ) {
        errors.principal =
            "calculators.compoundInterest.validation.principalGreaterThanZero";
    }

    if (!values.rate) {
        errors.rate =
            "calculators.compoundInterest.validation.rateRequired";
    } else if (
        !Number.isFinite(rate) ||
        rate < 0
    ) {
        errors.rate =
            "calculators.compoundInterest.validation.rateNotNegative";
    }

    if (
        !Number.isFinite(years) ||
        years < 0
    ) {
        errors.years =
            "calculators.compoundInterest.validation.yearsInvalid";
    }

    if (
        !Number.isFinite(months) ||
        months < 0
    ) {
        errors.months =
            "calculators.compoundInterest.validation.monthsInvalid";
    }

    if (
        !values.frequency ||
        !Number.isFinite(frequency) ||
        frequency <= 0
    ) {
        errors.frequency =
            "calculators.compoundInterest.validation.frequencyRequired";
    }

    const totalMonths =
        years * 12 + months;

    if (
        Number.isFinite(years) &&
        Number.isFinite(months) &&
        totalMonths <= 0
    ) {
        errors.tenure =
            "calculators.compoundInterest.validation.tenureRequired";
    }

    return errors;
};