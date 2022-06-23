import {forward} from 'effector';
import {v4 as uuidv4} from 'uuid';
import {
  clanDomain,
  ClanGate,
  historyMessagesClan$,
  loadHistoryMessagesFx,
  sendMessageClan,
} from './index';
import {logoIcon} from '../../../services/chatService';

clanDomain.onCreateStore((store) => store.reset(ClanGate.close));

forward({
  from: ClanGate.open,
  to: loadHistoryMessagesFx,
});

historyMessagesClan$
  .on(loadHistoryMessagesFx.doneData, (state, payload) => payload)
  .on(sendMessageClan, (state, payload) => [
    {from: 'userName', text: payload, createdAt: new Date().toISOString(), id: uuidv4(), level: 1,
      badgeIcon: null,
      logoIcon: logoIcon[0],},
    ...state,
  ]);
