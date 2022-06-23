import React from 'react';
import {useStore} from 'effector-react';
import * as S from './styled';
import ChatIcon from '../../assets/img/chat-icon.png';
import {HeaderAndMassages} from './components/HeaderAndMassages';
import {NewMassage} from './components/NewMessage';
import {extendChat$, changeExtendChat} from '../../models/chat';

export function Chat() {
  const extend = useStore(extendChat$);

  return (
    <S.MainContainer>
      <S.Chat expand={extend}>
        {!extend && (
          <S.IconContainer onClick={() => changeExtendChat(true)}>
            <img src={ChatIcon} alt='' />
          </S.IconContainer>
        )}
        {extend && (
          <S.ChatContainer>
            <HeaderAndMassages />
            <NewMassage />
          </S.ChatContainer>
        )}
      </S.Chat>
    </S.MainContainer>
  );
}
