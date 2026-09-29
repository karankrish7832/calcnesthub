import type {
    AgeForm,
    AgeResult,
} from "./age.types";

const parseDate = (
    value: string
): Date => {
    const [year, month, day] =
        value.split("-").map(Number);

    return new Date(
        Date.UTC(
            year,
            month - 1,
            day
        )
    );
};

const isLeapYear = (
    year: number
): boolean => {
    return (
        year % 4 === 0 &&
        (year % 100 !== 0 ||
            year % 400 === 0)
    );
};

const createBirthday = (
    birthDate: Date,
    year: number
): Date => {
    const month =
        birthDate.getUTCMonth();

    const day =
        birthDate.getUTCDate();

    if (
        month === 1 &&
        day === 29 &&
        !isLeapYear(year)
    ) {
        return new Date(
            Date.UTC(
                year,
                1,
                28
            )
        );
    }

    return new Date(
        Date.UTC(
            year,
            month,
            day
        )
    );
};

const getDaysBetween = (
    start: Date,
    end: Date
): number => {
    const millisecondsPerDay =
        24 * 60 * 60 * 1000;

    return Math.round(
        (end.getTime() -
            start.getTime()) /
            millisecondsPerDay
    );
};

export const calculateAge = ({
    dateOfBirth,
    asOfDate,
}: AgeForm): AgeResult => {
    const birthDate =
        parseDate(dateOfBirth);

    const targetDate =
        parseDate(asOfDate);

    const birthYear =
        birthDate.getUTCFullYear();

    const birthMonth =
        birthDate.getUTCMonth();

    const birthDay =
        birthDate.getUTCDate();

    const targetYear =
        targetDate.getUTCFullYear();

    const targetMonth =
        targetDate.getUTCMonth();

    const targetDay =
        targetDate.getUTCDate();

    let years =
        targetYear - birthYear;

    let months =
        targetMonth - birthMonth;

    let days =
        targetDay - birthDay;

    if (days < 0) {
        months--;

        const previousMonthDate =
            new Date(
                Date.UTC(
                    targetYear,
                    targetMonth,
                    0
                )
            );

        days +=
            previousMonthDate.getUTCDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const totalDays =
        getDaysBetween(
            birthDate,
            targetDate
        );

    const totalMonths =
        years * 12 + months;

    const totalWeeks =
        Math.floor(totalDays / 7);

    let nextBirthday =
        createBirthday(
            birthDate,
            targetYear
        );

    if (nextBirthday < targetDate) {
        nextBirthday =
            createBirthday(
                birthDate,
                targetYear + 1
            );
    }

    const daysUntilBirthday =
        getDaysBetween(
            targetDate,
            nextBirthday
        );

    return {
        years,
        months,
        days,
        totalMonths,
        totalWeeks,
        totalDays,
        nextBirthday:
            `${nextBirthday.getUTCFullYear()}-${String(
                nextBirthday.getUTCMonth() + 1
            ).padStart(2, "0")}-${String(
                nextBirthday.getUTCDate()
            ).padStart(2, "0")}`,
        daysUntilBirthday,
    };
};

export const getTodayDate = (): string => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(
        today.getMonth() + 1
    ).padStart(2, "0");
    const day = String(
        today.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
};