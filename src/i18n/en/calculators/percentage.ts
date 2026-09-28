const percentage = {
    name: "Percentage",
    title: "Percentage Calculator",
    description:
        "Calculate percentages, percentage increases, and percentage decreases quickly and easily.",
    keywords: [
        "percentage",
        "percentage calculator",
        "percentage increase",
        "percentage decrease",
        "percent calculator",
        "percentage calculation",
        "percentage change",
    ],
    calculationType: "Calculation Type",
    percentageOfOption: "What is X% of Y?",
    whatPercentageOption:
        "X is what percentage of Y?",
    percentageIncreaseOption:
        "Percentage Increase",
    percentageDecreaseOption:
        "Percentage Decrease",
    percentage: "Percentage",
    enterPercentage: "Enter percentage",
    value: "Value",
    enterValue: "Enter value",
    firstValue: "First Value",
    enterFirstValue: "Enter first value",
    secondValue: "Second Value",
    enterSecondValue: "Enter second value",
    originalValue: "Original Value",
    enterOriginalValue: "Enter original value",
    newValue: "New Value",
    enterNewValue: "Enter new value",
    calculate: "Calculate",
    reset: "Reset",
    result: "Calculated Value",
    percentageResult: "Calculated Percentage",
    percentageIncreaseResult: "Percentage Increase",
    percentageDecreaseResult: "Percentage Decrease",
    validation: {
        firstValueRequired:
            "Please enter the first value.",
        firstValueInvalid:
            "Please enter a valid first value.",
        secondValueRequired:
            "Please enter the second value.",
        secondValueInvalid:
            "Please enter a valid second value.",
        secondValueNotZero:
            "The second value must not be zero.",
        firstValueNotZero:
            "The original value must not be zero.",
    },
    explanation: {
        title: "How to Calculate Percentages",
        intro1:
            "A percentage represents a number as a fraction of 100. Percentages are commonly used to calculate discounts, increases, decreases, changes, and proportions.",
        intro2:
            "This percentage calculator supports common percentage calculations, including finding a percentage of a value, finding what percentage one value is of another, and calculating percentage increases and decreases.",
        formulaTitle:
            "Percentage Calculation Formulas",
        percentageOfTitle:
            "What is X% of Y?",
        percentageOfFormula:
            "Result = (X / 100) × Y",
        percentageOfExample:
            "For example, 20% of 500 = (20 / 100) × 500 = 100.",
        whatPercentageTitle:
            "X is What Percentage of Y?",
        whatPercentageFormula:
            "Percentage = (X / Y) × 100",
        whatPercentageExample:
            "For example, 100 is what percentage of 500? (100 / 500) × 100 = 20%.",
        increaseTitle:
            "Percentage Increase",
        increaseFormula:
            "Percentage Increase = ((New Value − Original Value) / Original Value) × 100",
        increaseExample:
            "For example, if a value increases from 500 to 600, the percentage increase is ((600 − 500) / 500) × 100 = 20%.",
        decreaseTitle:
            "Percentage Decrease",
        decreaseFormula:
            "Percentage Decrease = ((Original Value − New Value) / Original Value) × 100",
        decreaseExample:
            "For example, if a value decreases from 600 to 500, the percentage decrease is ((600 − 500) / 600) × 100 ≈ 16.67%.",
        stepsTitle:
            "How to Use the Percentage Calculator",
        step1:
            "Select the type of percentage calculation you want to perform.",
        step2:
            "Enter the required values.",
        step3:
            "Click the Calculate button.",
        step4:
            "The calculator displays the calculated percentage or result.",
        step5:
            "Use the Reset button to clear the inputs and start a new calculation.",
        faqTitle:
            "Frequently Asked Questions",
        faqs: [
            {
                id: 1,
                question:
                    "What is a percentage?",
                answer:
                    "A percentage is a way of expressing a number as a fraction of 100. For example, 25% means 25 out of 100.",
            },
            {
                id: 2,
                question:
                    "How do I calculate a percentage of a number?",
                answer:
                    "Divide the percentage by 100 and multiply it by the number. For example, 20% of 500 is (20 / 100) × 500 = 100.",
            },
            {
                id: 3,
                question:
                    "How do I calculate percentage increase?",
                answer:
                    "Subtract the original value from the new value, divide the result by the original value, and multiply by 100.",
            },
            {
                id: 4,
                question:
                    "How do I calculate percentage decrease?",
                answer:
                    "Subtract the new value from the original value, divide the result by the original value, and multiply by 100.",
            },
        ],
    },
};

export default percentage;