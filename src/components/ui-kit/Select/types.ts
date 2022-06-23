import {GroupBase, Props} from 'react-select';

export interface SelectOption<ValueType = string> {
  label: string;
  value: ValueType extends never ? string : ValueType;
}

export interface SelectOptionGroup<ValueType = string> extends GroupBase<SelectOption<ValueType>> {
  label: string;
}

export interface SelectProps<IsMulti extends boolean = false, ValueType = string>
  extends Props<SelectOption<ValueType>, IsMulti, SelectOptionGroup<ValueType>> {
  noCheckMarkForSelectedOption?: boolean;
}
