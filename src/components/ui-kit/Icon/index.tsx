import * as React from 'react';
import {FunctionComponent, SVGProps} from 'react';
import {IconContainer} from './styled';

interface Props {
  className?: string;
  width?: number | string;
  height?: number | string;
  source: FunctionComponent<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
  noFill?: boolean;
  noStroke?: boolean;
}

export function Icon({
  className,
  width = 30,
  height = 30,
  onClick,
  source: Source,
  noFill = false,
  noStroke = true,
}: Props) {
  return (
    <IconContainer className={className} onClick={onClick} noFill={noFill} noStroke={noStroke}>
      <Source width={width} height={height} />
    </IconContainer>
  );
}
