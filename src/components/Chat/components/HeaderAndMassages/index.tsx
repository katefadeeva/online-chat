import React, {useMemo, useState} from 'react';
import {useStore} from 'effector-react';
import * as S from './styled';
import {Icon} from '../../../ui-kit/Icon';
import {ReactComponent as ExtendIcon} from '../../../../assets/svg/enlarge.svg';
import {ReactComponent as MinimizeIcon} from '../../../../assets/svg/minimize.svg';
import {Select} from '../../../ui-kit/Select';
import {MessagesComponent} from './MessagesComponent';
import {NoDataComponent} from './NoDataComponent';
import {messagesCommon$, CommonGate} from '../../../../models/chat/common';
import {SelectOption} from '../../../ui-kit/Select/types';
import {changeExtendChat, changePathTab} from '../../../../models/chat';
import {ClanGate, messagesClan$} from '../../../../models/chat/clan';
import {RoutedTabProps} from '../../../ui-kit/Tabs';

const LANGUAGES_OPTIONS: SelectOption[] = [
  {value: 'ru', label: 'RU'},
  {value: 'en', label: 'EN'},
];

export function HeaderAndMassages() {
  const {historyCommon, loadingCommon} = useStore(messagesCommon$);
  const {historyClan, loadingClan} = useStore(messagesClan$);
  const [language, setLanguage] = useState<SelectOption | null>(LANGUAGES_OPTIONS[0]);

  const TAB_ROUTES: RoutedTabProps[] = useMemo(
    () => [
      {
        path: 'common',
        title: 'Общий',
        component: (
          <MessagesComponent data={historyCommon} loading={loadingCommon} gate={CommonGate} />
        ),
      },
      {
        path: 'clan',
        title: 'Клан',
        component: <MessagesComponent data={historyClan} loading={loadingClan} gate={ClanGate} />,
      },
      {
        path: 'friends',
        title: 'Друзья',
        component: <NoDataComponent />,
      },
      {
        path: 'news',
        title: 'Новости',
        component: <NoDataComponent />,
      },
      {
        path: 'news1',
        title: 'Новости',
        component: <NoDataComponent />,
      },
      {
        path: 'news2',
        title: 'Новости',
        component: <NoDataComponent />,
      },
    ],
    [historyClan, loadingClan, historyCommon, loadingCommon],
  );

  return (
    <S.StyledTabs routes={TAB_ROUTES} onChangePath={changePathTab}>
      <>
        <S.LanguagesList>
          <Select options={LANGUAGES_OPTIONS} value={language} onChange={setLanguage} />
        </S.LanguagesList>
        <S.ButtonContainer>
          <button>
            <Icon source={ExtendIcon} width={18} height={18} />
          </button>
          <button onClick={() => changeExtendChat(false)}>
            <Icon source={MinimizeIcon} width={18} height={18} />
          </button>
        </S.ButtonContainer>
      </>
    </S.StyledTabs>
  );
}
