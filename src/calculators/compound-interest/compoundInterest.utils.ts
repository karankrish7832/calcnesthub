import type {
    CompoundInterestForm,
    CompoundInterestResult,
} from "./compoundInterest.types";

export const calculateCompoundInterest = ({
    principal,
    rate,
    years,
    months,
    frequency,
}: CompoundInterestForm): CompoundInterestResult => {
    const principalAmount = Number(principal);
    const interestRate = Number(rate);

    const yearsValue = years.trim()
        ? Number(years)
        : 0;

    const monthsValue = months.trim()
        ? Number(months)
        : 0;

    const compoundingFrequency =
        Number(frequency);

    const totalMonths =
        yearsValue * 12 + monthsValue;

    const timeInYears =
        totalMonths / 12;

    const annualRate =
        interestRate / 100;

    const totalAmount =
        principalAmount *
        Math.pow(
            1 +
                annualRate /
                    compoundingFrequency,
            compoundingFrequency *
                timeInYears
        );

    const compoundInterest =
        totalAmount - principalAmount;

    return {
        compoundInterest,
        totalAmount,
        totalMonths,
    };
};