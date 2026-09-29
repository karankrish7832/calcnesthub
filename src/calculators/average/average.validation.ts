import type {
    AverageErrors,
    AverageForm,
} from "./average.types";

export const validateAverage = (
    values: AverageForm
): AverageErrors => {
    const errors: (string | undefined)[] = [];

    values.values.forEach(
        (value, index) => {
            if (!value.trim()) {
                errors[index] =
                    "calculators.average.validation.required";
                return;
            }

            const number = Number(value);

            if (!Number.isFinite(number)) {
                errors[index] =
                    "calculators.average.validation.invalid";
            }
        }
    );

    return {
        values: errors,
    };
};