import type {
    EMIForm,
    EMIErrors,
} from "./emi.types";

export const validateEMI = (
    values: EMIForm
): EMIErrors => {
    const errors: EMIErrors = {};

    const loanAmount = Number(
        values.loanAmount
    );

    const interestRate = Number(
        values.interestRate
    );

    const years = values.years.trim()
        ? Number(values.years)
        : 0;

    const months = values.months.trim()
        ? Number(values.months)
        : 0;

    if (!values.loanAmount) {
        errors.loanAmount =
            "calculators.emi.validation.loanAmountRequired";
    } else if (
        !Number.isFinite(loanAmount) ||
        loanAmount <= 0
    ) {
        errors.loanAmount =
            "calculators.emi.validation.loanAmountInvalid";
    }

    if (!values.interestRate) {
        errors.interestRate =
            "calculators.emi.validation.interestRateRequired";
    } else if (
        !Number.isFinite(interestRate) ||
        interestRate < 0
    ) {
        errors.interestRate =
            "calculators.emi.validation.interestRateInvalid";
    }

    if (
        !Number.isFinite(years) ||
        years < 0
    ) {
        errors.years =
            "calculators.emi.validation.yearsInvalid";
    }

    if (
        !Number.isFinite(months) ||
        months < 0
    ) {
        errors.months =
            "calculators.emi.validation.monthsInvalid";
    }

    const totalMonths =
        years * 12 + months;

    if (
        Number.isFinite(years) &&
        Number.isFinite(months) &&
        totalMonths <= 0
    ) {
        errors.tenure =
            "calculators.emi.validation.tenureRequired";
    }

    return errors;
};