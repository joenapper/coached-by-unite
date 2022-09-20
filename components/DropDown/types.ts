type OptionType = {
  value: string;
  label: string;
};

export type DropDownProps = {
  name: string;
  instanceId: string | number;
  placeholder?: string;
  options: OptionType[];
  clearable?: boolean;
};
