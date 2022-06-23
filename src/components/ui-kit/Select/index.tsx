import React from 'react';
import * as S from './styled';
import {ValueContainer} from './ValueContainer';
import {DropdownIndicator} from './DropdownIndicator';
import {SelectOption, SelectOptionGroup, SelectProps} from './types';
import {Option} from './Option';

export function Select<IsMulti extends boolean = false, ValueType = string>(
  props: SelectProps<IsMulti, ValueType>,
) {
  const {
    value,
    options,
    onChange,
    placeholder = '',
    isClearable = false,
    isSearchable = false,
    hideSelectedOptions = false,
    isDisabled,
    noOptionsMessage = () => 'Ничего не найдено',
    closeMenuOnSelect,
    blurInputOnSelect,
    menuPlacement = 'auto',
    maxMenuHeight = 250,
    className,
    components: componentsFromProps = {},
    noCheckMarkForSelectedOption,
    ...otherProps
  } = props;

  const componentsToRender = {
    ...componentsFromProps,
    ...(!componentsFromProps.IndicatorSeparator && {
      IndicatorSeparator: () => null,
    }),
    ...(!componentsFromProps.DropdownIndicator && {DropdownIndicator}),
    ...(!componentsFromProps.ValueContainer && {ValueContainer}),
    ...(!componentsFromProps.Option && {Option}),
  };

  return (
    <S.SelectContainer className={className}>
      <S.StyledSelect<SelectOption<ValueType>, IsMulti, SelectOptionGroup<ValueType>>
        classNamePrefix='select'
        value={value}
        options={options}
        onChange={onChange}
        components={componentsToRender}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        isClearable={isClearable}
        maxMenuHeight={maxMenuHeight}
        closeMenuOnSelect={closeMenuOnSelect}
        blurInputOnSelect={blurInputOnSelect}
        menuPlacement={menuPlacement}
        hideSelectedOptions={hideSelectedOptions}
        noOptionsMessage={noOptionsMessage}
        {...otherProps}
      />
    </S.SelectContainer>
  );
}
