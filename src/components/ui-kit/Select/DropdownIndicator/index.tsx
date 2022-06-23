import {components, DropdownIndicatorProps} from 'react-select';
import {Icon} from '../../Icon';
import {ReactComponent as ArrowDownIcon} from '../../../../assets/svg/arrow-down.svg';
import {SelectOption, SelectOptionGroup} from '../types';

export function DropdownIndicator<IsMulti extends boolean = false, ValueType = string>(
  indicatorProps: DropdownIndicatorProps<
    SelectOption<ValueType>,
    IsMulti,
    SelectOptionGroup<ValueType>
  >,
) {
  return (
    <components.DropdownIndicator {...indicatorProps}>
      <Icon source={ArrowDownIcon} height={7} width={11} />
    </components.DropdownIndicator>
  );
}
