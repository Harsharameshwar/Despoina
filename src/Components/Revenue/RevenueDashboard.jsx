import React from "react";
// import { useAuthUser } from "react-auth-kit";
import { Link } from "react-router-dom";

const RevenueDashboard = () => {
//   const auth = useAuthUser();
//   const user = auth()?.data;
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Revenue</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/revenue/bankruptcy" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Bankruptcy</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/revenue/boxoffice" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Box office Revenue </h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/revenue/ecommerce" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">E-Commerce Sales</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/revenue/videogames" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Video Game Sales</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
      </div>
    </div>
  );
};

export default RevenueDashboard;
