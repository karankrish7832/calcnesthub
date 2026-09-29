import type {
    AgeErrors,
    AgeForm,
} from "./age.types";

export const validateAge = (
    values: AgeForm
): AgeErrors => {
    const errors: AgeErrors = {};

    if (!values.dateOfBirth) {
        errors.dateOfBirth =
            "calculators.age.validation.dateOfBirthRequired";
    }

    if (!values.asOfDate) {
        errors.asOfDate =
            "calculators.age.validation.asOfDateRequired";
    }

    if (
        values.dateOfBirth &&
        values.asOfDate
    ) {
        const dateOfBirth = new Date(
            `${values.dateOfBirth}T00:00:00`
        );

        const asOfDate = new Date(
            `${values.asOfDate}T00:00:00`
        );

        if (
            Number.isNaN(
                dateOfBirth.getTime()
            )
        ) {
            errors.dateOfBirth =
                "calculators.age.validation.dateOfBirthInvalid";
        }

        if (
            Number.isNaN(
                asOfDate.getTime()
            )
        ) {
            errors.asOfDate =
                "calculators.age.validation.asOfDateInvalid";
        }

        if (
            !errors.dateOfBirth &&
            !errors.asOfDate &&
            dateOfBirth > asOfDate
        ) {
            errors.dateOfBirth =
                "calculators.age.validation.dateOfBirthFuture";
        }
    }

    return errors;
};