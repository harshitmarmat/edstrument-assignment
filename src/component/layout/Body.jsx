import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { LOCAL_LOGIN_KEY } from "../../utils/constant";
import Toast from "../common/Toast";
import store from "../../utils/store";
import { Provider } from "react-redux";

const Body = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem(LOCAL_LOGIN_KEY);
    if (!login) {
      navigate("/login");
    }
  }, []);


  return (
    <div className="">
      <Provider store={store}>
        <Toast/>
        <Navbar />
        <Outlet />
      </Provider>
    </div>
  );
};

export default Body;
