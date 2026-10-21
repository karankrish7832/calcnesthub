import type { FixedDepositForm, FixedDepositResult } from "./fixedDeposit.types";
export const calculateFixedDeposit = (values: FixedDepositForm): FixedDepositResult => {
    const principal = Number(values.depositAmount);
    const annualRate = Number(values.rate);
    const years = Number(values.years || 0);
    const months = Number(values.months || 0);
    const totalMonths = years * 12 + months;
    const totalYears = totalMonths / 12;
    const quarterlyRate = annualRate / 4 / 100;
    const maturityAmount = quarterlyRate === 0
        ? principal
        : principal * Math.pow(1 + quarterlyRate, 4 * totalYears);
    const interestEarned = maturityAmount - principal;
    return {
        principal,
        interestEarned,
        maturityAmount,
        totalMonths,
    };
};