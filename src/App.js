import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import FooterPage from "./Components/Footer.jsx";
import LoginPage from "./Components/LoginPage.jsx";
import SignupPage from "./Components/SignupPage.jsx";
import DashboardPage from "./Components/DashboardPage.jsx";
import Settings from "./Components/Settings.jsx";
import { RequireAuth, useAuthUser } from "react-auth-kit";
import Consumption from "./Components/Consumption/Consumption.jsx";
import Marketing from "./Components/Marketing/Marketing.jsx";
import Sales from "./Components/Sales/Sales.jsx";
import Revenue from "./Components/Revenue/Revenue.jsx";
import MachineLearningReport from "./Components/MachineLearningReport.jsx";
import VisulizeSales from "./Components/VisualizeSales/VisulizeSales.jsx";
import ConsumptionDashboard from "./Components/Consumption/ConsumptionDashboard.jsx";
import CustomerDashboard from "./Components/Customer/CustomerDashboard.jsx";
import Customer from "./Components/Customer/Customer.jsx";
import MarketingDashboard from "./Components/Marketing/MarketingDashboard.jsx";
import RevenueDashboard from "./Components/Revenue/RevenueDashboard.jsx";
import SalesDashboard from "./Components/Sales/SalesDashboard.jsx";

function App() {
  const auth = useAuthUser();
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* Unsecure Navigations */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={auth()?.data ? <Navigate to={`/dashboard`} /> : <Home />}
          />
          <Route
            path="/login"
            element={
              auth()?.data ? <Navigate to={`/dashboard`} /> : <LoginPage />
            }
          />
          {/* //////////////////////////////////////////////////////*/}

          {/* Secure Navigations */}
          <Route
            exact
            path="/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <MachineLearningReport />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <RequireAuth loginPath={"/"}>
                <DashboardPage />
              </RequireAuth>
            }
          />
          {/* //////////////////////////////////////////////////////////////////////// */}

          {/*////////////////////// Consumption Routes //////////////////////////////*/}
          <Route
            exact
            path="/consumption"
            element={
              <RequireAuth loginPath={"/"}>
                <ConsumptionDashboard />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/consumption/hourlyenergy"
            element={
              <RequireAuth loginPath={"/"}>
                <Consumption />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/consumption/fuelconsumption"
            element={
              <RequireAuth loginPath={"/"}>
                <Consumption />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/consumption/renewable"
            element={
              <RequireAuth loginPath={"/"}>
                <Consumption />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/consumption/indiapowerreport"
            element={
              <RequireAuth loginPath={"/"}>
                <Consumption />
              </RequireAuth>
            }
          />
          {/* ////////////////////////////////////////////////////////// */}

          {/* Customer Routes */}
          <Route
            exact
            path="/customer"
            element={
              <RequireAuth loginPath={"/"}>
                <CustomerDashboard />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/customer/carbuyers"
            element={
              <RequireAuth loginPath={"/"}>
                <Customer />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/customer/purchaseanalysis"
            element={
              <RequireAuth loginPath={"/"}>
                <Customer />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/customer/salesforecast"
            element={
              <RequireAuth loginPath={"/"}>
                <Customer />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/customer/onlineshoppers"
            element={
              <RequireAuth loginPath={"/"}>
                <Customer />
              </RequireAuth>
            }
          />
          {/* /////////////////////////////////////////////////////////// */}

          {/* Marketing Routes */}
          <Route
            exact
            path="/marketing"
            element={
              <RequireAuth loginPath={"/"}>
                <MarketingDashboard />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/marketing/advertising"
            element={
              <RequireAuth loginPath={"/"}>
                <Marketing />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/marketing/customersegment"
            element={
              <RequireAuth loginPath={"/"}>
                <Marketing />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/marketing/fbanalysis"
            element={
              <RequireAuth loginPath={"/"}>
                <Marketing />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/marketing/ibmdataanalysis"
            element={
              <RequireAuth loginPath={"/"}>
                <Marketing />
              </RequireAuth>
            }
          />
          {/* /////////////////////////////////////////////////////////// */}

          {/* Revenue Routes */}
          <Route
            exact
            path="/revenue"
            element={
              <RequireAuth loginPath={"/"}>
                <RevenueDashboard />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/revenue/bankruptcy"
            element={
              <RequireAuth loginPath={"/"}>
                <Revenue />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/revenue/boxoffice"
            element={
              <RequireAuth loginPath={"/"}>
                <Revenue />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/revenue/ecommerce"
            element={
              <RequireAuth loginPath={"/"}>
                <Revenue />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/revenue/videogames"
            element={
              <RequireAuth loginPath={"/"}>
                <Revenue />
              </RequireAuth>
            }
          />
          {/* /////////////////////////////////////////////////////////// */}

          {/* Sales Routes */}
          <Route
            exact
            path="/sales"
            element={
              <RequireAuth loginPath={"/"}>
                <SalesDashboard />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/sales/chainstore"
            element={
              <RequireAuth loginPath={"/"}>
                <Sales />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/sales/drugstore"
            element={
              <RequireAuth loginPath={"/"}>
                <Sales />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/sales/grocerystore"
            element={
              <RequireAuth loginPath={"/"}>
                <Sales />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/sales/supermarket"
            element={
              <RequireAuth loginPath={"/"}>
                <Sales />
              </RequireAuth>
            }
          />
          {/* /////////////////////////////////////////////////////////// */}

          <Route
            exact
            path="/visualizesales"
            element={
              <RequireAuth loginPath={"/"}>
                <VisulizeSales />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/settings"
            element={
              <RequireAuth loginPath={"/"}>
                <Settings />
              </RequireAuth>
            }
          />
        </Routes>
        <FooterPage />
      </Router>
    </div>
  );
}

export default App;
