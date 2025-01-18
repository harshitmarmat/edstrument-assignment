import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InvoiceNavbar from "./InvoiceNavbar";
import { LOCAL_STORAGE_KEY } from "../../utils/constant";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const invoicePage = location.pathname.includes("create-invoice");

  return (
    <div className="lg:fixed pt-[2vh] px-6 w-full h-[6vh] top-0 bg-ed_white z-10 flex items-center justify-between">
      {invoicePage ? (
        <InvoiceNavbar />
      ) : (
        <div className="lg:flex justify-between w-full">
          <div className="text-center lg:text-left text-ed-h1">Hi Admin</div>
          <div className="flex justify-center lg:justify-normal mt-2 items-center gap-4">
            <button
              onClick={() => {
                localStorage.removeItem(LOCAL_STORAGE_KEY);
                navigate("/create-invoice");
              }}
              className="text-ed-h3 px-4 py-2 border  border-ed_primary text-ed_primary rounded-lg"
            >
              Create New Invoice
            </button>
            <button
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
              className="text-ed-subh1 px-4 py-2 border  border-ed_red text-ed_red rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
