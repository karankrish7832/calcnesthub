export interface LoanCalculationResult {
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
}

export const calculateLoan = (
    loanAmount: number,
    annualInterestRate: number,
    tenureYears: number
): LoanCalculationResult => {
    const numberOfPayments =
        tenureYears * 12;

    if (numberOfPayments <= 0) {
        return {
            monthlyPayment: 0,
            totalPayment: 0,
            totalInterest: 0,
        };
    }

    if (annualInterestRate === 0) {
        const monthlyPayment =
            loanAmount / numberOfPayments;

        const totalPayment =
            monthlyPayment * numberOfPayments;

        return {
            monthlyPayment,
            totalPayment,
            totalInterest: 0,
        };
    }

    const monthlyInterestRate =
        annualInterestRate / 12 / 100;

    const interestFactor = Math.pow(
        1 + monthlyInterestRate,
        numberOfPayments
    );

    const monthlyPayment =
        (loanAmount *
            monthlyInterestRate *
            interestFactor) /
        (interestFactor - 1);

    const totalPayment =
        monthlyPayment * numberOfPayments;

    const totalInterest =
        totalPayment - loanAmount;

    return {
        monthlyPayment,
        totalPayment,
        totalInterest,
    };
};