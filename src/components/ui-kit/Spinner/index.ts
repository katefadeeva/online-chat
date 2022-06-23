import styled, {keyframes} from 'styled-components';

const rotateKeyframe = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.span<{
  radius?: number;
  color?: string;
}>`
  display: block;
  box-sizing: border-box;
  width: 2em;
  height: 2em !important;
  font-size: ${(p) => `${p.radius || 40}px`};
  border: 0.2em solid ${(p) => p.color || `var(--color-light-gray)`};
  border-left-color: transparent;
  border-radius: 50%;
  animation: ${rotateKeyframe} 0.9s ease infinite;
`;
