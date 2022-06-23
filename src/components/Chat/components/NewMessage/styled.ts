import styled from 'styled-components';

export const NewMessageContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.33);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  max-height: 40px;
  width: 360px;
  cursor: text;
  .react-emoji {
    height: 40px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  .emoji-mart-scroll {
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      background: transparent;
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
  }
  .react-input-emoji--container {
    background-color: transparent;
    margin: 0;
    color: var(--color-white);
    font-weight: 400;
    line-height: 16px;
  }
  .react-input-emoji--placeholder {
    color: var(--color-white);
    opacity: 0.5;
    width: 100%;
    left: 20px;
  }
  .react-input-emoji--input {
    padding: 10px 0;
    max-height: 40px;
    white-space: nowrap;
  }
  .react-input-emoji--button svg {
    fill: var(--color-gray);
  }
  .react-emoji-picker--wrapper {
    width: 355px;
    height: 390px;
  }
  .emoji-mart-scroll {
    height: 304px;
  }
  .emoji-mart-anchor-selected {
    color: var(--color-green) !important;
  }
  .emoji-mart-anchor-bar {
    background-color: var(--color-green) !important;
  }
  .react-input-emoji--button {
    padding: 0 20px 0 10px;
  }
  .react-input-emoji--wrapper {
    padding-left: 20px;
  }
`;
