import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./component/auth/Login";
import Invoice from "./component/invoice/Invoice";
import Body from "./component/layout/Body";
import Home from "./component/home/Home";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Body />}>
            <Route path="/create-invoice" element={<Invoice />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
