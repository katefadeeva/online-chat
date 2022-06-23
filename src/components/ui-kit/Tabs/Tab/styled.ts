import styled from 'styled-components';
import {Tab} from '@reach/tabs';
import {TabProps} from '@reach/tabs/dist/declarations/src';

export const StyledTab = styled(Tab)<{isActive: boolean}>`
  display: flex;
  align-items: center;
  list-style-type: none;
  color: ${(p) => (p.isActive ? 'var(--color-white)' : 'var(--color-green)')};
  height: 100%;
  padding-top: 2px;
  border-bottom: 2px solid
    ${(p) => (p.isActive ? 'var(--color-green)' : 'var(--color-transparent)')};
  cursor: pointer;
  button {
    width: 100%;
    height: 100%;
    text-transform: uppercase;
  }
` as unknown as (props: TabProps & {isActive: boolean}) => JSX.Element;
