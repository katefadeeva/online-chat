import React from 'react';
import {useStore} from 'effector-react';
import * as S from './styled';
import ChatIcon from '../../assets/img/chat-icon.png';
import {HeaderAndMassages} from './components/HeaderAndMassages';
import {NewMassage} from './components/NewMessage';
import {changeSizeChat, sizeChat$} from '../../models/chat';
import {SizeChat} from '../../types/chat';

export function Chat() {
  const size = useStore(sizeChat$);

  return (
    <S.MainContainer>
      <S.Chat size={size}>
        {size === SizeChat.Small && (
          <S.IconContainer onClick={() => changeSizeChat(SizeChat.Medium)}>
            <img src={ChatIcon} alt='' />
          </S.IconContainer>
        )}
        {size !== SizeChat.Small && (
          <S.ChatContainer>
            <HeaderAndMassages />
            <NewMassage />
          </S.ChatContainer>
        )}
      </S.Chat>
    </S.MainContainer>
  );
}
