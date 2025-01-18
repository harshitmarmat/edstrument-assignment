import React from "react";

const SectionHeading = ({ iconPath, iconAlt, title }) => {
  return (
    <div className="flex mt-4 items-center gap-4">
      <div className="w-fit p-4 bg-ed_secondary rounded-full">
        <img
          alt={iconAlt}
          src={iconPath}
        />
      </div>
      <div className="text-ed-h1">{title}</div>
    </div>
  );
};

export default SectionHeading;
