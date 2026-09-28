import type {
    EMIForm,
    EMIResult,
} from "./emi.types";

export const calculateEMI = ({
    loanAmount,
    interestRate,
    years,
    months,
}: EMIForm): EMIResult => {
    const principal = Number(loanAmount);
    const annualRate = Number(interestRate);

    const yearsValue = years.trim()
        ? Number(years)
        : 0;

    const monthsValue = months.trim()
        ? Number(months)
        : 0;

    const totalMonths =
        yearsValue * 12 + monthsValue;

    const monthlyRate =
        annualRate / 12 / 100;

    let emi: number;

    if (monthlyRate === 0) {
        emi = principal / totalMonths;
    } else {
        const factor = Math.pow(
            1 + monthlyRate,
            totalMonths
        );

        emi =
            (principal *
                monthlyRate *
                factor) /
            (factor - 1);
    }

    const totalPayment =
        emi * totalMonths;

    const totalInterest =
        totalPayment - principal;

    return {
        emi,
        totalInterest,
        totalPayment,
        totalMonths,
    };
};

export const formatEMIDuration = (
    totalMonths: number,
    yearLabel: string,
    yearsLabel: string,
    monthLabel: string,
    monthsLabel: string
): string => {
    const durationYears =
        Math.floor(totalMonths / 12);

    const durationMonths =
        totalMonths % 12;

    const parts: string[] = [];

    if (durationYears > 0) {
        const label =
            durationYears === 1
                ? yearLabel
                : yearsLabel;

        parts.push(
            `${durationYears} ${label}`
        );
    }

    if (durationMonths > 0) {
        const label =
            durationMonths === 1
                ? monthLabel
                : monthsLabel;

        parts.push(
            `${durationMonths} ${label}`
        );
    }

    return parts.join(" ");
};