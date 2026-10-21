export interface FixedDepositForm {
    depositAmount: string;
    rate: string;
    years: string;
    months: string;
}
export interface FixedDepositResult {
    principal: number;
    interestEarned: number;
    maturityAmount: number;
    totalMonths: number;
}
export interface FixedDepositErrors {
    depositAmount?: string;
    rate?: string;
    years?: string;
    months?: string;
    tenure?: string;
}