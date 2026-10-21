export interface SIPForm {
    monthlyInvestment: string;
    rate: string;
    years: string;
}
export interface SIPResult {
    totalInvestment: number;
    estimatedReturns: number;
    futureValue: number;
}
export interface SIPErrors {
    monthlyInvestment?: string;
    rate?: string;
    tenure?: string;
}