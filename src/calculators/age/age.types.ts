export interface AgeForm {
    dateOfBirth: string;
    asOfDate: string;
}

export interface AgeResult {
    years: number;
    months: number;
    days: number;
    totalMonths: number;
    totalWeeks: number;
    totalDays: number;
    nextBirthday: string;
    daysUntilBirthday: number;
}

export interface AgeErrors {
    dateOfBirth?: string;
    asOfDate?: string;
}