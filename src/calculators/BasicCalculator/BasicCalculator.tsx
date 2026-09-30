import {
    useEffect,
    useRef,
    useState,
    type ChangeEvent,
} from "react";

import styles from "./BasicCalculator.module.css";

type Operator = "+" | "-" | "×" | "÷";

const BasicCalculator = () => {
    const [expression, setExpression] =
        useState("");

    const [display, setDisplay] =
        useState("0");

    const [justCalculated, setJustCalculated] =
        useState(false);

    const displayRef =
        useRef<HTMLInputElement>(null);

    const cursorPositionRef =
        useRef({
            start: 0,
            end: 0,
        });

    const isOperator = (
        value: string
    ): boolean => {
        return ["+", "-", "×", "÷"].includes(
            value
        );
    };

    const updateCursorPosition = () => {
        const input = displayRef.current;

        if (!input) {
            return;
        }

        cursorPositionRef.current = {
            start: input.selectionStart ?? 0,
            end: input.selectionEnd ?? 0,
        };
    };

    const setCursorPosition = (
        start: number,
        end = start,
        scrollToEnd = false
    ) => {
        requestAnimationFrame(() => {
            const input = displayRef.current;

            if (!input) {
                return;
            }

            input.focus();

            input.setSelectionRange(
                start,
                end
            );

            cursorPositionRef.current = {
                start,
                end,
            };

            if (scrollToEnd) {
                input.scrollLeft =
                    input.scrollWidth;
            }
        });
    };

    const getLastNumber = (
        value: string,
        cursor: number
    ): string => {
        const beforeCursor =
            value.slice(0, cursor);

        const match =
            beforeCursor.match(
                /(?:^|[+\-×÷])(\d*\.?\d*)$/
            );

        return match?.[1] ?? "";
    };

    const updateDisplay = (
        value: string
    ) => {
        if (!value) {
            setDisplay("0");
            return;
        }

        if (
            value ===
            "Cannot divide by zero"
        ) {
            setDisplay("Error");
            return;
        }

        const match =
            value.match(
                /(\d*\.?\d+)$/
            );

        if (match) {
            setDisplay(match[1]);
            return;
        }

        if (
            isOperator(
                value.charAt(
                    value.length - 1
                )
            )
        ) {
            setDisplay("0");
            return;
        }

        setDisplay(value);
    };

    const insertTextAtCursor = (
        text: string
    ) => {
        const {
            start,
            end,
        } = cursorPositionRef.current;

        const newExpression =
            expression.slice(0, start) +
            text +
            expression.slice(end);

        const newCursorPosition =
            start + text.length;

        setExpression(newExpression);

        updateDisplay(newExpression);

        setJustCalculated(false);

        const insertedAtEnd =
            newCursorPosition ===
            newExpression.length;

        setCursorPosition(
            newCursorPosition,
            newCursorPosition,
            insertedAtEnd
        );
    };

    const handleNumber = (
        number: string
    ) => {
        if (display === "Error") {
            setExpression(number);
            setDisplay(number);
            setJustCalculated(false);

            setCursorPosition(
                1,
                1,
                true
            );

            return;
        }

        if (justCalculated) {
            const {
                start,
                end,
            } = cursorPositionRef.current;

            if (
                start === expression.length &&
                end === expression.length
            ) {
                setExpression(number);
                setDisplay(number);
                setJustCalculated(false);

                setCursorPosition(
                    1,
                    1,
                    true
                );

                return;
            }

            setJustCalculated(false);
        }

        insertTextAtCursor(number);
    };

    const handleDecimal = () => {
        if (display === "Error") {
            setExpression("0.");
            setDisplay("0.");
            setJustCalculated(false);

            setCursorPosition(
                2,
                2,
                true
            );

            return;
        }

        if (justCalculated) {
            const {
                start,
                end,
            } = cursorPositionRef.current;

            if (
                start === expression.length &&
                end === expression.length
            ) {
                setExpression("0.");
                setDisplay("0.");
                setJustCalculated(false);

                setCursorPosition(
                    2,
                    2,
                    true
                );

                return;
            }

            setJustCalculated(false);
        }

        const {
            start,
        } = cursorPositionRef.current;

        const currentNumber =
            getLastNumber(
                expression,
                start
            );

        if (
            currentNumber.includes(".")
        ) {
            return;
        }

        if (
            start > 0 &&
            isOperator(
                expression.charAt(
                    start - 1
                )
            )
        ) {
            insertTextAtCursor("0.");
            return;
        }

        insertTextAtCursor(".");
    };

    const handleOperator = (
        selectedOperator: Operator
    ) => {
        if (display === "Error") {
            return;
        }

        if (!expression) {
            return;
        }

        setJustCalculated(false);

        const {
            start,
            end,
        } = cursorPositionRef.current;

        if (
            start === 0 &&
            end === 0
        ) {
            return;
        }

        const before =
            expression.charAt(
                start - 1
            );

        const after =
            expression.charAt(end);

        if (isOperator(before)) {
            const operatorStart =
                start - 1;

            const newExpression =
                expression.slice(
                    0,
                    operatorStart
                ) +
                selectedOperator +
                expression.slice(end);

            setExpression(newExpression);

            updateDisplay(
                newExpression
            );

            setCursorPosition(
                operatorStart + 1
            );

            return;
        }

        if (isOperator(after)) {
            const newExpression =
                expression.slice(
                    0,
                    start
                ) +
                selectedOperator +
                expression.slice(
                    end + 1
                );

            setExpression(newExpression);

            updateDisplay(
                newExpression
            );

            setCursorPosition(
                start + 1
            );

            return;
        }

        insertTextAtCursor(
            selectedOperator
        );
    };

    const calculateExpression = (
        input: string
    ): number | null => {
        const values: number[] = [];
        const operators: string[] = [];

        let currentNumber = "";

        for (let index = 0; index < input.length; index++) {
            const character = input[index];

            const isDigit =
                character >= "0" &&
                character <= "9";

            const isDecimal =
                character === ".";

            if (isDigit || isDecimal) {
                currentNumber += character;
                continue;
            }

            if (
                character === "+" ||
                character === "-" ||
                character === "×" ||
                character === "÷"
            ) {
                // Allow a negative number at the beginning.
                if (
                    character === "-" &&
                    currentNumber === "" &&
                    values.length === 0
                ) {
                    currentNumber = "-";
                    continue;
                }

                if (
                    currentNumber === "" ||
                    currentNumber === "-"
                ) {
                    return null;
                }

                const number =
                    Number(currentNumber);

                if (!Number.isFinite(number)) {
                    return null;
                }

                values.push(number);

                currentNumber = "";
                operators.push(character);
            }
        }

        // Expression cannot end with an operator.
        if (
            currentNumber === "" ||
            currentNumber === "-"
        ) {
            return null;
        }

        const finalNumber =
            Number(currentNumber);

        if (!Number.isFinite(finalNumber)) {
            return null;
        }

        values.push(finalNumber);

        if (
            values.length === 0 ||
            operators.length !== values.length - 1
        ) {
            return null;
        }

        const calculationValues = [...values];
        const calculationOperators = [...operators];

        // First calculate multiplication and division.
        for (
            let index = 0;
            index < calculationOperators.length;
            index++
        ) {
            const operator =
                calculationOperators[index];

            if (
                operator === "×" ||
                operator === "÷"
            ) {
                const left =
                    calculationValues[index];

                const right =
                    calculationValues[index + 1];

                let result: number;

                if (operator === "×") {
                    result = left * right;
                } else {
                    if (right === 0) {
                        return null;
                    }

                    result = left / right;
                }

                calculationValues.splice(
                    index,
                    2,
                    result
                );

                calculationOperators.splice(
                    index,
                    1
                );

                index--;
            }
        }

        // Then calculate addition and subtraction.
        let result =
            calculationValues[0];

        for (
            let index = 0;
            index < calculationOperators.length;
            index++
        ) {
            const operator =
                calculationOperators[index];

            const nextValue =
                calculationValues[index + 1];

            if (operator === "+") {
                result += nextValue;
            } else if (operator === "-") {
                result -= nextValue;
            }
        }

        return result;
    };

    const formatResult = (
        value: number
    ): string => {
        if (Object.is(value, -0)) {
            return "0";
        }

        return Number(
            value.toFixed(2)
        ).toString();
    };

    const handleEquals = () => {
        if (!expression) {
            return;
        }

        const lastCharacter =
            expression.charAt(
                expression.length - 1
            );

        if (isOperator(lastCharacter)) {
            return;
        }

        const result = calculateExpression(expression);

        if (result === null) {
            const error =
                "Cannot divide by zero";

            setExpression(error);
            setDisplay("Error");
            setJustCalculated(true);

            setCursorPosition(
                error.length,
                error.length,
                true
            );

            return;
        }

        const formattedResult =
            formatResult(result);

        setExpression(formattedResult);
        setDisplay(formattedResult);
        setJustCalculated(true);

        // Keep the logical cursor at the end so
        // the next operator works immediately.
        cursorPositionRef.current = {
            start: formattedResult.length,
            end: formattedResult.length,
        };

        requestAnimationFrame(() => {
            const input = displayRef.current;

            if (!input) {
                return;
            }

            input.focus();

            input.setSelectionRange(
                formattedResult.length,
                formattedResult.length
            );

            // Show the beginning of the result,
            // especially the "-" sign.
            input.scrollLeft = 0;
        });
    };

    const handleClear = () => {
        setExpression("");
        setDisplay("0");
        setJustCalculated(false);

        setCursorPosition(0);
    };

    const cleanExpressionAfterDeletion = (
        value: string
    ): string => {
        if (!value) {
            return "";
        }

        let cleaned = value;

        // Keep a leading "-" as a negative sign.
        const hasNegativeSign =
            cleaned.startsWith("-");

        const expressionWithoutNegative =
            hasNegativeSign
                ? cleaned.slice(1)
                : cleaned;

        // Remove consecutive operators.
        // Example:
        // 67577567++78768
        // becomes:
        // 67577567+78768
        let result = "";
        let previousWasOperator = false;

        for (
            let index = 0;
            index < expressionWithoutNegative.length;
            index++
        ) {
            const character =
                expressionWithoutNegative[index];

            if (isOperator(character)) {
                if (previousWasOperator) {
                    continue;
                }

                previousWasOperator = true;
                result += character;
            } else {
                previousWasOperator = false;
                result += character;
            }
        }

        cleaned =
            hasNegativeSign
                ? `-${result}`
                : result;

        // Remove an operator from the beginning,
        // but preserve the negative sign.
        if (
            !hasNegativeSign &&
            cleaned.length > 0 &&
            isOperator(cleaned.charAt(0))
        ) {
            cleaned = cleaned.slice(1);
        }

        // Remove an operator from the end.
        while (
            cleaned.length > 0 &&
            isOperator(
                cleaned.charAt(
                    cleaned.length - 1
                )
            )
        ) {
            cleaned = cleaned.slice(0, -1);
        }

        return cleaned;
    };

    const updateDisplayAfterEdit = (
        newExpression: string
    ) => {
        if (!newExpression) {
            setDisplay("0");
            setJustCalculated(false);
            return;
        }

        if (
            newExpression ===
            "Cannot divide by zero"
        ) {
            setDisplay("Error");
            return;
        }

        const lastCharacter =
            newExpression.charAt(
                newExpression.length - 1
            );

        if (isOperator(lastCharacter)) {
            setDisplay("0");
            setJustCalculated(false);
            return;
        }

        const match =
            newExpression.match(
                /(\d*\.?\d+)$/
            );

        setDisplay(
            match?.[1] ?? "0"
        );

        setJustCalculated(false);
    };

    const handleBackspace = () => {
        const input =
            displayRef.current;

        if (
            !input ||
            !expression
        ) {
            return;
        }

        const {
            start,
            end,
        } = cursorPositionRef.current;

        if (
            start === 0 &&
            end === 0
        ) {
            return;
        }

        let newExpression: string;
        let newCursorPosition: number;

        if (start !== end) {
            newExpression =
                expression.slice(
                    0,
                    start
                ) +
                expression.slice(end);

            newCursorPosition =
                start;
        } else {
            newExpression =
                expression.slice(
                    0,
                    start - 1
                ) +
                expression.slice(start);

            newCursorPosition =
                start - 1;
        }

        const cleanedExpression =
            cleanExpressionAfterDeletion(
                newExpression
            );

        newCursorPosition =
            Math.min(
                newCursorPosition,
                cleanedExpression.length
            );

        setExpression(
            cleanedExpression
        );

        updateDisplayAfterEdit(
            cleanedExpression
        );

        setCursorPosition(
            newCursorPosition
        );
    };

    const handleDelete = () => {
        const input =
            displayRef.current;

        if (
            !input ||
            !expression
        ) {
            return;
        }

        const {
            start,
            end,
        } = cursorPositionRef.current;

        if (
            start === expression.length &&
            end === expression.length
        ) {
            return;
        }

        let newExpression: string;

        if (start !== end) {
            newExpression =
                expression.slice(
                    0,
                    start
                ) +
                expression.slice(end);
        } else {
            newExpression =
                expression.slice(
                    0,
                    start
                ) +
                expression.slice(
                    start + 1
                );
        }

        const cleanedExpression =
            cleanExpressionAfterDeletion(
                newExpression
            );

        const newCursorPosition =
            Math.min(
                start,
                cleanedExpression.length
            );

        setExpression(
            cleanedExpression
        );

        updateDisplayAfterEdit(
            cleanedExpression
        );

        setCursorPosition(
            newCursorPosition
        );
    };

    const sanitizeInput = (
        value: string
    ): string => {
        return value
            .replace(
                /\*/g,
                "×"
            )
            .replace(
                /\//g,
                "÷"
            )
            .replace(
                /[^0-9.+\-×÷]/g,
                ""
            );
    };

    const handleDisplayChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const inputValue =
            event.target.value;

        const sanitizedValue =
            sanitizeInput(
                inputValue
            );

        cursorPositionRef.current = {
            start:
                event.target
                    .selectionStart ??
                sanitizedValue.length,

            end:
                event.target
                    .selectionEnd ??
                sanitizedValue.length,
        };

        setExpression(
            sanitizedValue
        );

        updateDisplay(
            sanitizedValue
        );

        setJustCalculated(false);
    };

    useEffect(() => {
        const handleKeyboard = (
            event: KeyboardEvent
        ) => {
            const key = event.key;

            if (/^[0-9]$/.test(key)) {
                event.preventDefault();

                updateCursorPosition();

                handleNumber(key);

                return;
            }

            if (key === ".") {
                event.preventDefault();

                updateCursorPosition();

                handleDecimal();

                return;
            }

            if (key === "+") {
                event.preventDefault();

                updateCursorPosition();

                handleOperator("+");

                return;
            }

            if (key === "-") {
                event.preventDefault();

                updateCursorPosition();

                handleOperator("-");

                return;
            }

            if (key === "*") {
                event.preventDefault();

                updateCursorPosition();

                handleOperator("×");

                return;
            }

            if (key === "/") {
                event.preventDefault();

                updateCursorPosition();

                handleOperator("÷");

                return;
            }

            if (
                key === "Enter" ||
                key === "="
            ) {
                event.preventDefault();

                handleEquals();

                return;
            }

            if (key === "Backspace") {
                event.preventDefault();

                updateCursorPosition();

                handleBackspace();

                return;
            }

            if (key === "Delete") {
                event.preventDefault();

                updateCursorPosition();

                handleDelete();

                return;
            }

            if (key === "Escape") {
                event.preventDefault();

                handleClear();
            }
        };

        window.addEventListener(
            "keydown",
            handleKeyboard
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyboard
            );
        };
    });

    const preventButtonFocus = (
        event: React.MouseEvent
    ) => {
        event.preventDefault();
    };

    return (
        <section className={styles.calculator}>
            <input
                ref={displayRef}
                type="text"
                inputMode="decimal"
                value={
                    expression || display
                }
                className={styles.display}
                aria-label="Calculator display"
                onChange={
                    handleDisplayChange
                }
                onSelect={
                    updateCursorPosition
                }
                onClick={
                    updateCursorPosition
                }
                onKeyUp={
                    updateCursorPosition
                }
                onFocus={
                    updateCursorPosition
                }
            />

            <div
                className={styles.keypad}
                onMouseDown={(event) => {
                    const target =
                        event.target as HTMLElement;

                    if (
                        target.closest(
                            "button"
                        )
                    ) {
                        event.preventDefault();
                    }
                }}
            >
                <button
                    type="button"
                    className={`${styles.key} ${styles.clear}`}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={handleClear}
                >
                    C
                </button>

                <button
                    type="button"
                    className={`${styles.key} ${styles.action}`}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleBackspace();
                    }}
                >
                    ⌫
                </button>

                <button
                    type="button"
                    className={`${styles.key} ${styles.operator}`}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleOperator("÷");
                    }}
                >
                    ÷
                </button>

                <button
                    type="button"
                    className={`${styles.key} ${styles.operator}`}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleOperator("×");
                    }}
                >
                    ×
                </button>

                <button
                    type="button"
                    className={styles.key}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleNumber("7");
                    }}
                >
                    7
                </button>

                <button
                    type="button"
                    className={styles.key}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleNumber("8");
                    }}
                >
                    8
                </button>

                <button
                    type="button"
                    className={styles.key}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleNumber("9");
                    }}
                >
                    9
                </button>

                <button
                    type="button"
                    className={`${styles.key} ${styles.operator}`}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleOperator("-");
                    }}
                >
                    −
                </button>

                <button
                    type="button"
                    className={styles.key}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleNumber("4");
                    }}
                >
                    4
                </button>

                <button
                    type="button"
                    className={styles.key}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleNumber("5");
                    }}
                >
                    5
                </button>

                <button
                    type="button"
                    className={styles.key}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleNumber("6");
                    }}
                >
                    6
                </button>

                <button
                    type="button"
                    className={`${styles.key} ${styles.operator}`}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleOperator("+");
                    }}
                >
                    +
                </button>

                <button
                    type="button"
                    className={styles.key}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleNumber("1");
                    }}
                >
                    1
                </button>

                <button
                    type="button"
                    className={styles.key}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleNumber("2");
                    }}
                >
                    2
                </button>

                <button
                    type="button"
                    className={styles.key}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleNumber("3");
                    }}
                >
                    3
                </button>

                <button
                    type="button"
                    className={`${styles.key} ${styles.equals}`}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={handleEquals}
                >
                    =
                </button>

                <button
                    type="button"
                    className={`${styles.key} ${styles.zero}`}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleNumber("0");
                    }}
                >
                    0
                </button>

                <button
                    type="button"
                    className={styles.key}
                    onMouseDown={
                        preventButtonFocus
                    }
                    onClick={() => {
                        updateCursorPosition();
                        handleDecimal();
                    }}
                >
                    .
                </button>
            </div>
        </section>
    );
};

export default BasicCalculator;