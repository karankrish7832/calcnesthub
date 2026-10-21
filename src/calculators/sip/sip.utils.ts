import type { SIPForm, SIPResult } from "./sip.types";

export const calculateSIP = (values: SIPForm): SIPResult => {
    const monthlyInvestment = Number(values.monthlyInvestment);
    const annualRate = Number(values.rate);
    const years = Number(values.years);
    const totalMonths = years * 12;
    const monthlyRate = annualRate / 12 / 100;
    const totalInvestment = monthlyInvestment * totalMonths;
    let futureValue: number;
    if (monthlyRate === 0) {
        futureValue = totalInvestment;
    } else {
        const growthFactor = Math.pow(1 + monthlyRate, totalMonths);
        futureValue =
            monthlyInvestment *
            ((growthFactor - 1) / monthlyRate) *
            (1 + monthlyRate);
    }
    const estimatedReturns = futureValue - totalInvestment;
    return {
        totalInvestment,
        estimatedReturns,
        futureValue,
    };
};