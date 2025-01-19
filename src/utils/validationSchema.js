import * as Yup from 'yup';

const validationSchema = Yup.object({
  vender: Yup.string().required('Vender is required'),
  poNumber: Yup.string().required('PO Number is required'),
  invoiceNumber: Yup.string().required('Invoice Number is required'),
  invoiceDate: Yup.date().required('Invoice Date is required').nullable(),
  totalAmount: Yup.number()
    .required('Total Amount is required')
    .positive('Total Amount must be a positive number')
    .typeError('Total Amount must be a number'),
  paymentTerm: Yup.string().required('Payment Term is required'),
  invoiceDueDate: Yup.date().required('Invoice Due Date is required').nullable(),
  glPostDate: Yup.date().required('GL Post Date is required').nullable(),
  invoiceDescription: Yup.string().required('Invoice Description is required'),
  expenseDetails: Yup.array()
    .of(
      Yup.object({
        lineAmount: Yup.number()
          .required('Line Amount is required')
          .positive('Line Amount must be a positive number')
          .typeError('Line Amount must be a number'),
        department: Yup.string().required('Department is required'),
        account: Yup.string().required('Account is required'),
        location: Yup.string().required('Location is required'),
        description: Yup.string().required('Description is required'),
      })
    )
    .min(1, 'At least one expense detail is required') 
    .required('Expense details are required'),
  comments: Yup.string().optional(), 
});


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const validationLoginSchema = Yup.object({
  email: Yup.string()
    .matches(emailRegex, "Please enter a valid email address.")
    .required("Email is required."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password is required."),
});


export { validationSchema, validationLoginSchema};
