import type {
    SimpleInterestForm,
    SimpleInterestResult,
} from "./simpleInterest.types";

export const calculateSimpleInterest = ({
    principal,
    rate,
    years,
    months,
}: SimpleInterestForm): SimpleInterestResult => {
    const principalAmount = Number(principal);
    const interestRate = Number(rate);

    const yearsValue = years.trim()
        ? Number(years)
        : 0;

    const monthsValue = months.trim()
        ? Number(months)
        : 0;

    const totalMonths = yearsValue * 12 + monthsValue;

    const timeInYears = totalMonths / 12;

    const interest = (principalAmount * interestRate * timeInYears) / 100;

    const totalAmount = principalAmount + interest;

    return {
        interest,
        totalAmount,
        totalMonths,
    };
};