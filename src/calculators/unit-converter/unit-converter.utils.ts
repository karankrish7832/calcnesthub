import type {
    UnitCategoryId,
    UnitDefinition,
} from "./unit-converter.types";

const convertTemperatureToCelsius = (
    value: number,
    unit: string
): number => {
    switch (unit) {
        case "fahrenheit":
            return (value - 32) * (5 / 9);

        case "kelvin":
            return value - 273.15;

        case "celsius":
        default:
            return value;
    }
};

const convertCelsiusToTemperature = (
    value: number,
    unit: string
): number => {
    switch (unit) {
        case "fahrenheit":
            return value * (9 / 5) + 32;

        case "kelvin":
            return value + 273.15;

        case "celsius":
        default:
            return value;
    }
};

export const convertTemperature = (
    value: number,
    fromUnit: string,
    toUnit: string
): number => {
    const celsiusValue =
        convertTemperatureToCelsius(
            value,
            fromUnit
        );

    return convertCelsiusToTemperature(
        celsiusValue,
        toUnit
    );
};

export const convertValue = (
    value: number,
    fromUnit: UnitDefinition,
    toUnit: UnitDefinition,
    category: UnitCategoryId
): number => {
    if (category === "temperature") {
        return convertTemperature(
            value,
            fromUnit.id,
            toUnit.id
        );
    }

    if (
        fromUnit.factor === undefined ||
        toUnit.factor === undefined
    ) {
        return value;
    }

    const baseValue =
        value * fromUnit.factor;

    return baseValue / toUnit.factor;
};

export const formatConvertedValue = (
    value: number
): string => {
    if (!Number.isFinite(value)) {
        return "";
    }

    if (value === 0) {
        return "0";
    }

    if (
        Math.abs(value) >= 0.000001 &&
        Math.abs(value) < 1e12
    ) {
        return Number(
            value.toPrecision(12)
        ).toString();
    }

    return value
        .toExponential(8)
        .replace(/\.?0+e/, "e");
};