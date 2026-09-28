export type BMIUnitSystem =
    | "metric"
    | "imperial";

export type BMISex =
    | "male"
    | "female";

export type BMIAdultCategory =
    | "underweight"
    | "normal"
    | "overweight"
    | "obesity";

export type BMIChildCategory =
    | "underweight"
    | "healthyWeight"
    | "overweight"
    | "obesity";

export interface BMIForm {
    ageYears: string;
    ageMonths: string;
    sex: BMISex;
    unitSystem: BMIUnitSystem;
    weight: string;
    height: string;
    heightFeet: string;
    heightInches: string;
}

export interface BMIResult {
    bmi: number;
    category:
        | BMIAdultCategory
        | BMIChildCategory;
    percentile?: number;
}

export interface BMIErrors {
    ageYears?: string;
    ageMonths?: string;
    sex?: string;
    weight?: string;
    height?: string;
    heightFeet?: string;
    heightInches?: string;
}