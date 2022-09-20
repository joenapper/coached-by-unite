type OptionType = {
  value: string;
  label: string;
};

export type DropDownProps = {
  instanceId: string | number;
  placeholder?: string;
  options: OptionType[];
  clearable?: boolean;
};
