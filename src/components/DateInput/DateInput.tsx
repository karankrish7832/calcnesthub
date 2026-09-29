import { useRef, type InputHTMLAttributes } from "react";
import styles from "./DateInput.module.css";

interface DateInputProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "type" | "value"
    > {
    label: string;
    error?: string;
    value?: string;
}

const DateInput = ({
    label,
    error,
    id,
    className = "",
    placeholder = "DD-MM-YYYY",
    value = "",
    onChange,
    ...inputProps
}: DateInputProps) => {
    const dateInputRef =
        useRef<HTMLInputElement>(null);

    const handleOpenPicker = () => {
        const input = dateInputRef.current;
        if ( input &&  typeof input.showPicker === "function") {
            input.showPicker();
        }
    };

    const formatDate = (dateValue: string): string => {
        if (!dateValue) return "";
        const [year, month, day] = dateValue.split("-");
        if (!year || !month || !day) return "";
        return `${day}-${month}-${year}`;
    };

    const displayValue = formatDate(value);

    return (
        <div className={styles.field}>
            <div
                className={`${styles.inputWrapper} ${
                    error
                        ? styles.inputWrapperError
                        : ""
                }`}
                onClick={
                    handleOpenPicker
                }
            >
                <label
                    className={styles.label}
                    htmlFor={id}
                >
                    {label}
                </label>

                <span
                    className={`${styles.displayValue} ${
                        !displayValue
                            ? styles.placeholder
                            : ""
                    }`}
                >
                    {displayValue ||
                        placeholder}
                </span>

                <input
                    ref={dateInputRef}
                    id={id}
                    type="date"
                    className={
                        styles.hiddenInput
                    }
                    value={value}
                    onChange={onChange}
                    {...inputProps}
                />
            </div>

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