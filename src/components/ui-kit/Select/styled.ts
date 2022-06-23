import styled from 'styled-components';
import Select from 'react-select';
import SelectClass from 'react-select/dist/declarations/src/Select';
import {GroupBase} from 'react-select/dist/declarations/src/types';
import {StateManagerProps} from 'react-select/dist/declarations/src/useStateManager';
import {ReactElement, RefAttributes} from 'react';

export const SelectContainer = styled.div<{isDisabled?: boolean}>`
  width: 100%;
`;

type StyledSelectType = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: StateManagerProps<Option, IsMulti, Group> &
    RefAttributes<SelectClass<Option, IsMulti, Group>>,
) => ReactElement;

export const StyledSelect = styled(Select)`
  pointer-events: all !important;

  .${(p) => p.classNamePrefix} {
    &--is-disabled {
      pointer-events: all;
    }

    &__control {
      min-height: 40px;
      transition: none;
      border: 1px solid var(--color-transparent);
      background-color: var(--color-transparent);
      font-size: 13px;
      line-height: 15px;
      cursor: ${(p) => (p.isDisabled ? 'not-allowed' : 'pointer')};
      gap: 5px;

      :hover {
        border: 1px solid var(--color-transparent);
      }

      [class$='-Input'] {
        margin: 0;
        padding: 0;
        max-width: 100%;
        position: relative;
      }

      &--is-focused {
        box-shadow: none;

        [class$='-Input'] {
          position: relative;
        }
      }
    }

    &__input-container {
      position: relative;
    }

    &__value-container {
      height: 100%;
      min-height: 40px;
      gap: 6px;
      color: var(--color-white);
      padding: 0 0 0 7px;

      [class$='-DummyInput'] {
        position: absolute;
      }
    }

    &__placeholder {
      color: var(--color-blue-4);
      font-size: 16px;
      line-height: 20px;
      margin: 0;
    }

    &__indicators {
      padding: 0 10px 0 0;
    }

    &__indicator {
      padding: 0;
      color: var(--color-light-gray);

      &:hover {
        color: var(--color-light-gray);
      }
    }

    &__single-value {
      margin: 0;
      font-size: 13px;
      line-height: 15px;
      color: var(--color-white);
    }

    &__input {
      color: var(--color-white) !important;
      font-size: 16px !important;
      line-height: 20px !important;
      position: absolute;
      top: 0;
      max-width: 100%;

      input {
        max-width: 100%;
      }
    }

    &__menu {
      margin: 4px 0;
      border-radius: 4px;
      width: 100%;
      border: none;
      background-color: var(--color-white);
      filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1));
      box-shadow: none;
    }

    &__menu-list {
      border-radius: 4px;
      border: none;
      padding: 0;
    }

    &__option {
      min-height: 32px;
      padding: 6px 14px 6px 8px;
      font-size: 13px;
      line-height: 15px;
      display: flex;
      align-items: center;
      cursor: pointer;
      gap: 15px;
      justify-content: space-between;
      color: var(--color-black);
      background-color: var(--color-white);
      border: 0;
      border-bottom: 1px solid var(--color-light-gray);

      :hover {
        background-color: var(--color-light);
      }

      :first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      :last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-bottom: 0;
      }

      &:active {
        background-color: var(--color-white);
      }

      &--is-selected,
      &--is-selected:active {
        background-color: var(--color-light);
        color: var(--color-black);
      }

      &--is-disabled {
        background: var(--color-light);
        color: var(--color-light-gray);
        cursor: default;
      }
    }

    &__group {
      padding: 0;

      :not(:last-child) {
        margin-bottom: 5px;
        border-bottom: 1px solid var(--color-light);
      }
    }

    &__group-heading {
      color: var(--color-light);
      padding: 10px 12px 8px;
      margin: 0;
    }

    &__menu-notice--no-options {
      padding: 15px;
    }
  }
` as StyledSelectType;
