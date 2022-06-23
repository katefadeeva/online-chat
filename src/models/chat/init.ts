import './common/init';
import './clan/init';
import {
  extendChat$,
  changeExtendChat,
  chatDomain,
  pathTab$,
  changePathTab,
  ChatGate,
} from './index';

chatDomain.onCreateStore((store) => store.reset(ChatGate.close));

extendChat$.on(changeExtendChat, (state, payload) => payload);
pathTab$.on(changePathTab, (state, payload) => payload);
