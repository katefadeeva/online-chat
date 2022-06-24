import {createDomain} from 'effector';
import {createGate} from 'effector-react';
import {SizeChat} from '../../types/chat';

export const chatDomain = createDomain();
export const ChatGate = createGate();

export const changeSizeChat = chatDomain.createEvent<SizeChat>();
export const changePathTab = chatDomain.createEvent<string>();

export const sizeChat$ = chatDomain.createStore<SizeChat>(SizeChat.Small);
export const pathTab$ = chatDomain.createStore<string>('common');
