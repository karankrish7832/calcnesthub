export interface EMIForm {
    loanAmount: string;
    interestRate: string;
    years: string;
    months: string;
}

export interface EMIResult {
    emi: number;
    totalInterest: number;
    totalPayment: number;
    totalMonths: number;
}

export interface EMIErrors {
    loanAmount?: string;
    interestRate?: string;
    years?: string;
    months?: string;
    tenure?: string;
}