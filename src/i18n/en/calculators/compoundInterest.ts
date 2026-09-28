const compoundInterest = {
    name: "Compound Interest",
    title: "Compound Interest Calculator",
    description:
        "Calculate compound interest and the total amount based on the principal amount, interest rate, compounding frequency, and time period.",
    keywords: [
        "compound interest",
        "compound interest calculator",
        "investment calculator",
        "interest calculator",
        "investment",
        "principal",
        "interest rate",
        "compounding",
    ],
    principalAmount: "Principal Amount",
    enterAmount: "Enter amount",
    interestRate: "Interest Rate",
    enterRate: "Enter rate",
    timePeriod: "Time Period",
    years: "Years",
    enterYears: "Enter years",
    months: "Months",
    enterMonths: "Enter months",
    compoundingFrequency: "Compounding Frequency",
    annually: "Annually",
    semiAnnually: "Semi-annually",
    quarterly: "Quarterly",
    monthly: "Monthly",
    daily: "Daily",
    compoundInterest: "Compound Interest",
    totalAmount: "Total Amount",
    duration: "Duration",
    year: "year",
    month: "month",
    calculate: "Calculate Interest",
    reset: "Reset",
    validation: {
        principalRequired: "Principal amount is required.",
        principalGreaterThanZero:
            "Principal amount must be greater than 0.",
        rateRequired: "Interest rate is required.",
        rateNotNegative:
            "Interest rate cannot be negative.",
        yearsInvalid: "Years must be 0 or greater.",
        monthsInvalid: "Months must be 0 or greater.",
        frequencyRequired:
            "Please select a compounding frequency.",
        tenureRequired:
            "Please enter a time period greater than 0.",
    },
    explanation: {
        title: "How Compound Interest Is Calculated",
        intro1:
            "Compound interest is calculated on the original principal amount as well as the interest accumulated during previous compounding periods. This allows the investment or loan balance to grow over time.",
        intro2:
            "This compound interest calculator calculates the compound interest and total amount based on the principal amount, annual interest rate, compounding frequency, and time period.",
        formulaTitle: "Compound Interest Formula",
        formula:
            "A = P × (1 + R / n)^(n × T)",
        where: "Where:",
        principal: "P = Principal amount",
        rate: "R = Annual interest rate in decimal form",
        frequency:
            "n = Number of times interest is compounded per year",
        time: "T = Time period in years",
        amount:
            "A = Total amount after compound interest",
        interestTitle: "Compound Interest",
        interestIntro:
            "The compound interest can be calculated by subtracting the original principal amount from the total amount.",
        interestFormula:
            "Compound Interest = Total Amount − Principal",
        frequencyTitle: "Compounding Frequency",
        frequencyIntro:
            "Compounding frequency determines how often interest is added to the principal amount during a year. More frequent compounding can result in a higher total amount over the same period.",
        annually: "Annually: Interest is compounded once per year.",
        semiAnnually:
            "Semi-annually: Interest is compounded twice per year.",
        quarterly:
            "Quarterly: Interest is compounded four times per year.",
        monthly:
            "Monthly: Interest is compounded twelve times per year.",
        daily:
            "Daily: Interest is compounded 365 times per year.",
        exampleTitle: "Compound Interest Example",
        exampleIntro:
            "Suppose you invest ₹1,00,000 at an annual interest rate of 8% for 5 years with annual compounding.",
        examplePrincipal:
            "Principal amount: ₹1,00,000",
        exampleRate:
            "Annual interest rate: 8%",
        exampleTenure:
            "Time period: 5 years",
        exampleFrequency:
            "Compounding frequency: Annually",
        exampleFormulaIntro:
            "Using the compound interest formula:",
        exampleFormula:
            "A = 1,00,000 × (1 + 0.08 / 1)^(1 × 5)",
        exampleAmount:
            "Total Amount ≈ ₹1,46,932.81",
        exampleInterest:
            "Compound Interest ≈ ₹46,932.81",
        stepsTitle: "How to Calculate Compound Interest",
        step1:
            "Enter the original principal amount.",
        step2:
            "Enter the annual interest rate as a percentage.",
        step3:
            "Enter the time period using years and months.",
        step4:
            "Select how frequently the interest is compounded.",
        step5:
            "The calculator applies the compound interest formula to calculate the compound interest and total amount.",
        faqTitle: "Frequently Asked Questions",
        faqs: [
            {
                id: 1,
                question:
                    "What is compound interest?",
                answer:
                    "Compound interest is interest calculated on the original principal amount and the interest accumulated from previous compounding periods.",
            },
            {
                id: 2,
                question:
                    "What is the formula for compound interest?",
                answer:
                    "The compound interest formula is A = P × (1 + R / n)^(n × T), where P is the principal amount, R is the annual interest rate in decimal form, n is the number of compounding periods per year, and T is the time period in years.",
            },
            {
                id: 3,
                question:
                    "How does compounding frequency affect interest?",
                answer:
                    "Compounding frequency determines how often interest is added to the principal. When interest is compounded more frequently, the total amount can be higher over the same period.",
            },
            {
                id: 4,
                question:
                    "What is the difference between simple interest and compound interest?",
                answer:
                    "Simple interest is calculated only on the original principal amount, while compound interest is calculated on the principal and previously accumulated interest.",
            },
        ],
    },
};

export default compoundInterest;