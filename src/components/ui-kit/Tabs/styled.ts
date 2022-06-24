import styled from 'styled-components';
import {TabList, Tabs} from '@reach/tabs';

export const HeaderContainer = styled.div`
  height: 40px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const TabsListContainer = styled.div`
  height: calc(100% - 40px);
  overflow-y: auto;
  width: 100%;
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0.33);
  }

  ::-webkit-scrollbar-track {
    background-clip: border-box;
    background-color: transparent;
    border: 1px solid transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-green);
    border-radius: 30px;
    border: 2px solid transparent;
  }
`;

export const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
  width: 100%;
  flex-grow: 1;
`;

export const ScrollContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ScrollButton = styled.button<{hide: boolean}>`
  width: 20px;
  height: 40px;
  display: ${(p) => (p.hide ? 'none' : 'inline-flex')};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.25s ease;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
  span {
    color: var(--color-light-gray);
  }
`;

export const ScrollButtonRight = styled(ScrollButton)`
  box-shadow: -10px 0 20px var(--color-black);
`;

export const ScrollButtonLeft = styled(ScrollButton)`
  box-shadow: 10px 0 20px var(--color-black);
  border-top-left-radius: 20px;
`;

export const MenuBlock = styled.div`
  display: block;
  overflow: hidden;
  position: relative;
  height: 40px;
  flex: 1;
`;

export const StyledTabList = styled(TabList)`
  height: 40px;
  display: flex;
  position: absolute;
  padding: 0 13px;
  margin: 0;
  gap: 15px;
  transition: transform 150ms linear;
`;
