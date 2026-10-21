import { Suspense, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { calculators } from "../calculators/calculator.registry";
import { calculatorComponents } from "../calculators/calculator.components";
import CalculatorLoader from "../components/CalculatorLoader/CalculatorLoader";
import ComingSoon from "../components/ComingSoon/ComingSoon";
import { useTranslation } from "react-i18next";

const BASE_URL = "https://calcnesthub.vercel.app";

const CalculatorPage = () => {
    const { t } = useTranslation();
    const { calculatorId } = useParams();

    const calculator = calculators.find(
        (item) => item.id === calculatorId
    );

    useEffect(() => {
        if (!calculator) return;

        const calculatorTitle = t(
            `${calculator.translationKey}.title`
        );

        const calculatorDescription = t(
            `${calculator.translationKey}.description`
        );

        document.title =
            `${calculatorTitle} – CalcNestHub`;

        const description =
            document.querySelector(
                'meta[name="description"]'
            );

        if (description) {
            description.setAttribute(
                "content",
                calculatorDescription
            );
        }

        let canonical =
            document.querySelector(
                'link[rel="canonical"]'
            );

        if (!canonical) {
            canonical =
                document.createElement("link");

            canonical.setAttribute(
                "rel",
                "canonical"
            );

            document.head.appendChild(
                canonical
            );
        }

        canonical.setAttribute(
            "href",
            `${BASE_URL}${calculator.path}`
        );
    }, [calculator, t]);

    if (!calculator) {
        return <Navigate to="/" replace />;
    }

    const CalculatorComponent =
        calculatorComponents[
            calculator.id as keyof typeof calculatorComponents
        ];

    if (!CalculatorComponent) {
        return <ComingSoon />;
    }

    return (
        <Suspense
            fallback={<CalculatorLoader />}
        >
            <CalculatorComponent />
        </Suspense>
    );
};

export default CalculatorPage;