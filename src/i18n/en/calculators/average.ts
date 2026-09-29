const average = {
    name: "Average Calculator",
    title: "Average Calculator",
    description:
        "Calculate the average of multiple numbers quickly and accurately.",
    keywords: [
        "average calculator",
        "calculate average",
        "mean calculator",
        "average of numbers",
        "arithmetic mean calculator",
    ],
    number: "Number",
    addNumber: "Add Number",
    remove: "Remove",
    calculate: "Calculate Average",
    reset: "Reset",
    average: "Average",
    sum: "Sum",
    count: "Number of Values",
    resultTitle: "Average Result",
    validation: {
        required:
            "This value is required.",
        invalid:
            "Please enter a valid number.",
    },
    explanation: {
        title: "How Average Is Calculated",
        intro1:
            "An average, also called the arithmetic mean, represents the central value of a set of numbers.",
        intro2:
            "To calculate the average, add all the numbers together and divide the total by the number of values.",
        formulaTitle:
            "Average Formula",
        formula:
            "Average = Sum of all values ÷ Number of values",
        where:
            "The sum is the total of all the numbers, while the number of values represents how many numbers are included in the calculation.",
        exampleTitle:
            "Average Calculation Example",
        exampleIntro:
            "Suppose the numbers are 10, 20, 30, 40, and 50.",
        exampleResult:
            "Sum = 10 + 20 + 30 + 40 + 50 = 150\nAverage = 150 ÷ 5 = 30",
        stepsTitle:
            "How to Calculate an Average",
        step1:
            "Enter the numbers you want to include in the calculation.",
        step2:
            "Click Add Number to add more values if needed.",
        step3:
            "Click Calculate Average.",
        step4:
            "The calculator displays the average, sum, and number of values.",
        faqTitle:
            "Frequently Asked Questions",
        faqs: [
            {
                id: 1,
                question:
                    "What is an average?",
                answer:
                    "An average is a value that represents the central value of a set of numbers. It is calculated by dividing the sum of the values by the number of values.",
            },
            {
                id: 2,
                question:
                    "How is the average calculated?",
                answer:
                    "Add all the numbers together and divide the sum by the total number of values.",
            },
            {
                id: 3,
                question:
                    "Can I calculate the average of decimal numbers?",
                answer:
                    "Yes. The calculator supports decimal numbers as well as whole numbers.",
            },
            {
                id: 4,
                question:
                    "Can I enter negative numbers?",
                answer:
                    "Yes. Negative numbers can be included in the calculation.",
            },
            {
                id: 5,
                question:
                    "Can I add more numbers?",
                answer:
                    "Yes. Click Add Number to add as many values as you need.",
            },
            {
                id: 6,
                question:
                    "What is the difference between average and sum?",
                answer:
                    "The sum is the total obtained by adding all values, while the average is the sum divided by the number of values.",
            },
        ],
    },
};

export default average;