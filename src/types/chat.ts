import {FunctionComponent, SVGProps} from 'react';

export enum SizeChat {
  Small = 'Small',
  Medium = 'Medium',
  Big = 'Big',
}

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
  text: string;
}
