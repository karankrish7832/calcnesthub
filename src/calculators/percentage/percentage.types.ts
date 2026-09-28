export type PercentageCalculationType =
    | "percentageOf"
    | "whatPercentage"
    | "percentageIncrease"
    | "percentageDecrease";

export interface PercentageForm {
    calculationType: PercentageCalculationType;
    firstValue: string;
    secondValue: string;
}

export interface PercentageResult {
    value: number;
    calculationType: PercentageCalculationType;
}

export interface PercentageErrors {
    firstValue?: string;
    secondValue?: string;
}