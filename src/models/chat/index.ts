import {createDomain} from 'effector';
import {createGate} from 'effector-react';

export const chatDomain = createDomain();
export const ChatGate = createGate();

export const changeExtendChat = chatDomain.createEvent<boolean>();
export const changePathTab = chatDomain.createEvent<string>();

export const extendChat$ = chatDomain.createStore<boolean>(false);
export const pathTab$ = chatDomain.createStore<string>('common');
