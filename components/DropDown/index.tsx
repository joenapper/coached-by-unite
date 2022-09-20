import Select from "react-select";
import { customStyles } from "./styles";
import { DropDownProps } from "./types";

const DropDown = ({
  name,
  instanceId,
  placeholder,
  options,
  clearable = false,
}: DropDownProps) => {
  return (
    <Select
      name={name}
      instanceId={instanceId}
      placeholder={placeholder}
      options={options}
      styles={customStyles}
      isClearable={clearable}
    />
  );
};

export default DropDown;
