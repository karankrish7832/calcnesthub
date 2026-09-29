const age = {
    name: "Age Calculator",
    title: "Age Calculator",
    description:
        "Calculate your exact age in years, months, and days and find out when your next birthday is.",
    keywords: [
        "age calculator",
        "calculate age",
        "age calculator online",
        "exact age calculator",
        "date of birth calculator",
        "birthday calculator",
        "age in years months days",
    ],
    dateOfBirth: "Date of Birth",
    asOfDate: "Calculate Age As Of",
    calculate: "Calculate Age",
    reset: "Reset",
    age: "Age",
    years: "years",
    months: "months",
    days: "days",
    totalMonths: "Total Months",
    totalWeeks: "Total Weeks",
    totalDays: "Total Days",
    nextBirthday: "Next Birthday",
    daysUntilBirthday: "Days Until Next Birthday",
    resultTitle: "Age Result",
    enterDateOfBirth: "DD-MM-YYYY",
    enterAsOfDate: "DD-MM-YYYY",
    validation: {
        dateOfBirthRequired:
            "Date of birth is required.",
        dateOfBirthInvalid:
            "Please enter a valid date of birth.",
        dateOfBirthFuture:
            "Date of birth cannot be after the calculation date.",
        asOfDateRequired:
            "Calculation date is required.",
        asOfDateInvalid:
            "Please enter a valid calculation date.",
    },
    explanation: {
        title: "How Age Is Calculated",
        intro1:
            "An age calculator determines a person's age by comparing their date of birth with a selected calculation date.",
        intro2:
            "The result shows the completed years, remaining months, and remaining days between the two dates.",
        formulaTitle:
            "Age Calculation",
        formula:
            "Age = Calculation Date − Date of Birth",
        where:
            "The calculation is performed using calendar years, months, and days rather than simply dividing the total number of days by 365.",
        exampleTitle:
            "Age Calculation Example",
        exampleIntro:
            "Suppose a person's date of birth is 15 January 1995 and the calculation date is 20 April 2025.",
        exampleResult:
            "The person's age is 30 years, 3 months, and 5 days.",
        totalDaysExplanation:
            "The calculator also calculates the total number of completed days between the date of birth and the calculation date.",
        stepsTitle:
            "How to Calculate Age",
        step1:
            "Enter your date of birth.",
        step2:
            "Select the date on which you want to calculate your age.",
        step3:
            "Click the Calculate Age button.",
        step4:
            "The calculator displays your age in years, months, and days.",
        step5:
            "The calculator also shows your total months, weeks, and days.",
        step6:
            "Your next birthday and the number of days remaining until it are also displayed.",
        birthdayTitle:
            "Next Birthday",
        birthdayExplanation:
            "The next birthday is calculated based on the month and day of your date of birth. If your birthday is February 29, the calculator uses February 28 in non-leap years.",
        faqTitle:
            "Frequently Asked Questions",
        faqs: [
            {
                id: 1,
                question:
                    "How is age calculated?",
                answer:
                    "Age is calculated by comparing the date of birth with the selected calculation date and determining the completed years, months, and days between them.",
            },
            {
                id: 2,
                question:
                    "Can I calculate my age as of a past date?",
                answer:
                    "Yes. Select any date that is on or after your date of birth as the calculation date.",
            },
            {
                id: 3,
                question:
                    "What does total days mean?",
                answer:
                    "Total days represents the complete number of days between your date of birth and the selected calculation date.",
            },
            {
                id: 4,
                question:
                    "Why is my age shown in years, months, and days?",
                answer:
                    "Calendar months do not all contain the same number of days. Showing years, months, and days provides a calendar-based representation of your exact age.",
            },
            {
                id: 5,
                question:
                    "How is the next birthday calculated?",
                answer:
                    "The calculator finds the next occurrence of the month and day from your date of birth after the selected calculation date.",
            },
            {
                id: 6,
                question:
                    "How are February 29 birthdays handled?",
                answer:
                    "For a February 29 date of birth, the next birthday is treated as February 28 in a non-leap year.",
            },
        ],
    },
};

export default age;