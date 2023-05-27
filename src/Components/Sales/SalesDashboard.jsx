import React from "react";
// import { useAuthUser } from "react-auth-kit";
import { Link } from "react-router-dom";

const SalesDashboard = () => {
  //   const auth = useAuthUser();
  //   const user = auth()?.data;
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Sales</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link
          to="/sales/chainstore"
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4">Chain Store</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link
          to="/sales/drugstore"
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4">Drug Store </h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link
          to="/sales/grocerystore"
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4">Grocery Store</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
        <Link
          to="/sales/supermarket"
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4">Super Market</h2>
          <p className="text-gray-600">View and analyze data</p>
        </Link>
      </div>
    </div>
  );
};

export default SalesDashboard;
