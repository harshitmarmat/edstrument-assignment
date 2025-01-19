import { ErrorMessage, Field } from "formik";
import React from "react";
import { useFormikContextProvider } from "../../context/formikContext";
import getNestedError from "../../utils/getNestedError";

const TextField = ({ placeholder, name, type }) => {
  const { errors, touched } = useFormikContextProvider();

  const error = getNestedError(errors, name);
  const isTouched = getNestedError(touched, name);

  return (
    <>
      <Field
        name={name}
        placeholder={placeholder}
        type={type || "text"}
        className={`input input-bordered w-full ${
          error && isTouched ? "border-ed_red" : "border-ed_black"
        }`}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-ed_red mt-1"
      />
    </>
  );
};

export default TextField;
