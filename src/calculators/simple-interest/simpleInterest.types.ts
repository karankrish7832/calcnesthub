export interface SimpleInterestForm {
    principal: string;
    rate: string;
    years: string;
    months: string;
}

export interface SimpleInterestResult {
    interest: number;
    totalAmount: number;
    totalMonths: number;
}

export interface SimpleInterestErrors {
    principal?: string;
    rate?: string;
    years?: string;
    months?: string;
    tenure?: string;
}