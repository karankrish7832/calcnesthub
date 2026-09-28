import { lazy, type ComponentType } from "react";
import type { CalculatorId } from "./calculator.types";

export const calculatorComponents: Partial<
    Record<CalculatorId, ComponentType>
> = {
    "simple-interest": lazy(() => import("./simple-interest/SimpleInterest")),
    "emi": lazy(() => import("./emi/EMI")),
    "compound-interest": lazy(() => import("./compound-interest/CompoundInterest")),
    "percentage": lazy(() => import("./percentage/Percentage")),
    "bmi": lazy(() => import("./bmi/BMI")),
};
