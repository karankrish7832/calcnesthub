const unitConverter = {
    name: "Unit Converter",
    title: "Unit Converter",
    description:
        "Convert values between different units quickly and accurately.",
    category: "Category",
    from: "From",
    to: "To",
    value: "Value",
    result: "Result",
    swap: "Swap units",
    reset: "Reset",
    categories: {
        length: "Length",
        weight: "Weight",
        temperature: "Temperature",
        area: "Area",
        volume: "Volume",
        time: "Time",
        speed: "Speed",
        data: "Data",
    },
    validation: {
        invalid: "Please enter a valid number.",
    },
    explanation: {
        title: "How Unit Conversion Works",

        intro1:
            "A unit converter changes a value from one unit of measurement to another equivalent unit.",

        intro2:
            "For example, you can convert meters to kilometers, kilograms to pounds, Celsius to Fahrenheit, or liters to gallons.",

        howItWorksTitle:
            "How to Use the Unit Converter",

        step1:
            "Select the category of measurement you want to convert.",

        step2:
            "Enter the value you want to convert.",

        step3:
            "Select the unit you are converting from and the unit you are converting to.",

        step4:
            "The converted result is calculated automatically.",

        exampleTitle:
            "Unit Conversion Example",

        exampleIntro:
            "Suppose you want to convert 1000 meters to kilometers.",

        example:
            "1000 meters = 1 kilometer",

        categoriesTitle:
            "Supported Unit Categories",

        length:
            "Length: millimeter, centimeter, meter, kilometer, inch, foot, yard, and mile.",

        weight:
            "Weight: milligram, gram, kilogram, ounce, pound, and stone.",

        temperature:
            "Temperature: Celsius, Fahrenheit, and Kelvin.",

        area:
            "Area: square millimeter, square centimeter, square meter, square kilometer, square inch, square foot, square yard, and acre.",

        volume:
            "Volume: milliliter, liter, cubic meter, US gallon, US quart, US pint, and US cup.",

        time:
            "Time: millisecond, second, minute, hour, day, week, and year.",

        speed:
            "Speed: meter per second, kilometer per hour, mile per hour, foot per second, and knot.",

        data:
            "Data: bit, byte, kilobyte, megabyte, gigabyte, terabyte, and petabyte.",

        faqTitle:
            "Frequently Asked Questions",

        faqs: [
            {
                id: 1,
                question:
                    "What is a unit converter?",
                answer:
                    "A unit converter converts a measurement from one unit to another equivalent unit.",
            },
            {
                id: 2,
                question:
                    "Which units can I convert?",
                answer:
                    "You can convert units for length, weight, temperature, area, volume, time, speed, and digital data.",
            },
            {
                id: 3,
                question:
                    "Does the calculator convert automatically?",
                answer:
                    "Yes. The result is updated automatically whenever you change the value or either unit.",
            },
            {
                id: 4,
                question:
                    "Can I convert Celsius to Fahrenheit?",
                answer:
                    "Yes. The calculator supports conversions between Celsius, Fahrenheit, and Kelvin.",
            },
            {
                id: 5,
                question:
                    "Can I swap the conversion units?",
                answer:
                    "Yes. Use the swap button to exchange the From and To units.",
            },
            {
                id: 6,
                question:
                    "Are the units limited to the selected category?",
                answer:
                    "Yes. Only units belonging to the selected category are available for conversion.",
            },
        ],
    },
};

export default unitConverter;