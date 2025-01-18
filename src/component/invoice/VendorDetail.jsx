import SectionHeading from "../common/SectionHeading";
import vendorSvg from "../../assets/svg/vendor.svg";
import SubHeading from "../common/SubHeading";
import Label from "../common/Label";
import Select from "../common/Select";
import data from "../../utils/data.json"
import { useFormikContextProvider } from "../../context/formikContext";
import { useMemo } from "react";

const VendorDetail = () => {
  const {values} = useFormikContextProvider()
  const {vendors} = data;
  
  const options = useMemo(()=>vendors.map((vendor)=> vendor.name),[]) ;
  
  const venderData = useMemo(()=>vendors.filter((item)=> item.name === values.vender),[values.vender]) 
  
  return (
    <div id="vender-detail">
      <SectionHeading
        iconPath={vendorSvg}
        iconAlt="vendor-path"
        title="Vendor Details"
      />
      <SubHeading title="Vendor Information" />
      <Label label="Vendor" />
      <Select options={options} name="vender" defaultOption={"Select a Vendor"}/>
      {venderData.length>0 && <div className='text-ed-subh1 my-2 text-ed_grey_v2'>{venderData[0].address}</div>}

    </div>
  )
}

export default VendorDetail
