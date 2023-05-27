import React from "react";
import { useAuthUser } from "react-auth-kit";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const auth = useAuthUser();
  const user = auth()?.data;
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <h5 className="text-4xl  mb-8">Hi {user?.name}... </h5>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/consumption" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Consumption</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        {/* <Link to="/customer" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Customer</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link> */}
        <Link to="/marketing" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Marketing</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/revenue" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Revenue</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/sales" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Sales</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link to="/settings" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Account</h2>
          <p className="text-gray-600">Manage your account settings</p>
        </Link>
        <Link to="/users" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <p className="text-gray-600">Manage user profiles</p>
        </Link>
        <Link to="/reports" className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Reports</h2>
          <p className="text-gray-600">Generate and view reports</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
