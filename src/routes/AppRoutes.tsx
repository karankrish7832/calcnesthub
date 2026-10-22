
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import CalculatorLayout from "../components/Layout/CalculatorLayout";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import SEO from "../components/SEO/SEO";

const Home = lazy(() => import("../pages/Home/Home"));
const CalculatorPage = lazy(() => import("../pages/CalculatorPage"));
const Privacy = lazy(() => import("../pages/Privacy/Privacy"));
const Terms = lazy(() => import("../pages/Terms/Terms"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <SEO />
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route element={<CalculatorLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/calculators/:calculatorId" element={<CalculatorPage />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
export default AppRoutes;
