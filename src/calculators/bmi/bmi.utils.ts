import type {
    BMIForm,
    BMIResult,
} from "./bmi.types";

import {
    bmiReferenceData,
} from "./bmi.data";

const normalCDF = (z: number): number => {
    const sign = z < 0 ? -1 : 1;
    const x = Math.abs(z);

    const t =
        1 /
        (1 + 0.2316419 * x);

    const d =
        0.3989422804014327 *
        Math.exp(
            -(x * x) / 2
        );

    const probability =
        1 -
        d *
            t *
            (0.319381530 +
                t *
                    (-0.356563782 +
                        t *
                            (1.781477937 +
                                t *
                                    (-1.821255978 +
                                        t *
                                            1.330274429))));

    return sign === 1
        ? probability
        : 1 - probability;
};

const calculateZScore = (
    bmi: number,
    L: number,
    M: number,
    S: number
): number => {
    if (L === 0) {
        return (
            Math.log(bmi / M) / S
        );
    }

    return (
        (Math.pow(bmi / M, L) - 1) /
        (L * S)
    );
};

const calculateChildPercentile = (
    bmi: number,
    sex: 1 | 2,
    ageMonths: number
): number => {
    const reference =
        bmiReferenceData.find(
            (item) =>
                item.sex === sex &&
                item.ageMonths === ageMonths
        );

    if (!reference) {
        throw new Error(
            "BMI reference data not available for this age."
        );
    }

    if (bmi <= reference.P95) {
        const z = calculateZScore(
            bmi,
            reference.L,
            reference.M,
            reference.S
        );

        return normalCDF(z) * 100;
    }

    const z =
        1.645 +
        Math.log(
            bmi / reference.P95
        ) /
            reference.sigma;

    return normalCDF(z) * 100;
};

export const calculateBMI = ({
    ageYears,
    ageMonths,
    sex,
    unitSystem,
    weight,
    height,
    heightFeet,
    heightInches,
}: BMIForm): BMIResult => {
    const years = Number(ageYears);
    const months = Number(ageMonths || 0);

    const totalAgeMonths =
        years * 12 + months;

    let weightInKg = Number(weight);
    let heightInMeters = 0;

    if (unitSystem === "metric") {
        heightInMeters =
            Number(height) / 100;
    } else {
        const totalInches =
            Number(heightFeet) * 12 +
            Number(heightInches || 0);

        heightInMeters =
            totalInches * 0.0254;

        weightInKg =
            Number(weight) * 0.45359237;
    }

    const bmi =
        weightInKg /
        Math.pow(heightInMeters, 2);

    if (totalAgeMonths < 240) {
        const referenceAgeMonths =
            Math.floor(totalAgeMonths) + 0.5;

        const referenceSex =
            sex === "male" ? 1 : 2;

        const percentile =
            calculateChildPercentile(
                bmi,
                referenceSex,
                referenceAgeMonths
            );

        let category: BMIResult["category"];

        if (percentile < 5) {
            category = "underweight";
        } else if (percentile < 85) {
            category = "healthyWeight";
        } else if (percentile < 95) {
            category = "overweight";
        } else {
            category = "obesity";
        }

        return {
            bmi,
            percentile,
            category,
        };
    }

    let category: BMIResult["category"];

    if (bmi < 18.5) {
        category = "underweight";
    } else if (bmi < 25) {
        category = "normal";
    } else if (bmi < 30) {
        category = "overweight";
    } else {
        category = "obesity";
    }

    return {
        bmi,
        category,
    };
};