import styled from 'styled-components';
import {SizeChat} from '../../types/chat';

export const MainContainer = styled.div`
  display: flex;
  align-items: end;
  height: 100%;
  padding: 20px;
`;

export const Chat = styled.div<{size: SizeChat}>`
  width: ${(p) =>
    p.size === SizeChat.Small ? '70px' : p.size === SizeChat.Medium ? '360px' : '100%'};
  height: ${(p) =>
    p.size === SizeChat.Small ? '70px' : p.size === SizeChat.Medium ? '400px' : '100%'};
  border-radius: ${(p) => (p.size !== SizeChat.Small ? '20px' : '50%')};
  background-color: ${(p) =>
    p.size !== SizeChat.Small ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.6)'};
  display: flex;
  align-items: ${(p) => (p.size !== SizeChat.Small ? 'space-between' : 'center')};
  justify-content: center;
  cursor: ${(p) => (p.size !== SizeChat.Small ? 'default' : 'pointer')};
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatContainer = styled.div`
  width: 100%;
`;
