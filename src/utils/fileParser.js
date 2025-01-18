import Papa from "papaparse";

const handleFileUpload = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) return reject("No file provided");

    Papa.parse(file, {
      header: true, // Ensures the first row is treated as headers
      skipEmptyLines: true, // Skips empty lines
      complete: (results) => {
        const parsedData = results.data; // Array of objects

        // Example: Map parsed data to form fields
        const updatedValues = {
          vender: parsedData[0]?.vender || "",
          poNumber: parsedData[0]?.poNumber || "",
          invoiceNumber: parsedData[0]?.invoiceNumber || "",
          invoiceDate: parsedData[0]?.invoiceDate || "",
          totalAmount: parsedData[0]?.totalAmount || "",
          paymentTerm: parsedData[0]?.paymentTerm || "",
          invoiceDueDate: parsedData[0]?.invoiceDueDate || "",
          glPostDate: parsedData[0]?.glPostDate || "",
          invoiceDescription: parsedData[0]?.invoiceDescription || "",
          expenseDetails: parsedData.map((item) => ({
            lineAmount: item.lineAmount || "",
            department: item.department || "",
            account: item.account || "",
            location: item.location || "",
            description: item.description || "",
          })),
          comments: parsedData[0]?.comments || "",
        };

        // Resolve the promise with the updatedValues
        resolve(updatedValues);
      },
      error: (err) => {
        console.error("Error parsing CSV:", err);
        reject(err); // Reject the promise in case of error
      },
    });
  });
};

export default handleFileUpload;
