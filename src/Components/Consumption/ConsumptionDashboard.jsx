import React from "react";
// import { useAuthUser } from "react-auth-kit";
import { Link } from "react-router-dom";

const ConsumptionDashboard = () => {
//   const auth = useAuthUser();
//   const user = auth()?.data;
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Consumption</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/consumption/hourlyenergy" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Consumption - Hourly Energy</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/consumption/fuelconsumption" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Fuel Consumption EDA _ Prediction</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/consumption/renewable" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Global Energy Consumption _ Renewable Generation</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/consumption/indiapowerreport" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">India_s Power Generation Report(2017 - 2020)</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
      </div>
    </div>
  );
};

export default ConsumptionDashboard;
