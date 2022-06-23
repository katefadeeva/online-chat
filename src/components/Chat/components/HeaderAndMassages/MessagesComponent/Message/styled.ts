import styled from 'styled-components';

export const MessageContainer = styled.div<{myMessage: boolean}>`
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.myMessage ? 'end' : 'flex-start')};
  flex-direction: ${(p) => (p.myMessage ? 'row-reverse' : 'row')};
  gap: 22px;
`;

export const MessageTime = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: var(--color-white);
  opacity: 0.4;
`;

export const Message = styled.div<{myMessage: boolean}>`
  border-radius: 20px 20px ${(p) => (p.myMessage ? '0 20px' : '20px 0')};
  background: ${(p) => (p.myMessage ? 'var(--color-dark)' : 'var(--color-white)')};
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px;
  color: ${(p) => (p.myMessage ? 'var(--color-white)' : 'var(--color-black)')};
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--color-gray);
`;

export const CountContainer = styled.span`
  color: var(--color-green);
`;

export const MessageBody = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
`;
