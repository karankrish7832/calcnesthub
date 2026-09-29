import {
    useEffect,
    useRef,
    useState,
    type ChangeEvent,
} from "react";

import { getNumberFormatInfo } from "../utils/numberFormat";
import { parseLocalizedNumber } from "../utils/parseLocalizedNumber";

interface UseLocalizedNumberInputOptions {
    value: string;
    locale: string;
    onChange: (value: string) => void;
}

interface UseLocalizedNumberInputResult {
    displayValue: string;
    handleChange: (
        event: ChangeEvent<HTMLInputElement>
    ) => void;
}

const isDigit = (value: string) => /^\d$/.test(value);

export const useLocalizedNumberInput = ({
    value,
    locale,
    onChange,
}: UseLocalizedNumberInputOptions): UseLocalizedNumberInputResult => {
    const [displayValue, setDisplayValue] =
        useState("");

    const isInternalChange = useRef(false);

    const {
        decimalSeparator,
        groupSeparator,
    } = getNumberFormatInfo(locale);

    useEffect(() => {
        if (isInternalChange.current) {
            isInternalChange.current = false;
            return;
        }

        if (!value) {
            setDisplayValue("");
            return;
        }

        setDisplayValue(
            formatIntegerAndFraction(value, locale)
        );
    }, [value, locale]);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const input = event.target;

        const rawValue = input.value;

        const cursorPosition =
            input.selectionStart ?? rawValue.length;

        if (!rawValue) {
            setDisplayValue("");
            isInternalChange.current = true;
            onChange("");
            return;
        }

        /*
         * Remove grouping separators only.
         *
         * We deliberately keep the decimal separator
         * because the user may have just typed it.
         */
        const withoutGrouping = rawValue
            .split(groupSeparator)
            .join("");

        /*
         * Only one decimal separator is allowed.
         */
        const firstDecimalIndex =
            withoutGrouping.indexOf(
                decimalSeparator
            );

        if (
            firstDecimalIndex !== -1 &&
            withoutGrouping.indexOf(
                decimalSeparator,
                firstDecimalIndex + decimalSeparator.length
            ) !== -1
        ) {
            return;
        }

        /*
         * Validate the characters.
         *
         * We allow:
         *
         * 123
         * 123.
         * -123.45
         *
         * or the locale equivalent.
         */
        const escapedDecimal =
            decimalSeparator.replace(
                /[.*+?^${}()|[\]\\]/g,
                "\\$&"
            );

        const validPattern = new RegExp(
            `^-?[0-9]*${escapedDecimal}?[0-9]*$`
        );

        if (!validPattern.test(withoutGrouping)) {
            return;
        }

        /*
         * Convert the localized value to our
         * internal normalized representation.
         *
         * IMPORTANT:
         *
         * We preserve a trailing decimal separator.
         */
        const normalizedValue =
            parseLocalizedNumber(
                withoutGrouping,
                locale
            );

        /*
         * Format only the integer portion.
         *
         * We don't use Number() here.
         */
        const formattedValue =
            formatWhileEditing(
                withoutGrouping,
                locale
            );

        /*
         * Count how many numeric characters were
         * before the original cursor.
         */
        const beforeCursor =
            rawValue.slice(0, cursorPosition);

        const beforeCursorWithoutGrouping =
            beforeCursor
                .split(groupSeparator)
                .join("");

        const numericCharactersBeforeCursor =
            [...beforeCursorWithoutGrouping]
                .filter((character) =>
                    isDigit(character)
                ).length;

        setDisplayValue(formattedValue);

        isInternalChange.current = true;

        onChange(normalizedValue);

        /*
         * Restore cursor after React updates the DOM.
         */
        requestAnimationFrame(() => {
            const element =
                document.getElementById(
                    input.id
                ) as HTMLInputElement | null;

            if (!element) {
                return;
            }

            let digitsSeen = 0;
            let newCursorPosition =
                formattedValue.length;

            for (
                let index = 0;
                index < formattedValue.length;
                index++
            ) {
                if (
                    isDigit(
                        formattedValue[index]
                    )
                ) {
                    digitsSeen++;
                }

                if (
                    digitsSeen >=
                    numericCharactersBeforeCursor
                ) {
                    newCursorPosition =
                        index + 1;
                    break;
                }
            }

            /*
             * If the cursor was after the decimal
             * separator, restore it after the
             * corresponding decimal position.
             */
            const originalDecimalIndex =
                rawValue.indexOf(
                    decimalSeparator
                );

            if (
                originalDecimalIndex !== -1 &&
                cursorPosition >
                    originalDecimalIndex
            ) {
                const formattedDecimalIndex =
                    formattedValue.indexOf(
                        decimalSeparator
                    );

                if (
                    formattedDecimalIndex !== -1
                ) {
                    const fractionCharacters =
                        rawValue
                            .slice(
                                originalDecimalIndex +
                                    decimalSeparator.length,
                                cursorPosition
                            )
                            .length;

                    newCursorPosition =
                        formattedDecimalIndex +
                        decimalSeparator.length +
                        fractionCharacters;
                }
            }

            element.setSelectionRange(
                newCursorPosition,
                newCursorPosition
            );
        });
    };

    return {
        displayValue,
        handleChange,
    };
};

const formatIntegerAndFraction = (
    value: string,
    locale: string
): string => {
    const {
        decimalSeparator,
    } = getNumberFormatInfo(locale);

    const normalized = value.replace(
        decimalSeparator,
        "."
    );

    return formatWhileEditing(
        normalized,
        locale
    );
};

const formatWhileEditing = (
    value: string,
    locale: string
): string => {
    const {
        decimalSeparator,
    } = getNumberFormatInfo(locale);

    const normalized = value.replace(
        decimalSeparator,
        "."
    );

    const hasDecimal =
        normalized.includes(".");

    const [integerPart, fractionPart] =
        normalized.split(".");

    /*
     * Format the integer portion only.
     *
     * We temporarily use Intl for grouping.
     */
    const formattedInteger =
        integerPart === ""
            ? ""
            : new Intl.NumberFormat(locale, {
                useGrouping: true,
                maximumFractionDigits: 0,
            }).format(Number(integerPart));

    if (!hasDecimal) {
        return formattedInteger;
    }

    /*
     * IMPORTANT:
     *
     * We add the decimal separator back even
     * when there are no fractional digits yet.
     *
     * Therefore:
     *
     * 100000.
     *
     * remains:
     *
     * 1,00,000.
     */
    return (
        formattedInteger +
        decimalSeparator +
        (fractionPart ?? "")
    );
};