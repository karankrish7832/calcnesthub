import type { SIPForm, SIPErrors } from "./sip.types";

export const validateSIP = (values: SIPForm): SIPErrors => {
    const errors: SIPErrors = {};
    const monthlyInvestment = Number(values.monthlyInvestment);
    const rate = Number(values.rate);
    const years = values.years.trim() ? Number(values.years) : 0;
    if (!values.monthlyInvestment) {
        errors.monthlyInvestment = "calculators.sip.validation.monthlyInvestmentRequired";
    } else if (!Number.isFinite(monthlyInvestment) || monthlyInvestment <= 0) {
        errors.monthlyInvestment = "calculators.sip.validation.monthlyInvestmentGreaterThanZero";
    }
    if (!values.rate) {
        errors.rate = "calculators.sip.validation.rateRequired";
    } else if (!Number.isFinite(rate) || rate < 0) {
        errors.rate = "calculators.sip.validation.rateNotNegative";
    }
    if (!values.years.trim()) {
        errors.tenure = "calculators.sip.validation.tenureRequired";
    } else if (!Number.isFinite(years) || years <= 0) {
        errors.tenure = "calculators.sip.validation.tenureGreaterThanZero";
    }
    return errors;
};