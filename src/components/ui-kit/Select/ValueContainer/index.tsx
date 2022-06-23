import {components, ValueContainerProps} from 'react-select';
import {SelectOption, SelectOptionGroup} from '../types';
import * as S from './styled';

export function ValueContainer<IsMulti extends boolean = false, ValueType = string>({
  children,
  ...props
}: ValueContainerProps<SelectOption<ValueType>, IsMulti, SelectOptionGroup<ValueType>>) {
  const {
    selectProps: {placeholder, isSearchable},
  } = props;
  return (
    <components.ValueContainer {...props}>
      {!isSearchable && placeholder && <S.Placeholder>{placeholder}</S.Placeholder>}
      {children}
    </components.ValueContainer>
  );
}
