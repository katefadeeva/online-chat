import React, {useEffect, useRef} from 'react';
import {Gate, useGate, useStore} from 'effector-react';
import {Spinner} from '../../../../ui-kit/Spinner';
import * as S from './styled';
import {Message} from '../../../../../types/chat';
import {MessageComponent} from './Message';
import {isNewMessage$} from '../../../../../models/chat/common';

interface Props {
  data: Message[];
  loading: boolean;
  gate: Gate<void>;
}

export function MessagesComponent({data, loading, gate}: Props) {
  useGate(gate);
  const areaRef = useRef<HTMLDivElement | null>(null);
  const isNewMessage = useStore(isNewMessage$);

  useEffect(() => {
    if (!areaRef.current || (areaRef.current.scrollTop && !isNewMessage)) {
      return;
    }

      areaRef.current.scrollTop = areaRef.current.scrollHeight;
  });

  return (
    <S.MainContainer ref={areaRef}>
      {loading && (
        <S.LoadingContainer>
          <Spinner radius={20} />
        </S.LoadingContainer>
      )}
      <S.ListMessages>
        {data.map((message, index) => (
          <MessageComponent key={message.id + index} data={message} />
        ))}
      </S.ListMessages>
    </S.MainContainer>
  );
}
