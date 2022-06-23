import {combine, createDomain} from 'effector';
import {createGate} from 'effector-react';
import {io} from 'socket.io-client';
import {badgeIcon, getHistoryCommonMessage, logoIcon} from '../../../services/chatService';
import {Message} from '../../../types/chat';

export const socket = io('wss://test-chat-backend-hwads.ondigitalocean.app', {
  transports: ['websocket'],
  upgrade: false,
});

export const commonDomain = createDomain();

export const CommonGate = createGate<void>();

export const loadHistoryMessagesFx = commonDomain.createEffect(getHistoryCommonMessage);

export const sendMessageCommonFx = commonDomain.createEffect((text: string) =>
  socket.emit('message', {
    from: 'username',
    text,
  }),
);
export const loadNextMessageFx = commonDomain.createEffect(() =>
  socket.on('message', (message: Message) => {
    const randBadge = Math.floor(Math.random() * 3);

    changeLastMessage({
      ...message,
      level: Math.floor(Math.random() * 10) + 1,
      logoIcon: logoIcon[Math.floor(Math.random() * logoIcon.length)],
      badgeIcon: randBadge !== 2 ? badgeIcon[randBadge] : null,
    });
  }),
);

export const sendMessageCommon = commonDomain.createEvent<string>();
export const changeLastMessage = commonDomain.createEvent<Message | null>();
export const changeIsNewMessage = commonDomain.createEvent<boolean>();

export const historyMessagesCommon$ = commonDomain.createStore<Message[]>([]);
export const isNewMessage$ = commonDomain.createStore<boolean>(false);

export const messagesCommon$ = combine({
  historyCommon: historyMessagesCommon$,
  loadingCommon: loadHistoryMessagesFx.pending,
});
