const simpleInterest = {
    title: "Simple Interest Calculator",
    description:
        "Calculate simple interest and total amount based on principal, interest rate, and time.",
    name: "Simple Interest",
    keywords: [
        "interest",
        "simple interest",
        "investment",
        "principal",
        "rate",
        "time",
    ],
    principalAmount: "Principal Amount",
    enterAmount: "Enter amount",
    interestRate: "Interest Rate",
    enterRate: "Enter rate",
    timePeriod: "Time Period",
    enterYears: "Enter years",
    years: "Years",
    enterMonths: "Enter months",
    months: "Months",
    calculateInterest: "Calculate Interest",
    simpleInterest: "Simple Interest",
    totalAmount: "Total Amount",
    validation: {
        principalRequired: "Principal amount is required.",
        principalGreaterThanZero:
            "Principal amount must be greater than 0.",
        rateRequired: "Interest rate is required.",
        rateNotNegative:
            "Interest rate cannot be negative.",
        yearsInvalid: "Years must be 0 or greater.",
        monthsInvalid: "Months must be 0 or greater.",
        tenureRequired:
            "Please enter a time period greater than 0.",
    },
    explanation: {
        title: "How Simple Interest Is Calculated",
        intro1:
            "Simple interest is a method of calculating interest based only on the original principal amount. It is commonly used for short-term loans, investments, deposits, and other financial calculations where interest does not compound.",
        intro2:
            "This simple interest calculator calculates both the interest amount and the total amount based on the principal, annual interest rate, and time period.",
        formulaTitle: "Simple Interest Formula",
        where: "Where:",
        principal: "P = Principal amount",
        rate: "R = Annual interest rate in percent",
        time: "T = Time period in years (months are converted into years)",
        simpleInterest: "SI = Simple interest",
        formula:
            "SI = (P × R × T) / 100",
        totalAmountFormula:
            "Total Amount = Principal + Simple Interest",
        exampleFormula:
            "SI = (1,00,000 × 8 × 5) / 100",
        totalAmountIntro:
            "After calculating the simple interest, the total amount can be calculated using:",
        exampleTitle: "Simple Interest Example",
        exampleIntro:
            "Suppose you invest ₹1,00,000 at an annual interest rate of 8% for 5 years.",
        exampleFormulaIntro:
            "Using the simple interest formula:",
        exampleInterest:
            "Simple Interest = ₹40,000",
        exampleTotal: "The total amount is: ₹1,40,000",
        stepsTitle: "How to Calculate Simple Interest",
        step1: "Enter the original principal amount.",
        step2: "Enter the annual interest rate as a percentage.",
        step3: "Enter the time period using years and months.",
        step4:
            "Convert the months into years and apply the simple interest formula to calculate the interest.",
        step5:
            "Add the interest to the principal to find the total amount.",
        faqTitle: "Frequently Asked Questions",
        faqs: [
            {
                id: 1,
                question: "What is simple interest?",
                answer:
                    "Simple interest is interest calculated only on the original principal amount. The previously earned interest is not added to the principal for future interest calculations.",
            },
            {
                id: 2,
                question: "Does simple interest compound?",
                answer:
                    "No. Simple interest does not compound. Unlike compound interest, interest is calculated using the original principal throughout the specified period.",
            },
            {
                id: 3,
                question: "What is the formula for simple interest?",
                answer:
                    "The simple interest formula is SI = (P × R × T) / 100, where P is the principal, R is the annual interest rate, and T is the time period in years.",
            },
            {
                id: 4,
                question:
                    "What is the difference between simple interest and compound interest?",
                answer:
                    "Simple interest is calculated only on the original principal, while compound interest can be calculated on the principal plus previously accumulated interest. As a result, compound interest can grow faster over longer periods.",
            },
        ],
    },
};

export default simpleInterest;