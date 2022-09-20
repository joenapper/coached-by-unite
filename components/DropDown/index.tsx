import Select from "react-select";
import { customStyles } from "./styles";
import { DropDownProps } from "./types";

const DropDown = ({
  instanceId,
  placeholder,
  options,
  clearable = false,
}: DropDownProps) => {
  return (
    <Select
      instanceId={instanceId}
      placeholder={placeholder}
      options={options}
      styles={customStyles}
      isClearable={clearable}
    />
  );
};

export default DropDown;
