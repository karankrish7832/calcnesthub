import type { SelectHTMLAttributes } from "react";

import styles from "./Dropdown.module.css";

export interface DropdownOption {
    value: string;
    label: string;
}

interface DropdownProps
    extends Omit<
        SelectHTMLAttributes<HTMLSelectElement>,
        "children"
    > {
    label: string;
    options: DropdownOption[];
    error?: string;
    floatingLabel?: boolean;
}

const Dropdown = ({
    label,
    options,
    error,
    floatingLabel = false,
    id,
    className = "",
    ...selectProps
}: DropdownProps) => {
    return (
        <div className={styles.field}>
            {!floatingLabel && (
                <label
                    className={styles.label}
                    htmlFor={id}
                >
                    {label}
                </label>
            )}

            {floatingLabel ? (
                <div
                    className={`${styles.floatingWrapper} ${
                        error
                            ? styles.floatingWrapperError
                            : ""
                    }`}
                >
                    <label
                        className={styles.floatingLabel}
                        htmlFor={id}
                    >
                        {label}
                    </label>

                    <select
                        id={id}
                        className={`${styles.select} ${styles.floatingSelect} ${className}`}
                        aria-invalid={Boolean(error)}
                        aria-describedby={
                            error
                                ? `${id}-error`
                                : undefined
                        }
                        {...selectProps}
                    >
                        {options.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            ) : (
                <select
                    id={id}
                    className={`${styles.select} ${
                        error
                            ? styles.selectError
                            : ""
                    } ${className}`}
                    aria-invalid={Boolean(error)}
                    aria-describedby={
                        error
                            ? `${id}-error`
                            : undefined
                    }
                    {...selectProps}
                >
                    {options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            )}

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

export default Dropdown;