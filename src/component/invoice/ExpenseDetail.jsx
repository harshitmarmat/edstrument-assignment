import React from "react";
import SubHeading from "../common/SubHeading";
import Label from "../common/Label";
import TextField from "../common/TextField";
import Select from "../common/Select";
import { FieldArray } from "formik";
import { useFormikContextProvider } from "../../context/formikContext";
import data from "../../utils/data.json";
import { useMemo } from "react";

const ExpenseDetail = () => {
  const { values } = useFormikContextProvider();
  const { accounts, departments, locations } = data;

  const accountOptions = useMemo(
    () => accounts.map((account) => account.name),
    [accounts]
  );
  const expenseDetailAmount = useMemo(
    () =>
      values?.expenseDetails?.reduce((acc, item) => +acc + +item.lineAmount, 0),
    [values?.expenseDetails]
  );

  return (
    <div>
      <div className="lg:flex justify-between items-center">
        <SubHeading title="Expense Details" />
        <div className="flex justify-between lg:justify-normal items-center gap-6">
          <div className="text-ed-subh3">
            ${parseInt(expenseDetailAmount) == 0 ? "0.00" : expenseDetailAmount}{" "}
            /{" "}
            <span className="text-ed_primary">
              ${values.totalAmount || "0.00"}
            </span>
          </div>
          <div className="w-[80px] bg-ed_grey_v3 text-center flex rounded-full text-ed_grey_v2 p-[3px]">
            <div className="w-[40px] rounded-full bg-ed_primary text-ed_white">
              $
            </div>
            <div className=" w-[40px] rounded-full ">%</div>
          </div>
        </div>
      </div>
      <FieldArray
        name="expenseDetails"
        render={({ push, remove }) => (
          <>
            {values?.expenseDetails?.map((_, index) => (
              <div key={index} className={`grid gap-4 grid-cols-2 py-4`}>
                <div className="col-span-2 lg:col-span-1">
                  <Label label="Line Amount" />
                  <TextField
                    type="number"
                    name={`expenseDetails[${index}].lineAmount`}
                    placeholder="0.00"
                  />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <Label label="Department" />
                  <Select
                    name={`expenseDetails[${index}].department`}
                    defaultOption="Select Department"
                    options={departments}
                  />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <Label label="Account" />
                  <Select
                    name={`expenseDetails[${index}].account`}
                    defaultOption="Select Account"
                    options={accountOptions}
                  />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <Label label="Location" />
                  <Select
                    name={`expenseDetails[${index}].location`}
                    defaultOption="Select Location"
                    options={locations}
                  />
                </div>
                <div className="col-span-2 w-full">
                  <Label label="Description" />
                  <TextField
                    name={`expenseDetails[${index}].description`}
                    placeholder="Enter Description"
                  />
                </div>
              </div>
            ))}
            <div className="w-full gap-4 col-span-2 flex justify-end">
              <button
                type="button"
                onClick={(index) => {
                  console.log(index);
                  remove(index);
                }}
                className="text-ed-subh1 cursor-pointer w-fit p-4 my-4 text-ed_red border rounded-lg"
              >
                - Remove Expense
              </button>
              <button
                type="button"
                onClick={() => {
                  push({
                    lineAmount: "",
                    department: "",
                    account: "",
                    location: "",
                    description: "",
                  });
                }}
                className="text-ed-subh1 cursor-pointer w-fit p-4 my-4 text-ed_black border rounded-lg"
              >
                + Add Expense Coding
              </button>
            </div>
          </>
        )}
      />
    </div>
  );
};

export default ExpenseDetail;
