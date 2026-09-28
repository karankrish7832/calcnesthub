const bmi = {
    name: "BMI",
    title: "BMI Calculator",
    description:
        "Calculate your Body Mass Index (BMI) based on your age, sex, weight, and height.",
    keywords: [
        "bmi",
        "bmi calculator",
        "body mass index",
        "bmi calculator online",
        "healthy weight",
        "weight calculator",
        "bmi for age",
        "child bmi calculator",
        "teen bmi calculator",
    ],
    ageYears: "Age (Years)",
    enterAgeYears: "Enter years",
    ageMonths: "Age (Months)",
    enterAgeMonths: "Enter months",
    sex: "Sex",
    male: "Male",
    female: "Female",
    unitSystem: "Unit System",
    metric: "Metric (kg, cm)",
    imperial: "Imperial (lb, ft, in)",
    weight: "Weight",
    enterWeight: "Enter weight",
    height: "Height",
    enterHeight: "Enter height",
    feet: "Height (Feet)",
    enterFeet: "Enter feet",
    inches: "Height (Inches)",
    enterInches: "Enter inches",
    kg: "kg",
    lb: "lb",
    cm: "cm",
    ft: "ft",
    in: "in",
    calculate: "Calculate BMI",
    reset: "Reset",
    bmiResult: "BMI",
    category: "Category",
    resultTitle: "BMI Result",
    percentile: "BMI-for-age Percentile",
    categories: {
        underweight: "Under weight",
        normal: "Normal weight",
        healthyWeight: "Healthy weight",
        overweight: "Over Weight",
        obesity: "Obesity",
    },
    validation: {
        ageRequired: "Age is required.",
        ageInvalid:
            "Age must be at least 2 years.",
        ageMonthsInvalid:
            "Age in months must be between 0 and 11.",
        weightRequired: "Weight is required.",
        weightInvalid:
            "Weight must be greater than 0.",
        heightRequired: "Height is required.",
        heightInvalid:
            "Height must be greater than 0.",
        heightFeetRequired:
            "Height in feet is required.",
        heightFeetInvalid:
            "Height in feet must be greater than 0.",
        heightInchesInvalid:
            "Height in inches must be between 0 and 11.",
    },
    explanation: {
        title: "How BMI Is Calculated",
        intro1:
            "Body Mass Index (BMI) is a measure that uses a person's weight and height to estimate their weight category.",
        intro2:
            "BMI is commonly used as a general screening measure. It does not directly measure body fat and does not account for factors such as muscle mass or body composition.",
        formulaTitle: "BMI Formula",
        metricFormula:
            "BMI = Weight (kg) / Height² (m)",
        imperialFormula:
            "BMI = (Weight (lb) / Height² (in)) × 703",
        where: "Where:",
        weight:
            "Weight = Body weight",
        height:
            "Height = Body height",
        bmi:
            "BMI = Body Mass Index",
        categoriesTitle:
            "BMI Categories for Adults",
        underweight:
            "Below 18.5 = Underweight",
        normal:
            "18.5 – 24.9 = Normal weight",
        overweight:
            "25.0 – 29.9 = Overweight",
        obesity:
            "30.0 and above = Obesity",
        childCategoriesTitle:
            "BMI Categories for Children and Teens",
        childUnderweight:
            "Below the 5th percentile = Underweight",
        childHealthyWeight:
            "5th to below the 85th percentile = Healthy weight",
        childOverweight:
            "85th to below the 95th percentile = Overweight",
        childObesity:
            "95th percentile and above = Obesity",
        childExplanation:
            "For children and teenagers ages 2 through 19, BMI is interpreted using age- and sex-specific BMI-for-age percentiles rather than the adult BMI categories.",
        exampleTitle: "BMI Example",
        exampleIntro:
            "Suppose an adult weighs 70 kg and is 1.75 m tall.",
        exampleFormula:
            "BMI = 70 / (1.75 × 1.75)",
        exampleResult:
            "BMI ≈ 22.86",
        exampleCategory:
            "This falls within the normal weight BMI range for adults.",
        stepsTitle:
            "How to Calculate BMI",
        step1:
            "Enter your age in years and months.",
        step2:
            "Select your sex.",
        step3:
            "Select the unit system you want to use.",
        step4:
            "Enter your weight and height.",
        step5:
            "Click the Calculate BMI button.",
        step6:
            "The calculator displays your BMI and the corresponding category. For children and teenagers, it also displays the BMI-for-age percentile.",
        faqTitle:
            "Frequently Asked Questions",
        faqs: [
            {
                id: 1,
                question: "What is BMI?",
                answer:
                    "BMI stands for Body Mass Index. It is a numerical value calculated using weight and height and is commonly used as a general screening measure.",
            },
            {
                id: 2,
                question:
                    "What is a normal BMI for adults?",
                answer:
                    "For adults, a BMI from 18.5 to 24.9 is commonly classified as the normal weight range.",
            },
            {
                id: 3,
                question:
                    "How is BMI interpreted for children and teenagers?",
                answer:
                    "For children and teenagers ages 2 through 19, BMI is interpreted using BMI-for-age percentiles based on age and sex. The percentile indicates how the BMI compares with other children or teenagers of the same age and sex.",
            },
            {
                id: 4,
                question:
                    "Does BMI measure body fat?",
                answer:
                    "No. BMI uses weight and height and does not directly measure body fat or distinguish between muscle mass and fat mass.",
            },
            {
                id: 5,
                question:
                    "Why do children need age and sex for BMI?",
                answer:
                    "Children and teenagers are still growing, so BMI changes with age. BMI-for-age percentiles account for age and sex when interpreting BMI from ages 2 through 19.",
            },
            {
                id: 6,
                question:
                    "Can BMI be used for everyone?",
                answer:
                    "BMI is a general screening measure. Different methods or considerations may apply to children under 2, pregnant people, athletes, and some other groups.",
            },
        ],
    },
};

export default bmi;