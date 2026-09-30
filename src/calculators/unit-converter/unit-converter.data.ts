import type {
    UnitCategory,
    UnitCategoryId,
} from "./unit-converter.types";

export const UNIT_CATEGORIES: UnitCategory[] = [
    {
        id: "length",
        units: [
            {
                id: "millimeter",
                label: "Millimeter",
                symbol: "mm",
                factor: 0.001,
            },
            {
                id: "centimeter",
                label: "Centimeter",
                symbol: "cm",
                factor: 0.01,
            },
            {
                id: "meter",
                label: "Meter",
                symbol: "m",
                factor: 1,
            },
            {
                id: "kilometer",
                label: "Kilometer",
                symbol: "km",
                factor: 1000,
            },
            {
                id: "inch",
                label: "Inch",
                symbol: "in",
                factor: 0.0254,
            },
            {
                id: "foot",
                label: "Foot",
                symbol: "ft",
                factor: 0.3048,
            },
            {
                id: "yard",
                label: "Yard",
                symbol: "yd",
                factor: 0.9144,
            },
            {
                id: "mile",
                label: "Mile",
                symbol: "mi",
                factor: 1609.344,
            },
        ],
    },
    {
        id: "weight",
        units: [
            {
                id: "milligram",
                label: "Milligram",
                symbol: "mg",
                factor: 0.000001,
            },
            {
                id: "gram",
                label: "Gram",
                symbol: "g",
                factor: 0.001,
            },
            {
                id: "kilogram",
                label: "Kilogram",
                symbol: "kg",
                factor: 1,
            },
            {
                id: "ounce",
                label: "Ounce",
                symbol: "oz",
                factor: 0.028349523125,
            },
            {
                id: "pound",
                label: "Pound",
                symbol: "lb",
                factor: 0.45359237,
            },
            {
                id: "stone",
                label: "Stone",
                symbol: "st",
                factor: 6.35029318,
            },
        ],
    },
    {
        id: "temperature",
        units: [
            {
                id: "celsius",
                label: "Celsius",
                symbol: "°C",
            },
            {
                id: "fahrenheit",
                label: "Fahrenheit",
                symbol: "°F",
            },
            {
                id: "kelvin",
                label: "Kelvin",
                symbol: "K",
            },
        ],
    },
    {
        id: "area",
        units: [
            {
                id: "square-millimeter",
                label: "Square Millimeter",
                symbol: "mm²",
                factor: 0.000001,
            },
            {
                id: "square-centimeter",
                label: "Square Centimeter",
                symbol: "cm²",
                factor: 0.0001,
            },
            {
                id: "square-meter",
                label: "Square Meter",
                symbol: "m²",
                factor: 1,
            },
            {
                id: "square-kilometer",
                label: "Square Kilometer",
                symbol: "km²",
                factor: 1000000,
            },
            {
                id: "square-inch",
                label: "Square Inch",
                symbol: "in²",
                factor: 0.00064516,
            },
            {
                id: "square-foot",
                label: "Square Foot",
                symbol: "ft²",
                factor: 0.09290304,
            },
            {
                id: "square-yard",
                label: "Square Yard",
                symbol: "yd²",
                factor: 0.83612736,
            },
            {
                id: "acre",
                label: "Acre",
                symbol: "acre",
                factor: 4046.8564224,
            },
        ],
    },
    {
        id: "volume",
        units: [
            {
                id: "milliliter",
                label: "Milliliter",
                symbol: "mL",
                factor: 0.001,
            },
            {
                id: "liter",
                label: "Liter",
                symbol: "L",
                factor: 1,
            },
            {
                id: "cubic-meter",
                label: "Cubic Meter",
                symbol: "m³",
                factor: 1000,
            },
            {
                id: "us-gallon",
                label: "US Gallon",
                symbol: "gal",
                factor: 3.785411784,
            },
            {
                id: "us-quart",
                label: "US Quart",
                symbol: "qt",
                factor: 0.946352946,
            },
            {
                id: "us-pint",
                label: "US Pint",
                symbol: "pt",
                factor: 0.473176473,
            },
            {
                id: "us-cup",
                label: "US Cup",
                symbol: "cup",
                factor: 0.2365882365,
            },
        ],
    },
    {
        id: "time",
        units: [
            {
                id: "millisecond",
                label: "Millisecond",
                symbol: "ms",
                factor: 0.001,
            },
            {
                id: "second",
                label: "Second",
                symbol: "s",
                factor: 1,
            },
            {
                id: "minute",
                label: "Minute",
                symbol: "min",
                factor: 60,
            },
            {
                id: "hour",
                label: "Hour",
                symbol: "hr",
                factor: 3600,
            },
            {
                id: "day",
                label: "Day",
                symbol: "day",
                factor: 86400,
            },
            {
                id: "week",
                label: "Week",
                symbol: "week",
                factor: 604800,
            },
            {
                id: "year",
                label: "Year",
                symbol: "year",
                factor: 31536000,
            },
        ],
    },
    {
        id: "speed",
        units: [
            {
                id: "meter-per-second",
                label: "Meter per Second",
                symbol: "m/s",
                factor: 1,
            },
            {
                id: "kilometer-per-hour",
                label: "Kilometer per Hour",
                symbol: "km/h",
                factor: 0.2777777778,
            },
            {
                id: "mile-per-hour",
                label: "Mile per Hour",
                symbol: "mph",
                factor: 0.44704,
            },
            {
                id: "foot-per-second",
                label: "Foot per Second",
                symbol: "ft/s",
                factor: 0.3048,
            },
            {
                id: "knot",
                label: "Knot",
                symbol: "kn",
                factor: 0.5144444444,
            },
        ],
    },
    {
        id: "data",
        units: [
            {
                id: "bit",
                label: "Bit",
                symbol: "bit",
                factor: 1,
            },
            {
                id: "byte",
                label: "Byte",
                symbol: "B",
                factor: 8,
            },
            {
                id: "kilobyte",
                label: "Kilobyte",
                symbol: "KB",
                factor: 8 * 1024,
            },
            {
                id: "megabyte",
                label: "Megabyte",
                symbol: "MB",
                factor: 8 * 1024 ** 2,
            },
            {
                id: "gigabyte",
                label: "Gigabyte",
                symbol: "GB",
                factor: 8 * 1024 ** 3,
            },
            {
                id: "terabyte",
                label: "Terabyte",
                symbol: "TB",
                factor: 8 * 1024 ** 4,
            },
            {
                id: "petabyte",
                label: "Petabyte",
                symbol: "PB",
                factor: 8 * 1024 ** 5,
            },
        ],
    },
];

export const getCategory = (
    categoryId: UnitCategoryId
): UnitCategory => {
    return (
        UNIT_CATEGORIES.find(
            (category) => category.id === categoryId
        ) ?? UNIT_CATEGORIES[0]
    );
};