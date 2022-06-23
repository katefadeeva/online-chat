import React from 'react';
import {TabProps, useTabsContext} from '@reach/tabs';
import * as S from './styled';

export function Tab({index, ...props}: TabProps) {
  const {selectedIndex} = useTabsContext();
  return <S.StyledTab isActive={selectedIndex === index} {...props} />;
}
