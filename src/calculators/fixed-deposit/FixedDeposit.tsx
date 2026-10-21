import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import ResultCard from "../../components/ResultCard/ResultCard";
import { useCountry } from "../../context/CountryContext";
import { useLocalizedNumberInput } from "../../hooks/useLocalizedNumberInput";
import { formatCurrency } from "../../utils/currency";
import { getCurrencyFormatInfo } from "../../utils/currencyFormat";
import { calculateFixedDeposit } from "./fixedDeposit.utils";
import type { FixedDepositForm, FixedDepositResult, FixedDepositErrors } from "./fixedDeposit.types";
import { validateFixedDeposit } from "./fixedDeposit.validation";
import FixedDepositExplanation from "./FixedDepositExplanation";
import styles from "./FixedDeposit.module.css";
const initialValues: FixedDepositForm = { depositAmount: "", rate: "", years: "", months: "" };
const FixedDeposit = () => {
    const { t, i18n } = useTranslation();
    const { country } = useCountry();
    const currencyFormat = getCurrencyFormatInfo(country);
    const [values, setValues] = useState<FixedDepositForm>(initialValues);
    const [errors, setErrors] = useState<FixedDepositErrors>({});
    const [result, setResult] = useState<FixedDepositResult | null>(null);
    const currencyAffix = currencyFormat.currencyPosition === "prefix"
        ? `${currencyFormat.currencySymbol}${currencyFormat.currencySpacing}`
        : `${currencyFormat.currencySpacing}${currencyFormat.currencySymbol}`;
    const depositInput = useLocalizedNumberInput({
        value: values.depositAmount,
        locale: country.locale,
        onChange: (value) => {
            setValues((current) => ({ ...current, depositAmount: value }));
            setErrors((current) => ({ ...current, depositAmount: undefined }));
        },
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues((current) => ({ ...current, [name]: value }));
        setErrors((current) => ({
            ...current,
            [name]: undefined,
            ...(name === "years" || name === "months" ? { tenure: undefined } : {}),
        }));
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validationErrors = validateFixedDeposit(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            setResult(null);
            return;
        }
        setResult(calculateFixedDeposit(values));
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
                    <h1>{t("calculators.fixedDeposit.title")}</h1>
                    <p>{t("calculators.fixedDeposit.description")}</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputRow}>
                        <InputField
                            id="depositAmount"
                            name="depositAmount"
                            label={t("calculators.fixedDeposit.depositAmount")}
                            type="text"
                            inputMode="decimal"
                            prefix={currencyFormat.currencyPosition === "prefix" ? currencyAffix : undefined}
                            suffix={currencyFormat.currencyPosition === "suffix" ? currencyAffix : undefined}
                            value={depositInput.displayValue}
                            onChange={depositInput.handleChange}
                            error={errors.depositAmount ? t(errors.depositAmount) : undefined}
                        />
                        <InputField
                            id="rate"
                            name="rate"
                            label={t("calculators.fixedDeposit.interestRate")}
                            type="number"
                            min="0"
                            step="any"
                            suffix="%"
                            value={values.rate}
                            onChange={handleChange}
                            error={errors.rate ? t(errors.rate) : undefined}
                        />
                    </div>
                    <div className={styles.tenureRow}>
                        <InputField
                            id="years"
                            name="years"
                            label={t("calculators.fixedDeposit.years")}
                            type="number"
                            min="0"
                            step="1"
                            value={values.years}
                            onChange={handleChange}
                            error={errors.tenure ? t(errors.tenure) : undefined}
                        />
                        <InputField
                            id="months"
                            name="months"
                            label={t("calculators.fixedDeposit.months")}
                            type="number"
                            min="0"
                            max="11"
                            step="1"
                            value={values.months}
                            onChange={handleChange}
                            error={undefined}
                        />
                    </div>
                    <div className={styles.actions}>
                        <Button type="submit">{t("calculators.fixedDeposit.calculate")}</Button>
                        <Button type="button" variant="secondary" onClick={handleReset}>
                            {t("calculators.fixedDeposit.reset")}
                        </Button>
                    </div>
                </form>
                {result && (
                    <ResultCard
                        title={t("calculators.fixedDeposit.result.title")}
                        results={[
                            { label: t("calculators.fixedDeposit.result.principal"), value: formatCurrency(result.principal, country, i18n.language) },
                            { label: t("calculators.fixedDeposit.result.interestEarned"), value: formatCurrency(result.interestEarned, country, i18n.language) },
                            { label: t("calculators.fixedDeposit.result.maturityAmount"), value: formatCurrency(result.maturityAmount, country, i18n.language) },
                        ]}
                    />
                )}
            </section>
            <FixedDepositExplanation />
        </div>
    );
};
export default FixedDeposit;