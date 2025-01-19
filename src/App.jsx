import React, { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";

const Login = lazy(() => import("./component/auth/Login"));
const Invoice = lazy(() => import("./component/invoice/Invoice"));
const Body = lazy(() => import("./component/layout/Body"));
const Home = lazy(() => import("./component/home/Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Body />}>
            <Route path="/create-invoice" element={<Invoice />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
