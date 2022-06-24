import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ListMessages = styled.div`
  padding: 0 10px 8px 10px;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
`;
