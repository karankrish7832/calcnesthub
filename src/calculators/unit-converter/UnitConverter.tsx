import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/Button/Button";
import Dropdown from "../../components/Dropdown/Dropdown";
import InputField from "../../components/InputField/InputField";

import { useCountry } from "../../context/CountryContext";
import { useLocalizedNumberInput } from "../../hooks/useLocalizedNumberInput";
import UnitConverterExplanation from "./UnitConverterExplanation";
import {
    getCategory,
    UNIT_CATEGORIES,
} from "./unit-converter.data";

import {
    convertValue,
    formatConvertedValue,
} from "./unit-converter.utils";

import type {
    UnitCategoryId,
} from "./unit-converter.types";

import styles from "./UnitConverter.module.css";

const UnitConverter = () => {
    const { t } = useTranslation();
    const { country } = useCountry();

    const [category, setCategory] = useState<UnitCategoryId>("length");
    const [fromUnit, setFromUnit] = useState("millimeter");
    const [toUnit, setToUnit] = useState("centimeter");
    const [value, setValue] = useState("");

    const currentCategory = useMemo(
        () => getCategory(category),
        [category]
    );

    const numberInput =
        useLocalizedNumberInput({
            value,
            locale: country.locale,
            onChange: setValue,
        });

    const categoryOptions =
        UNIT_CATEGORIES.map(
            (categoryItem) => ({
                value: categoryItem.id,
                label: t(
                    `calculators.unitConverter.categories.${categoryItem.id}`
                ),
            })
        );

    const unitOptions =
        currentCategory.units.map(
            (unit) => ({
                value: unit.id,
                label: `${unit.label} (${unit.symbol})`,
            })
        );

    useEffect(() => {
        const firstUnit =
            currentCategory.units[0];

        const secondUnit =
            currentCategory.units[1] ??
            firstUnit;

        setFromUnit(firstUnit.id);
        setToUnit(secondUnit.id);
        setValue("");
    }, [currentCategory]);

    const result = useMemo(() => {
        if (!value.trim()) {
            return "";
        }

        const numericValue = Number(value);

        if (!Number.isFinite(numericValue)) {
            return "";
        }

        const sourceUnit =
            currentCategory.units.find(
                (unit) =>
                    unit.id === fromUnit
            );

        const targetUnit =
            currentCategory.units.find(
                (unit) =>
                    unit.id === toUnit
            );

        if (!sourceUnit || !targetUnit) {
            return "";
        }

        const convertedValue =
            convertValue(
                numericValue,
                sourceUnit,
                targetUnit,
                category
            );

        return formatConvertedValue(
            convertedValue
        );
    }, [
        value,
        fromUnit,
        toUnit,
        category,
        currentCategory,
    ]);

    const handleCategoryChange = (
        newCategory: string
    ) => {
        setCategory(
            newCategory as UnitCategoryId
        );
    };

    const handleSwap = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);

        if (result) {
            setValue(result);
        }
    };

    const handleReset = () => {
        const firstUnit =
            currentCategory.units[0];

        const secondUnit =
            currentCategory.units[1] ??
            firstUnit;

        setFromUnit(firstUnit.id);
        setToUnit(secondUnit.id);
        setValue("");
    };

    return (
        <div className={styles.page}>
            <article className={styles.calculator}>
                <header className={styles.header}>
                    <h1>
                        {t(
                            "calculators.unitConverter.title"
                        )}
                    </h1>

                    <p>
                        {t(
                            "calculators.unitConverter.description"
                        )}
                    </p>
                </header>

                <div className={styles.form}>
                    <Dropdown
                        id="unit-category"
                        label={t(
                            "calculators.unitConverter.category"
                        )}
                        floatingLabel
                        value={category}
                        options={categoryOptions}
                        onChange={(event) =>
                            handleCategoryChange(
                                event.target.value
                            )
                        }
                    />

                    <div
                        className={
                            styles.unitSection
                        }
                    >
                        <InputField
                            id="unit-from-value"
                            label={t(
                                "calculators.unitConverter.value"
                            )}
                            floatingLabel
                            value={
                                numberInput.displayValue
                            }
                            onChange={
                                numberInput.handleChange
                            }
                            inputMode="decimal"
                        />

                        <Dropdown
                            id="unit-from"
                            label={t(
                                "calculators.unitConverter.from"
                            )}
                            floatingLabel
                            value={fromUnit}
                            options={unitOptions}
                            onChange={(event) =>
                                setFromUnit(
                                    event.target.value
                                )
                            }
                        />
                    </div>

                    <div
                        className={
                            styles.swapWrapper
                        }
                    >
                        <Button
                            type="button"
                            variant="secondary"
                            className={
                                styles.swapButton
                            }
                            onClick={handleSwap}
                            aria-label={t(
                                "calculators.unitConverter.swap"
                            )}
                        >
                            ⇅
                        </Button>
                    </div>

                    <div
                        className={
                            styles.unitSection
                        }
                    >
                        <InputField
                            id="unit-to-value"
                            label={t(
                                "calculators.unitConverter.result"
                            )}
                            floatingLabel
                            value={result}
                            readOnly
                        />

                        <Dropdown
                            id="unit-to"
                            label={t(
                                "calculators.unitConverter.to"
                            )}
                            floatingLabel
                            value={toUnit}
                            options={unitOptions}
                            onChange={(event) =>
                                setToUnit(
                                    event.target.value
                                )
                            }
                        />
                    </div>

                    <div
                        className={
                            styles.actions
                        }
                    >
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={handleReset}
                        >
                            {t(
                                "calculators.unitConverter.reset"
                            )}
                        </Button>
                    </div>
                </div>
            </article>
            <UnitConverterExplanation />
        </div>
    );
};

export default UnitConverter;