export interface LoanForm {
    loanAmount: string;
    rate: string;
    years: string;
}
export interface LoanResult {
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
}
export interface LoanErrors {
    loanAmount?: string;
    rate?: string;
    tenure?: string;
}