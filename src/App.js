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

function App() {
  const auth = useAuthUser();
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={auth()?.data ? (
                <Navigate to={`/dashboard`} />
              ) : (
                <Home/>
              )} />
         
          <Route
            path="/login"
            element={
              auth()?.data ? <Navigate to={`/dashboard`} /> : <LoginPage />
            }
          />

          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/login" element={<LoginPage />} /> */}
          <Route exact path="/signup" element={<SignupPage />} />
          <Route
            exact
            path="/generatepdf"
            element={
              <RequireAuth loginPath={"/"}>
                <MachineLearningReport/>
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
          <Route
            exact
            path="/consumption"
            element={
              <RequireAuth loginPath={"/"}>
                <Consumption />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/marketing"
            element={
              <RequireAuth loginPath={"/"}>
                <Marketing />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/sales"
            element={
              <RequireAuth loginPath={"/"}>
                <Sales />
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/revenue"
            element={
              <RequireAuth loginPath={"/"}>
                <Revenue />
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
