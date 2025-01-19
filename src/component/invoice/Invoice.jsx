import React, { useCallback, useEffect, useState } from "react";
import DragAndDropUpload from "./DragAndDropUpload";
import CreateInvoice from "./CreateInvoice";
import debounce from "../../utils/debounce";
import { Formik, Form } from "formik";
import { FormikContextProvider } from "../../context/formikContext";
import { initialValue, LOCAL_STORAGE_KEY } from "../../utils/constant";
import { validationSchema } from "../../utils/validationSchema";
import { useDispatch } from "react-redux";
import { showToast } from "../../utils/toastSlice";
import { useNavigate } from "react-router-dom";

export const saveData = (newValue) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue));
};

const Invoice = () => {
  const [initialValues, setInitialValues] = useState(initialValue);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setInitialValues(parsedData);
    }
  }, []);

  const debouncedChangeHandler = useCallback(
    debounce((newValue) => {
      saveData(newValue);
    }, 500),
    []
  );

  const handleSubmit = () => {
    dispatch(showToast({
      message: 'Invoice uploaded successfully!',
        type: 'success',
    }))
    navigate('/');
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, values, resetForm }) => {
          useEffect(() => {
            debouncedChangeHandler(values);
          }, [values]);
          return (
            <FormikContextProvider
              formikProps={{
                errors,
                touched,
                handleChange,
                handleBlur,
                values,
              }}
            >
              <Form>
                <div className="h-screen  relative px-6 grid lg:mt-[8vh] grid-cols-2">
                  <DragAndDropUpload
                    updateState={(value) => {
                      resetForm({ values: value });
                      saveData(value);
                    }}
                  />
                  <div className="h-full lg:col-span-1 col-span-2 lg:overflow-scroll">
                    <CreateInvoice />
                  </div>
                </div>
              </Form>
            </FormikContextProvider>
          );
        }}
      </Formik>
    </div>
  );
};

export default Invoice;
