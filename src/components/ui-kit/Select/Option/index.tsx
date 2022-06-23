import {OptionProps, components} from 'react-select';
import * as S from './styled';
import {SelectOption, SelectOptionGroup} from '../types';

export function Option<IsMulti extends boolean = false, ValueType = string>(
  props: OptionProps<SelectOption<ValueType>, IsMulti, SelectOptionGroup<ValueType>>,
) {
  const {children} = props;

  return (
    <components.Option {...props}>
      <S.InnerOptionContainer>{children}</S.InnerOptionContainer>
    </components.Option>
  );
}
