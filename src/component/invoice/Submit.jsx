import React from "react";
import { useFormikContextProvider } from "../../context/formikContext";
import { saveData } from "./Invoice";
import { useDispatch } from "react-redux";
import { showToast } from "../../utils/toastSlice";

const Submit = () => {
  const dispatch = useDispatch();
  const { values } = useFormikContextProvider();

  const saveHandler = () => {
    saveData(values);
    dispatch(
      showToast({
        message: "Invoice Saved successfully!",
        type: "success",
      })
    );
  };

  return (
    <div className="lg:fixed static lg:bottom-0 flex w-full lg:w-1/2 px-6 h-[11vh] bg-ed_white text-center gap-4 py-6 border-t !border-ed_grey text-ed_black">
      <div
        onClick={() => saveHandler()}
        className="w-1/2 cursor-pointer border  border-ed_black rounded-lg py-4"
      >
        Save as Draft
      </div>
      <button
        name="submitBtn"
        type="submit"
        className="w-1/2 text-ed_white cursor-pointer bg-ed_primary rounded-xl py-4"
      >
        Submit & New
      </button>
    </div>
  );
};

export default Submit;
