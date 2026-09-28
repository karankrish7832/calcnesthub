export interface CompoundInterestForm {
    principal: string;
    rate: string;
    years: string;
    months: string;
    frequency: string;
}

export interface CompoundInterestResult {
    compoundInterest: number;
    totalAmount: number;
    totalMonths: number;
}

export interface CompoundInterestErrors {
    principal?: string;
    rate?: string;
    years?: string;
    months?: string;
    frequency?: string;
    tenure?: string;
}