import React, { createContext, useContext } from "react";

const FormikContext = createContext(null);

export const useFormikContextProvider = () => useContext(FormikContext);

export const FormikContextProvider = ({ formikProps, children }) => {
  return (
    <FormikContext.Provider value={formikProps}>
      {children}
    </FormikContext.Provider>
  );
};
