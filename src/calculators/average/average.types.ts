export interface AverageForm {
    values: string[];
}

export interface AverageResult {
    sum: number;
    count: number;
    average: number;
}

export interface AverageErrors {
    values?: (string | undefined)[];
}