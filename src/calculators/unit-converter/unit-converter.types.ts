export type UnitCategoryId =
    | "length"
    | "weight"
    | "temperature"
    | "area"
    | "volume"
    | "time"
    | "speed"
    | "data";

export interface UnitDefinition {
    id: string;
    label: string;
    symbol: string;
    factor?: number;
}

export interface UnitCategory {
    id: UnitCategoryId;
    units: UnitDefinition[];
}

export interface UnitConverterState {
    category: UnitCategoryId;
    fromUnit: string;
    toUnit: string;
    value: string;
}