import type { Calculator } from "./calculator.types";

export const calculators: Calculator[] = [
    {
        id: "simple-interest",
        translationKey: "calculators.simpleInterest",
        category: "Financial",
        path: "/calculators/simple-interest",
    },
    {
        id: "compound-interest",
        translationKey: "calculators.compoundInterest",
        category: "Financial",
        path: "/calculators/compound-interest",
    },
    {
        id: "emi",
        translationKey: "calculators.emi",
        category: "Financial",
        path: "/calculators/emi",
    },
    {
        id: "loan",
        translationKey: "calculators.loan",
        category: "Financial",
        path: "/calculators/loan",
    },
    {
        id: "sip",
        translationKey: "calculators.sip",
        category: "Financial",
        path: "/calculators/sip",
    },
    {
        id: "fixed-deposit",
        translationKey: "calculators.fixedDeposit",
        category: "Financial",
        path: "/calculators/fixed-deposit",
    },
    {
        id: "percentage",
        translationKey: "calculators.percentage",
        category: "Math",
        path: "/calculators/percentage",
    },
    {
        id: "average",
        translationKey: "calculators.average",
        category: "Math",
        path: "/calculators/average",
    },
    {
        id: "bmi",
        translationKey: "calculators.bmi",
        category: "Health",
        path: "/calculators/bmi",
    },
    {
        id: "age",
        translationKey: "calculators.age",
        category: "Everyday",
        path: "/calculators/age",
    },
    {
        id: "unit-converter",
        translationKey: "calculators.unitConverter",
        category: "Everyday",
        path: "/calculators/unit-converter",
    },
];