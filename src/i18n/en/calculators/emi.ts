const emi = {
    name: "EMI Calculator",
    title: "EMI Calculator",
    description: "Calculate your monthly loan EMI, total interest, and total repayment amount.",
    loanAmount: "Loan Amount",
    enterAmount: "Enter loan amount",
    interestRate: "Interest Rate (% per year)",
    enterRate: "Enter interest rate",
    loanTenure: "Loan Tenure",
    years: "Years",
    enterYears: "Enter years",
    months: "Months",
    enterMonths: "Enter months",
    monthlyEmi: "Monthly EMI",
    totalInterest: "Total Interest",
    totalPayment: "Total Payment",
    duration: "Duration",
    year: "year",
    month: "month",
    calculate: "Calculate EMI",
    reset: "Reset",
    validation: {
        loanAmountRequired: "Please enter the loan amount.",
        loanAmountInvalid: "Loan amount must be greater than 0.",
        interestRateRequired: "Please enter the interest rate.",
        interestRateInvalid: "Interest rate cannot be negative.",
        yearsInvalid: "Years must be 0 or greater.",
        monthsInvalid: "Months must be 0 or greater.",
        tenureRequired: "Please enter a loan tenure greater than 0."
    },
    explanation: {
        title: "EMI Calculator: How It Works",
        intro1: "An Equated Monthly Instalment (EMI) is the fixed amount you pay every month towards repaying a loan. Each EMI consists of both principal and interest components.",
        intro2: "The EMI depends on the loan amount, annual interest rate, and loan tenure. Use the EMI calculator above to estimate your monthly payment and total repayment amount.",
        formulaTitle: "EMI Formula",
        formula: "EMI = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)",
        where: "Where:",
        principal: "P = Principal loan amount",
        rate: "Annual interest rate = Interest rate charged per year",
        monthlyRate: "r = Monthly interest rate = Annual interest rate ÷ 12 ÷ 100",
        tenure: "n = Total number of monthly instalments",
        emi: "EMI = Equated Monthly Instalment paid each month",
        interestTitle: "Total Interest and Total Payment",
        interestIntro: "The total amount you repay over the loan tenure includes the original loan amount and the total interest charged by the lender.",
        totalPaymentFormula: "Total Payment = Monthly EMI × Total Number of Months",
        totalInterestFormula: "Total Interest = Total Payment − Principal Loan Amount",
        exampleTitle: "EMI Calculation Example",
        exampleIntro: "Suppose you take a loan of ₹5,00,000 at an annual interest rate of 8.5% for 5 years.",
        exampleLoan: "Loan amount: ₹5,00,000",
        exampleRate: "Annual interest rate: 8.5%",
        exampleTenure: "Loan tenure: 5 years (60 months)",
        exampleFormulaIntro: "The monthly interest rate is:",
        exampleFormula: "8.5 ÷ 12 ÷ 100 = 0.0070833",
        exampleEmi: "Using the EMI formula, the monthly EMI is approximately ₹10,258.27.",
        exampleTotalInterest: "Total Interest ≈ ₹1,15,496.20",
        exampleTotalPayment: "Total Payment ≈ ₹6,15,496.20",
        stepsTitle: "How to Calculate EMI",
        step1: "Enter the total loan amount.",
        step2: "Enter the annual interest rate charged on the loan.",
        step3: "Enter the loan tenure using years and months.",
        step4: "The calculator converts the tenure into total months and calculates the monthly EMI.",
        step5: "The calculator displays the monthly EMI, total interest, total payment, and loan duration.",
        faqTitle: "Frequently Asked Questions",
        faqs: [
            {
                id: 1,
                question: "What is EMI?",
                answer: "EMI stands for Equated Monthly Instalment. It is the fixed amount you pay every month towards repaying a loan, including both principal and interest."
            },
            {
                id: 2,
                question: "How is EMI calculated?",
                answer: "EMI is calculated using the loan amount, monthly interest rate, and total number of monthly instalments. The standard EMI formula is used to determine the monthly payment."
            },
            {
                id: 3,
                question: "Does a higher interest rate increase the EMI?",
                answer: "Yes. When the loan amount and tenure remain the same, a higher interest rate generally results in a higher monthly EMI and higher total interest."
            },
            {
                id: 4,
                question: "Does increasing the loan tenure reduce the EMI?",
                answer: "Generally, increasing the loan tenure reduces the monthly EMI because the repayment is spread over more months. However, a longer tenure can result in paying more total interest."
            },
            {
                id: 5,
                question: "Can I enter only months for the loan tenure?",
                answer: "Yes. You can enter the tenure entirely in months. For example, entering 60 months is equivalent to 5 years."
            },
            {
                id: 6,
                question: "What happens if the interest rate is 0%?",
                answer: "When the interest rate is 0%, there is no interest charged. The monthly EMI is simply the loan amount divided by the total number of months."
            },
            {
                id: 7,
                question: "What is the difference between EMI and total payment?",
                answer: "EMI is the amount paid each month, while total payment is the total amount paid throughout the loan tenure, including both principal and interest."
            }
        ]
    }
};

export default emi;