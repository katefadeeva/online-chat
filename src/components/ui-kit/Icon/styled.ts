import styled from 'styled-components';

export const IconContainer = styled.span<{
  noFill: boolean;
  noStroke: boolean;
}>`
  display: block;
  vertical-align: top;

  svg {
    display: block;
    fill: ${(p) => (p.noFill ? 'none' : 'currentColor')};
    stroke: ${(p) => (p.noStroke ? 'none' : 'currentColor')};

    &:not(:root) {
      overflow: hidden;
    }
  }
`;
