import type { LoanForm, LoanErrors } from "./loan.types";
export const validateLoan = (values: LoanForm): LoanErrors => {
    const errors: LoanErrors = {};
    const loanAmount = Number(values.loanAmount);
    const rate = Number(values.rate);
    const years = values.years.trim() ? Number(values.years) : 0;
    if (!values.loanAmount) {
        errors.loanAmount = "calculators.loan.validation.loanAmountRequired";
    } else if (!Number.isFinite(loanAmount) || loanAmount <= 0) {
        errors.loanAmount = "calculators.loan.validation.loanAmountGreaterThanZero";
    }
    if (!values.rate) {
        errors.rate = "calculators.loan.validation.rateRequired";
    } else if (!Number.isFinite(rate) || rate < 0) {
        errors.rate = "calculators.loan.validation.rateNotNegative";
    }
    if (!values.years.trim()) {
        errors.tenure = "calculators.loan.validation.tenureRequired";
    } else if (!Number.isFinite(years) || years <= 0) {
        errors.tenure = "calculators.loan.validation.tenureGreaterThanZero";
    }
    return errors;
};