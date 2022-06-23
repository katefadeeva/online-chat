import React, {useState} from 'react';
import InputEmoji from 'react-input-emoji';
import {useStore} from 'effector-react';
import * as S from './styled';
import {changeIsNewMessage, sendMessageCommon} from '../../../../models/chat/common';
import {pathTab$} from '../../../../models/chat';
import {sendMessageClan} from '../../../../models/chat/clan';

export function NewMassage() {
  const path = useStore(pathTab$);
  const [text, setText] = useState<string>('');

  return (
    <S.NewMessageContainer>
      <InputEmoji
        value={text}
        onChange={setText}
        cleanOnEnter
        fontSize={13}
        borderColor='transparent'
        fontFamily='var(--font-family)'
        maxLength={200}
        onEnter={() => {
          if (path === 'common') {
            sendMessageCommon(text);
            changeIsNewMessage(true);
          }
          if (path === 'clan') {
            sendMessageClan(text);
          }
        }}
        placeholder='Напишите сообщение...'
      />
    </S.NewMessageContainer>
  );
}
