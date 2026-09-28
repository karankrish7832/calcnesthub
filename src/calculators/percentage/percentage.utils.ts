import type {
    PercentageForm,
    PercentageResult,
} from "./percentage.types";

export const calculatePercentage = ({
    calculationType,
    firstValue,
    secondValue,
}: PercentageForm): PercentageResult => {
    const first = Number(firstValue);
    const second = Number(secondValue);

    let value = 0;

    switch (calculationType) {
        case "percentageOf":
            value = (first / 100) * second;
            break;

        case "whatPercentage":
            value = (first / second) * 100;
            break;

        case "percentageIncrease":
            value =
                ((second - first) / first) * 100;
            break;

        case "percentageDecrease":
            value =
                ((first - second) / first) * 100;
            break;
    }

    return {
        value,
        calculationType,
    };
};