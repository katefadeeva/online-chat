import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: end;
  height: 100%;
  padding: 20px;
`;

export const Chat = styled.div<{expand: boolean}>`
  width: ${(p) => (p.expand ? 360 : 70)}px;
  height: ${(p) => (p.expand ? 400 : 70)}px;
  border-radius: ${(p) => (p.expand ? '20px' : '50%')};
  background-color: ${(p) => (p.expand ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.6)')};
  display: flex;
  align-items: ${(p) => (p.expand ? 'space-between' : 'center')};
  justify-content: center;
  cursor: ${(p) => (p.expand ? 'default' : 'pointer')};
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatContainer = styled.div``;
