import './common/init';
import './clan/init';
import {chatDomain, pathTab$, changePathTab, ChatGate, sizeChat$, changeSizeChat} from './index';

chatDomain.onCreateStore((store) => store.reset(ChatGate.close));

sizeChat$.on(changeSizeChat, (state, payload) => payload);
pathTab$.on(changePathTab, (state, payload) => payload);
