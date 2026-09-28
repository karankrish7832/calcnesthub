import type { ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.css";

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
}

const Button = ({
    children,
    variant = "primary",
    className = "",
    ...buttonProps
}: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${className}`}
            {...buttonProps}
        >
            {children}
        </button>
    );
};

export default Button;