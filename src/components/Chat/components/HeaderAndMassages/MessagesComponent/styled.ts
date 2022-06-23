import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  height: 320px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0.33);
  }

  ::-webkit-scrollbar-track {
    background-clip: border-box;
    background-color: transparent;
    border: 1px solid transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-green);
    border-radius: 30px;
    border: 2px solid transparent;
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
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
