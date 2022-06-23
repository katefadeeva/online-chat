import React, {forwardRef} from 'react';
import {format} from 'date-fns';
import * as S from './styled';
import {Icon} from '../../../../../ui-kit/Icon';
import {Message} from '../../../../../../types/chat';

interface Props {
  data: Message;
}

export const MessageComponent = forwardRef((props: Props, ref: React.Ref<HTMLDivElement>) => {
  const {from, id, createdAt, text, level, logoIcon, badgeIcon} = props.data;

  return (
    <S.MessageContainer myMessage={from === 'userName'} ref={ref}>
      <S.Message key={id} myMessage={from === 'userName'}>
        {from !== 'userName' && (
          <S.MessageHeader>
            {!!logoIcon && <Icon source={logoIcon} width={14} height={14} />}
            {from}
            {!!badgeIcon && <Icon source={badgeIcon} width={14} height={14} />}
            <S.CountContainer>{level}</S.CountContainer>
          </S.MessageHeader>
        )}
        <S.MessageBody>{text}</S.MessageBody>
      </S.Message>
      <S.MessageTime>{format(new Date(createdAt), 'kk:mm')}</S.MessageTime>
    </S.MessageContainer>
  );
});
