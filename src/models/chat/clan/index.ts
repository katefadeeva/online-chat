import {combine, createDomain} from 'effector';
import {createGate} from 'effector-react';
import {getHistoryClanMessage} from '../../../services/chatService';
import {Message} from '../../../types/chat';

export const clanDomain = createDomain();

export const ClanGate = createGate<void>();

export const loadHistoryMessagesFx = clanDomain.createEffect(getHistoryClanMessage);

export const sendMessageClan = clanDomain.createEvent<string>();

export const historyMessagesClan$ = clanDomain.createStore<Message[]>([]);

export const messagesClan$ = combine({
  historyClan: historyMessagesClan$,
  loadingClan: loadHistoryMessagesFx.pending,
});
