import { placeholderColor } from "../../slices/GetInTouch/styles";
import { colors, fontSize } from "../../styles/theme";

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? colors.white : colors.black,
    background: state.isSelected ? colors.primary : colors.white,
    padding: 16,
    borderBottom: `1px dotted ${colors.primary}`,
    "&:last-child": {
      border: 0,
    },
  }),
  control: () => ({
    display: "flex",
    border: `1px solid ${colors.primary}`,
    marginBottom: "1rem",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: placeholderColor,
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "13px 16px 13px 16px",
    fontSize: fontSize.base,
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 0,
  }),
};
