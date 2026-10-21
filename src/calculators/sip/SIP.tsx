import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import ResultCard from "../../components/ResultCard/ResultCard";
import { useCountry } from "../../context/CountryContext";
import { useLocalizedNumberInput } from "../../hooks/useLocalizedNumberInput";
import { formatCurrency } from "../../utils/currency";
import { getCurrencyFormatInfo } from "../../utils/currencyFormat";
import { calculateSIP } from "./sip.utils";
import type { SIPForm, SIPResult, SIPErrors } from "./sip.types";
import { validateSIP } from "./sip.validation";
import SIPExplanation from "./SIPExplanation";
import styles from "./SIP.module.css";

const initialValues: SIPForm = {
    monthlyInvestment: "",
    rate: "",
    years: "",
};

const SIP = () => {
    const { t, i18n } = useTranslation();
    const { country } = useCountry();
    const currencyFormat = getCurrencyFormatInfo(country);
    const [values, setValues] = useState<SIPForm>(initialValues);
    const [errors, setErrors] = useState<SIPErrors>({});
    const [result, setResult] = useState<SIPResult | null>(null);
    const currencyAffix = currencyFormat.currencyPosition === "prefix"
        ? `${currencyFormat.currencySymbol}${currencyFormat.currencySpacing}`
        : `${currencyFormat.currencySpacing}${currencyFormat.currencySymbol}`;
    const investmentInput = useLocalizedNumberInput({
        value: values.monthlyInvestment,
        locale: country.locale,
        onChange: (value) => {
            setValues((current) => ({ ...current, monthlyInvestment: value }));
            setErrors((current) => ({ ...current, monthlyInvestment: undefined }));
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
        const validationErrors = validateSIP(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            setResult(null);
            return;
        }
        setResult(calculateSIP(values));
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
                    <h1>{t("calculators.sip.title")}</h1>
                    <p>{t("calculators.sip.description")}</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <InputField
                        id="monthlyInvestment"
                        name="monthlyInvestment"
                        label={t("calculators.sip.monthlyInvestment")}
                        type="text"
                        inputMode="decimal"
                        prefix={currencyFormat.currencyPosition === "prefix" ? currencyAffix : undefined}
                        suffix={currencyFormat.currencyPosition === "suffix" ? currencyAffix : undefined}
                        value={investmentInput.displayValue}
                        onChange={investmentInput.handleChange}
                        error={errors.monthlyInvestment ? t(errors.monthlyInvestment) : undefined}
                    />
                    <div className={styles.inputRow}>
                        <InputField
                            id="rate"
                            name="rate"
                            label={t("calculators.sip.interestRate")}
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
                            label={t("calculators.sip.tenure")}
                            type="number"
                            min="0"
                            step="1"
                            suffix={t("calculators.sip.years")}
                            value={values.years}
                            onChange={handleChange}
                            error={errors.tenure ? t(errors.tenure) : undefined}
                        />
                    </div>
                    <div className={styles.actions}>
                        <Button type="submit">{t("calculators.sip.calculate")}</Button>
                        <Button type="button" variant="secondary" onClick={handleReset}>
                            {t("calculators.sip.reset")}
                        </Button>
                    </div>
                </form>
                {result && (
                    <ResultCard
                        title={t("calculators.sip.result.title")}
                        results={[
                            {
                                label: t("calculators.sip.totalInvestment"),
                                value: formatCurrency(result.totalInvestment, country, i18n.language),
                            },
                            {
                                label: t("calculators.sip.estimatedReturns"),
                                value: formatCurrency(result.estimatedReturns, country, i18n.language),
                            },
                            {
                                label: t("calculators.sip.futureValue"),
                                value: formatCurrency(result.futureValue, country, i18n.language),
                            },
                        ]}
                    />
                )}
            </section>
            <SIPExplanation />
        </div>
    );
};

export default SIP;