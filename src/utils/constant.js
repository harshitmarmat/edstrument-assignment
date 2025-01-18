export const initialValue = {
  vender: "",
  poNumber: "",
  invoiceNumber: "",
  invoiceDate: "",
  totalAmount: "",
  paymentTerm: "",
  invoiceDueDate: "",
  glPostDate: "",
  invoiceDescription: "",
  expenseDetails: [
    {
      lineAmount: "",
      department: "",
      account: "",
      location: "",
      description: "",
    },
  ],
  comments: "",
};
export const LOCAL_STORAGE_KEY = "invoiceDetails";
export const LOCAL_LOGIN_KEY = "login_user";
export const navbar = [
    {
      title: "Vendor Details",
      link: "vender-detail",
      key : "vd"
    },
    {
      title: "Invoice Details",
      link: "invoice-details",
      key : "id"
    },
    {
      title: "Comments",
      link: "comments",
      key : "ct"
    },
  ];