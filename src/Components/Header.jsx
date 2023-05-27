import React from "react";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";

function Header  (){
  const auth = useAuthUser();
  const signOut=useSignOut();
    const navigate=useNavigate();

  // <header className="bg-gray-100 p-6">
  return(<header className="bg-gray-800 p-6">
  <div className="flex items-center justify-between flex-wrap">
      <div className="block">
      <Link to="/">
          <span className="font-semibold text-white text-xl tracking-tight text-gray-800">
            Despoina
          </span>
        </Link>
      </div>
      { auth()?.data ? (
        <nav className="block">
        <Link to="/dashboard">
          <span className="inline-block text-white hover:text-gray-600 mr-4">
            Dashboard
          </span>
        </Link>
        {/* <Link to="/upload">
          <span className="inline-block text-white hover:text-gray-600 mr-4">
            Upload
          </span>
        </Link> */}
        <Link to="/consumption">
          <span className="inline-block text-white hover:text-gray-600 mr-4">
          Consumption
          </span>
        </Link>
        <Link to="/marketing">
          <span className="inline-block text-white hover:text-gray-600 mr-4">
          Marketing
          </span>
        </Link>
        <Link to="/revenue">
          <span className="inline-block text-white hover:text-gray-600 mr-4">
          Revenue
          </span>
        </Link>
        <Link to="/sales">
          <span className="inline-block text-white hover:text-gray-600 mr-4">
          Sales
          </span>
        </Link>
  
        <Link to="/settings">
          <span className="inline-block text-white hover:text-gray-600 mr-4">
          Account
          </span>
        </Link>
          <span className="inline-block text-white hover:text-gray-600 mr-4"  onClick={()=>{
                  try{
                // localStorage.removeItem("role")
                signOut();
                navigate("/login");
              }
              catch(err){
                console.log(err)
              }
            }}>
          Logout
          </span>
      </nav>):(<nav className="block">
        <Link to="/">
          <span className="inline-block text-white hover:text-gray-600 mr-4">
            Home
          </span>
        </Link>
        <Link to="/about">
          <span className="inline-block text-white hover:text-gray-600 mr-4">
            About
          </span>
        </Link>
        <Link to="/contact">
          <span className="inline-block text-white hover:text-gray-600 mr-4">
            Contact
          </span>
        </Link>
        <Link to="/login">
          <span className="inline-block text-white hover:text-gray-600 mr-4">
            Login
          </span>
        </Link>
        <Link to="/signup">
          <span className="inline-block text-white hover:text-gray-600 mr-4">
            SignUp
          </span>
        </Link>
      </nav>
      
      )}
    </div>
  </header>
)};
export default Header;
