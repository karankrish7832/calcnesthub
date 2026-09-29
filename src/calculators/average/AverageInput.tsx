import { useTranslation } from "react-i18next";

import Button from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";

import { useCountry } from "../../context/CountryContext";
import { useLocalizedNumberInput } from "../../hooks/useLocalizedNumberInput";

import styles from "./Average.module.css";

interface AverageInputProps {
    index: number;
    value: string;
    error?: string;
    canRemove: boolean;
    onChange: (value: string) => void;
    onRemove: () => void;
}

const AverageInput = ({
    index,
    value,
    error,
    canRemove,
    onChange,
    onRemove,
}: AverageInputProps) => {
    const { t } = useTranslation();
    const { country } = useCountry();

    const input = useLocalizedNumberInput({
        value,
        locale: country.locale,
        onChange,
    });

    return (
        <div className={styles.valueRow}>
            <InputField
                id={`average-value-${index}`}
                label={`${t(
                    "calculators.average.number"
                )} ${index + 1}`}
                value={input.displayValue}
                onChange={input.handleChange}
                error={error}
                inputMode="decimal"
            />

            {canRemove && (
                <Button
                    type="button"
                    variant="secondary"
                    onClick={onRemove}
                >
                    {t(
                        "calculators.average.remove"
                    )}
                </Button>
            )}
        </div>
    );
};

export default AverageInput;