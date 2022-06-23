import {forward, sample} from 'effector';
import {v4 as uuidv4} from 'uuid';
import {
  changeLastMessage,
  changeIsNewMessage,
  commonDomain,
  CommonGate,
  historyMessagesCommon$, isNewMessage$,
  loadHistoryMessagesFx,
  loadNextMessageFx,
  sendMessageCommon,
  sendMessageCommonFx,
} from './index';
import {Message} from '../../../types/chat';
import {logoIcon} from '../../../services/chatService';

commonDomain.onCreateStore((store) => store.reset(CommonGate.close));

sample({
  clock: CommonGate.open,
  source: historyMessagesCommon$,
  fn: (historyMessages) => historyMessages.length,
  target: loadHistoryMessagesFx,
});

forward({
  from: loadHistoryMessagesFx.doneData,
  to: loadNextMessageFx,
});

forward({
  from: sendMessageCommon,
  to: sendMessageCommonFx,
});

historyMessagesCommon$
  .on(loadHistoryMessagesFx.doneData, (state, payload) => payload)
  .on(changeLastMessage, (state, payload) => [payload as Message, ...state])
  .on(sendMessageCommon, (state, payload) => [
    {
      from: 'userName',
      text: payload,
      createdAt: new Date().toISOString(),
      id: uuidv4(),
      level: 1,
      badgeIcon: null,
      logoIcon: logoIcon[0],
    },
    ...state,
  ]);

isNewMessage$
  .on(changeIsNewMessage, (state, payload) => payload)
  .reset(CommonGate.close);
