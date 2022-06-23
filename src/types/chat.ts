import {FunctionComponent, SVGProps} from 'react';

export interface Message {
  id: string;
  from: string;
  text: string;
  createdAt: string;
  level: number;
  logoIcon: FunctionComponent<SVGProps<SVGSVGElement>>;
  badgeIcon: FunctionComponent<SVGProps<SVGSVGElement>> | null;
}

export interface MessageRequest {
  from: string;
  test: string;
}
