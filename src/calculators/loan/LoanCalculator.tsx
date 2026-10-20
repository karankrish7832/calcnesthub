import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import ResultCard from "../../components/ResultCard/ResultCard";
import { useCountry } from "../../context/CountryContext";
import { useLocalizedNumberInput } from "../../hooks/useLocalizedNumberInput";
import { formatCurrency } from "../../utils/currency";
import { getCurrencyFormatInfo } from "../../utils/currencyFormat";
import { calculateLoan } from "./calculateLoan";
import type { LoanForm, LoanResult, LoanErrors } from "./loan.types";
import { validateLoan } from "./loan.validation";
import LoanExplanation from "./LoanExplanation";
import styles from "./LoanCalculator.module.css";

const initialValues: LoanForm = {
    loanAmount: "",
    rate: "",
    years: "",
};

const LoanCalculator = () => {
    const { t, i18n } = useTranslation();
    const { country } = useCountry();
    const currencyFormat = getCurrencyFormatInfo(country);
    const [values, setValues] = useState<LoanForm>(initialValues);
    const [errors, setErrors] = useState<LoanErrors>({});
    const [result, setResult] = useState<LoanResult | null>(null);
    const currencyAffix = currencyFormat.currencyPosition === "prefix"
        ? `${currencyFormat.currencySymbol}${currencyFormat.currencySpacing}`
        : `${currencyFormat.currencySpacing}${currencyFormat.currencySymbol}`;
    const loanAmountInput = useLocalizedNumberInput({
        value: values.loanAmount,
        locale: country.locale,
        onChange: (value) => {
            setValues((current) => ({ ...current, loanAmount: value }));
            setErrors((current) => ({ ...current, loanAmount: undefined }));
        },
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues((current) => ({ ...current, [name]: value }));
        setErrors((current) => ({
            ...current,
            [name]: undefined,
            ...(name === "years" ? { tenure: undefined } : {}),
        }));
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validationErrors = validateLoan(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            setResult(null);
            return;
        }
        const calculationResult = calculateLoan(
            Number(values.loanAmount),
            Number(values.rate),
            Number(values.years)
        );
        setResult(calculationResult);
    };
    const handleReset = () => {
        setValues(initialValues);
        setErrors({});
        setResult(null);
    };
    return (
        <div className={styles.page}>
            <section className={styles.calculator}>
                <div className={styles.header}>
                    <h1>{t("calculators.loan.title")}</h1>
                    <p>{t("calculators.loan.description")}</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <InputField
                        id="loanAmount"
                        name="loanAmount"
                        label={t("calculators.loan.loanAmount")}
                        type="text"
                        inputMode="decimal"
                        prefix={currencyFormat.currencyPosition === "prefix" ? currencyAffix : undefined}
                        suffix={currencyFormat.currencyPosition === "suffix" ? currencyAffix : undefined}
                        value={loanAmountInput.displayValue}
                        onChange={loanAmountInput.handleChange}
                        error={errors.loanAmount ? t(errors.loanAmount) : undefined}
                    />
                    <InputField
                        id="rate"
                        name="rate"
                        label={t("calculators.loan.interestRate")}
                        type="number"
                        min="0"
                        step="any"
                        suffix="%"
                        value={values.rate}
                        onChange={handleChange}
                        error={errors.rate ? t(errors.rate) : undefined}
                    />
                    <InputField
                        id="years"
                        name="years"
                        label={t("calculators.loan.tenure")}
                        type="number"
                        min="0"
                        step="1"
                        suffix={t("calculators.loan.years")}
                        value={values.years}
                        onChange={handleChange}
                        error={errors.tenure ? t(errors.tenure) : undefined}
                    />
                    <div className={styles.actions}>
                        <Button type="submit">{t("calculators.loan.calculate")}</Button>
                        <Button type="button" variant="secondary" onClick={handleReset}>
                            {t("calculators.loan.reset")}
                        </Button>
                    </div>
                </form>
                {result && (
                    <ResultCard
                        title={t("calculators.loan.result.title")}
                        results={[
                            {
                                label: t("calculators.loan.monthlyPayment"),
                                value: formatCurrency(result.monthlyPayment, country, i18n.language),
                            },
                            {
                                label: t("calculators.loan.totalInterest"),
                                value: formatCurrency(result.totalInterest, country, i18n.language),
                            },
                            {
                                label: t("calculators.loan.totalRepayment"),
                                value: formatCurrency(result.totalPayment, country, i18n.language),
                            },
                        ]}
                    />
                )}
            </section>
            <LoanExplanation />
        </div>
    );
};
export default LoanCalculator;