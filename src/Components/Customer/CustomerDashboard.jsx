import React from "react";
// import { useAuthUser } from "react-auth-kit";
import { Link } from "react-router-dom";

const CustomerDashboard = () => {
//   const auth = useAuthUser();
//   const user = auth()?.data;
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Customer</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/customer/carbuyers" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Car buyers</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/customer/purchaseanalysis" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Customer Purchase Analysis</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/customer/salesforecast" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Customer Targeting _ Sales Forecast</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/customer/onlineshoppers" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Online Shoppers Intention</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
      </div>
    </div>
  );
};

export default CustomerDashboard;
