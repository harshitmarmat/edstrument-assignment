import React, { useRef, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lottie/scanLottie.json";
import successImage from "../../assets/png/checked.png";
import uploadIcon from "../../assets/svg/upload_icon.svg";
import handleFileUpload from "../../utils/fileParser";

const DragAndDropUpload = ({ updateState }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectFile, setSelectFile] = useState("");
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      const res = await handleFileUpload(file);
      updateState(res);
      setSelectFile(file);
      e.dataTransfer.clearData();
    }
  };

  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const res = await handleFileUpload(file);

      updateState(res);
      setSelectFile(file);
      return;
    }
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const clearFile = () => {
    setSelectFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="lg:col-span-1 col-span-2 static lg:sticky top-[6vh] w-full h-[40vh] lg:h-[90vh] text-ed_black text-center">
      <div
        className={`rounded-lg h-full lg:p-[100px] flex flex-col items-center justify-center border-2 border-dashed border-ed_grey ${
          dragActive ? "bg-[#eae2f8]" : ""
        }`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        {!selectFile ? (
          <>
            <p className=" text-ed-h2">Upload Your Invoice</p>
            <p>To auto-populate fields and save time</p>
            <Lottie
              options={defaultOptions}
              style={{
                width: "20vw",
                height: "20vw",
              }}
            />
            <div
              onClick={() => document.getElementById("file-input").click()}
              className="flex cursor-pointer border-ed_grey border rounded-md px-6 py-3 items-center gap-6"
            >
              Upload File
              <img src={uploadIcon} alt="upload-icon" />
            </div>
            <div className=" my-4 cursor-pointer text-ed-subh1">
              <span
                onClick={() => document.getElementById("file-input").click()}
                className=" text-ed_primary font-semibold"
              >
                Click to upload
              </span>{" "}
              or Drag and drop
            </div>
          </>
        ) : (
          <>
            <p className="text-ed_primary text-ed-h2">
              File Uploaded and Data <br />
              Parsed successfully.
            </p>
            <img
              src={successImage}
              className="w-[100px] my-6 h-[100px]"
              alt="checked-image"
            />
            <div
              onClick={clearFile}
              className="flex cursor-pointer border-ed_grey border rounded-md px-6 py-3 items-center gap-6"
            >
              Upload Another File
            </div>
          </>
        )}

        <input
          id="file-input"
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
          accept=".csv"
          ref={fileInputRef}
        />
      </div>
    </div>
  );
};

export default DragAndDropUpload;
