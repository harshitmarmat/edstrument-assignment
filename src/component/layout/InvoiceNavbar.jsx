import React, { useState } from "react";
import backArrow from "../../assets/svg/back_arrow.svg";
import { navbar } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

const InvoiceNavbar = () => {
  const [active,setActive] = useState(0)

  const navigate = useNavigate();
  const scrollToSection = (ind) => {
    setActive(ind);
    const link = navbar[ind].link;
    navigate(`#${link}`);

    const element = document.getElementById(link);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <img className="cursor-pointer" onClick={()=> navigate('/home')} src={backArrow} alt="back-arrow" />
        <p className="text-ed-h2">Create New Invoice</p>
      </div>
      <div className="hidden lg:flex w-[50%] items-center gap-8 pl-8">
        {navbar.map((item, ind) => (
          <div
            className=" cursor-pointer"
            onClick={() => {
              scrollToSection(ind);
            }}
            key={item.key}
          >
            <div
              className={`px-2 mb-2 text-ed-h3 ${
                active === ind && "text-ed_primary"
              }`}
            >
              {item.title}
            </div>
            {active === ind && <div className="h-[2px] w-full bg-ed_primary" />}
          </div>
        ))}
      </div>
    </>
  );
};

export default InvoiceNavbar;
