import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import {Event} from 'effector';
import {TabPanel} from '@reach/tabs';
import * as S from './styled';
import {Icon} from '../Icon';
import {ReactComponent as ArrowLeft} from '../../../assets/svg/arrow-left.svg';
import {ReactComponent as ArrowRight} from '../../../assets/svg/arrow-right.svg';
import {Tab} from './Tab';

export interface RoutedTabProps {
  title: ReactNode;
  component?: ReactNode;
  path: string;
}

export interface RoutedTabsProps {
  routes: RoutedTabProps[];
  defaultPath?: string;
  className?: string;
  children?: ReactNode;
  onChangePath?: Event<string>;
}

export function Tabs({routes, defaultPath = routes[0].path, children, className, onChangePath}: RoutedTabsProps) {
  const rootElem = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const prevStartsAt = useRef<number>(0);
  const [, callForceRerender] = useState({});
  const [startsAt, setStartsAt] = useState(0);

  const defaultPathIndex = routes.findIndex((e) => e.path === defaultPath);

  const [tabIndex, setTabIndex] = useState(defaultPathIndex);

  const listWidth = useCallback(() => {
    const list = listRef.current && listRef.current.children[0];
    return list ? list.clientWidth : 0;
  }, []);

  const hiddenWidth = useCallback(() => {
    const menu = menuRef.current;
    return menu ? listWidth() - menu.clientWidth : 0;
  }, [listWidth]);

  const offset = useCallback(() => {
    const list = listRef.current && listRef.current.children[0];
    let offsetValue = 0;

    if (list) {
      for (let i = 0; i < startsAt; i++) {
        const menuItem = list.childNodes[i] as HTMLElement;
        const margin = window.getComputedStyle(menuItem).marginRight;
        const marginWidth = margin ? Number.parseInt(margin, 10) : 0;
        offsetValue -= menuItem.clientWidth + marginWidth;
      }
    }

    return offsetValue;
  }, [startsAt]);

  const showButtons = hiddenWidth() > 0;

  useEffect(() => {
    const onResize = () => setStartsAt(0);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const list = listRef.current && (listRef.current.children[0] as HTMLUListElement);
    if (startsAt !== prevStartsAt.current && list) {
      list.style.transform = `translateX(${offset()}px)`;
    }
    prevStartsAt.current = startsAt;
  }, [startsAt, offset]);

  useEffect(() => {
    if (hiddenWidth()) {
      callForceRerender({});
    }
  }, [hiddenWidth]);

  function scrollBack() {
    setStartsAt(startsAt > 0 ? startsAt - 1 : 0);
  }

  function scrollNext() {
    setStartsAt(startsAt + 1);
  }

  function hideNext(): boolean {
    return hiddenWidth() < -offset();
  }

  return (
    <S.StyledTabs ref={rootElem} index={tabIndex} onChange={(index) => setTabIndex(index)}>
      <S.HeaderContainer className={className}>
        <S.ScrollContainer>
          {showButtons && (
            <S.ScrollButtonLeft onClick={scrollBack} hide={startsAt < 1}>
              <Icon source={ArrowLeft} width={7} height={11} />
            </S.ScrollButtonLeft>
          )}
          <S.MenuBlock ref={menuRef}>
            <div ref={listRef}>
              <S.StyledTabList>
                {routes.map(({title, path}, index) => (
                  <Tab key={path} index={index}>
                    <button onClick={() => onChangePath && onChangePath(path)}>{title}</button>
                  </Tab>
                ))}
              </S.StyledTabList>
            </div>
          </S.MenuBlock>
          {showButtons && (
            <S.ScrollButtonRight onClick={scrollNext} hide={hideNext()}>
              <Icon source={ArrowRight} width={7} height={11} />
            </S.ScrollButtonRight>
          )}
        </S.ScrollContainer>
        {children}
      </S.HeaderContainer>
      <div>
        {routes.map(({path, component}, index) => (
          <TabPanel key={path} index={index}>
            {component}
          </TabPanel>
        ))}
      </div>
    </S.StyledTabs>
  );
}
