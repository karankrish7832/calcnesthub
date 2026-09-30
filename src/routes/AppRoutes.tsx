import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import CalculatorLayout from "../components/Layout/CalculatorLayout";
import CalculatorPage from "../pages/CalculatorPage";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route element={<CalculatorLayout />}>
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/calculators/:calculatorId"
                        element={<CalculatorPage />}
                    />

                    <Route
                        path="/privacy"
                        element={<Privacy />}
                    />

                    <Route
                        path="/terms"
                        element={<Terms />}
                    />

                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;