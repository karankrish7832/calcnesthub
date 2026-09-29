import type {
    AverageForm,
    AverageResult,
} from "./average.types";

export const calculateAverage = ({
    values,
}: AverageForm): AverageResult => {
    const numbers = values
        .map(Number)
        .filter(Number.isFinite);

    const count = numbers.length;

    const sum = numbers.reduce(
        (total, value) => total + value,
        0
    );

    const average =
        count > 0 ? sum / count : 0;

    return {
        sum,
        count,
        average,
    };
};