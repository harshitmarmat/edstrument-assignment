import { ErrorMessage, Field } from "formik";
import React from "react";
import { useFormikContextProvider } from "../../context/formikContext";
import getNestedError from "../../utils/getNestedError";

const Select = ({ defaultOption, options = [], name }) => {
  const { errors, touched } = useFormikContextProvider();

  const error = getNestedError(errors, name);
  const isTouched = getNestedError(touched, name);

  return (
    <>
      <Field
        name={name}
        as="select"
        className={`select select-bordered ${
          error && isTouched ? "border-ed_red" : "border-ed_grey"
        } w-full `}
      >
        <option value="" defaultChecked>
          {defaultOption}
        </option>
        {options?.map((option, ind) => (
          <option key={ind}>{option}</option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-ed_red mt-1"
      />
    </>
  );
};

export default Select;
