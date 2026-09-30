import type { InputHTMLAttributes } from "react";

import styles from "./InputField.module.css";

interface InputFieldProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    prefix?: string;
    suffix?: string;
    floatingLabel?: boolean;
}

const InputField = ({
    label,
    error,
    prefix,
    suffix,
    floatingLabel = false,
    id,
    value,
    ...inputProps
}: InputFieldProps) => {
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

            <div
                className={`${styles.inputWrapper} ${
                    error ? styles.inputWrapperError : ""
                } ${
                    floatingLabel
                        ? styles.floatingInputWrapper
                        : ""
                }`}
            >
                {floatingLabel && (
                    <label
                        className={styles.floatingLabel}
                        htmlFor={id}
                    >
                        {label}
                    </label>
                )}

                {prefix && (
                    <span
                        className={`${styles.affix} ${styles.prefixAffix}`}
                    >
                        {prefix}
                    </span>
                )}

                <input
                    id={id}
                    className={styles.input}
                    value={value}
                    {...inputProps}
                />

                {suffix && (
                    <span className={styles.affix}>
                        {suffix}
                    </span>
                )}
            </div>

            {error && (
                <p
                    className={styles.error}
                    role="alert"
                >
                    {error}
                </p>
            )}
        </div>
    );
};

export default InputField;