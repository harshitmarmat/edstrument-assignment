import React from "react";
import SectionHeading from "../common/SectionHeading";
import invoiceSvg from "../../assets/svg/invoice.svg";
import SubHeading from "../common/SubHeading";
import Label from "../common/Label";
import Select from "../common/Select";
import TextField from "../common/TextField";
import ExpenseDetail from "./ExpenseDetail";
import data from "../../utils/data.json"

const InvoiceDetail = () => {
  const {purchaseOrderNumbers} = data;

  return (
    <div id="invoice-details">
      <SectionHeading
        iconPath={invoiceSvg}
        iconAlt="invoice-path"
        title="Invoice Details"
      />
      <SubHeading title="General Information" />
      <div>
        <Label label="Purchase Order Number" />
        <Select options={purchaseOrderNumbers} name="poNumber" defaultOption="Select PO Number" />
      </div>
      <div>
        <SubHeading title="Invoice Details" />
        <div className="grid gap-4 grid-cols-2">
          <div className="col-span-2 lg:col-span-1">
            <Label label="Invoice Number" />
            <TextField name="invoiceNumber" placeholder="Enter number" />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Label label="Invoice Date" />
            <TextField type="date" name="invoiceDate" placeholder="Choose date" />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Label label="Total Amount" />
            <TextField type="number" name="totalAmount" placeholder="Enter amount" />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Label label="Payment Terms" />
            <TextField name="paymentTerm" placeholder="Enter terms" />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Label label="Invoice Due Date" />
            <TextField type="date" name="invoiceDueDate" placeholder="Choose date" />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Label label="GL Post Date" />
            <TextField type="date" name="glPostDate" placeholder="Choose date" />
          </div>
          <div className="col-span-2 w-full">
            <Label label="Invoice Description" />
            <TextField
              name="invoiceDescription"
              placeholder="Enter description"
            />
          </div>
        </div>
      </div>
      <ExpenseDetail />
    </div>
  );
};

export default InvoiceDetail;
