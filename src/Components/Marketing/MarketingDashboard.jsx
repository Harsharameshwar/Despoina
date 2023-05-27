import React from "react";
// import { useAuthUser } from "react-auth-kit";
import { Link } from "react-router-dom";

const MarketingDashboard = () => {
//   const auth = useAuthUser();
//   const user = auth()?.data;
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Marketing</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/marketing/advertising" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Advertising</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/marketing/customersegment" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Customer_Segmentation_Cohort_RFM_Analysis</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/marketing/fbanalysis" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Facebook Ad-Campaigns Analysis-Sales</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/marketing/ibmdataanalysis" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">IBM Watson Marketing Data Analysis</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
      </div>
    </div>
  );
};

export default MarketingDashboard;
