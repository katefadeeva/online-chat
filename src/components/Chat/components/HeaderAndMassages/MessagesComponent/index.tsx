import React from 'react';
import {Gate, useGate} from 'effector-react';
import {Spinner} from '../../../../ui-kit/Spinner';
import * as S from './styled';
import {Message} from '../../../../../types/chat';
import {MessageComponent} from './Message';

interface Props {
  data: Message[];
  loading: boolean;
  gate: Gate<void>;
}

export function MessagesComponent({data, loading, gate}: Props) {
  useGate(gate);

  return (
    <S.MainContainer>
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
