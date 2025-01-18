import VendorDetail from "./VendorDetail";
import InvoiceDetail from "./InvoiceDetail";
import Comment from "./Comment";
import Submit from "./Submit";

const CreateInvoice = () => {
  return (
    <div className="w-full">
      <div className="lg:pl-8 lg:mt-0 mt-8 lg:pb-[11vh]">
        <VendorDetail />
        <InvoiceDetail />
        <Comment />
      </div>
      <Submit />
    </div>
  );
};

export default CreateInvoice;
