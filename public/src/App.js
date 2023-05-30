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
import Hourly from "./Components/Consumption/Hourly.jsx";
import EDA from "./Components/Consumption/EDA.jsx";
import Renewable from "./Components/Consumption/Renewable.jsx";
import Power from "./Components/Consumption/Power.jsx";
import Car from "./Components/Customer/Car.jsx";
import Purchase from "./Components/Customer/Purchase.jsx";
import Target from "./Components/Customer/Target.jsx";
import Online from "./Components/Customer/Online.jsx";
import Advertise from "./Components/Marketing/Advertise.jsx";
import Segmentation from "./Components/Marketing/Segmentation.jsx";
import Facebook from "./Components/Marketing/Facebook.jsx";
import IBM from "./Components/Marketing/IBM.jsx";
import Bankruptcy from "./Components/Revenue/Bankruptcy.jsx";
import Boxoffice from "./Components/Revenue/Boxoffice.jsx";
import Ecommerce from "./Components/Revenue/Ecommerce.jsx";
import Videogame from "./Components/Revenue/Videogame.jsx";
import ChainStore from "./Components/Sales/Chainstore.jsx";
import DrugStore from "./Components/Sales/DrugStore.jsx";
import GroceryStore from "./Components/Sales/GroceryStore.jsx";
import Supermarket from "./Components/Sales/Supermarket.jsx";
import Visualize from "./Components/VisualizeSales/Visualize.jsx";

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

          <Route
            exact
            path="/consumption/hourlyenergy/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Hourly />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/consumption/fuelconsumption/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <EDA />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/consumption/renewable/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Renewable />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/consumption/indiapowerreport/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Power />
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

          <Route
            exact
            path="/customer/carbuyers/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Car />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/customer/purchaseanalysis/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Purchase />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/customer/salesforecast/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Target />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/customer/onlineshoppers/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Online />
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

          <Route
            exact
            path="/marketing/advertising/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Advertise />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/marketing/customersegment/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Segmentation />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/marketing/fbanalysis/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Facebook />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/marketing/ibmdataanalysis/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <IBM />
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

          <Route
            exact
            path="/revenue/bankruptcy/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Bankruptcy />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/revenue/boxoffice/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Boxoffice />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/revenue/ecommerce/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Ecommerce />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/revenue/videogames/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Videogame />
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

          <Route
            exact
            path="/sales/chainstore/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <ChainStore />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/sales/drugstore/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <DrugStore />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/sales/grocerystore/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <GroceryStore />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/sales/supermarket/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Supermarket />
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
            path="/visualize/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <Visualize />
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
