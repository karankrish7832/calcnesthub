import type { FixedDepositForm, FixedDepositErrors } from "./fixedDeposit.types";
export const validateFixedDeposit = (values: FixedDepositForm): FixedDepositErrors => {
    const errors: FixedDepositErrors = {};
    const depositAmount = Number(values.depositAmount);
    const rate = Number(values.rate);
    const years = values.years.trim() ? Number(values.years) : 0;
    const months = values.months.trim() ? Number(values.months) : 0;
    if (!values.depositAmount) {
        errors.depositAmount = "calculators.fixedDeposit.validation.depositAmountRequired";
    } else if (!Number.isFinite(depositAmount) || depositAmount <= 0) {
        errors.depositAmount = "calculators.fixedDeposit.validation.depositAmountGreaterThanZero";
    }
    if (!values.rate) {
        errors.rate = "calculators.fixedDeposit.validation.rateRequired";
    } else if (!Number.isFinite(rate) || rate < 0) {
        errors.rate = "calculators.fixedDeposit.validation.rateNotNegative";
    }
    if (!values.years.trim() && !values.months.trim()) {
        errors.tenure = "calculators.fixedDeposit.validation.tenureRequired";
    } else if (!Number.isFinite(years) || !Number.isFinite(months) || years < 0 || months < 0 || (years === 0 && months === 0) || !Number.isInteger(years) || !Number.isInteger(months) || months > 11) {
        errors.tenure = "calculators.fixedDeposit.validation.tenureInvalid";
    }
    return errors;
};