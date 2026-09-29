import type { InputHTMLAttributes } from "react";

import styles from "./DateInput.module.css";

interface DateInputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "type"
    > {
    label: string;
    error?: string;
}

const DateInput = ({
    label,
    error,
    id,
    className = "",
    ...inputProps
}: DateInputProps) => {
    return (
        <div className={styles.field}>
            <label
                className={styles.label}
                htmlFor={id}
            >
                {label}
            </label>

            <input
                id={id}
                type="date"
                className={`${styles.input} ${
                    error ? styles.inputError : ""
                } ${className}`}
                aria-invalid={Boolean(error)}
                aria-describedby={
                    error
                        ? `${id}-error`
                        : undefined
                }
                {...inputProps}
            />

            {error && (
                <p
                    id={`${id}-error`}
                    className={styles.error}
                    role="alert"
                >
                    {error}
                </p>
            )}
        </div>
    );
};

export default DateInput;