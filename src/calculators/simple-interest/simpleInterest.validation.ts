import type {
    SimpleInterestForm,
    SimpleInterestErrors,
} from "./simpleInterest.types";

export const validateSimpleInterest = (
    values: SimpleInterestForm
): SimpleInterestErrors => {
    const errors: SimpleInterestErrors = {};

    const principal = Number(values.principal);
    const rate = Number(values.rate);

    const years = values.years.trim()
        ? Number(values.years)
        : 0;

    const months = values.months.trim()
        ? Number(values.months)
        : 0;

    if (!values.principal) {
        errors.principal =
            "calculators.simpleInterest.validation.principalRequired";
    } else if (
        !Number.isFinite(principal) ||
        principal <= 0
    ) {
        errors.principal =
            "calculators.simpleInterest.validation.principalGreaterThanZero";
    }

    if (!values.rate) {
        errors.rate =
            "calculators.simpleInterest.validation.rateRequired";
    } else if (
        !Number.isFinite(rate) ||
        rate < 0
    ) {
        errors.rate =
            "calculators.simpleInterest.validation.rateNotNegative";
    }

    if (
        !Number.isFinite(years) ||
        years < 0
    ) {
        errors.years =
            "calculators.simpleInterest.validation.yearsInvalid";
    }

    if (
        !Number.isFinite(months) ||
        months < 0
    ) {
        errors.months =
            "calculators.simpleInterest.validation.monthsInvalid";
    }

    const totalMonths =
        years * 12 + months;

    if (
        Number.isFinite(years) &&
        Number.isFinite(months) &&
        totalMonths <= 0
    ) {
        errors.tenure =
            "calculators.simpleInterest.validation.tenureRequired";
    }

    return errors;
};