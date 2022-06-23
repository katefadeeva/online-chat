import axios from 'axios';
import {Message} from '../types/chat';
import {ReactComponent as BTC} from '../assets/svg/BTC.svg';
import {ReactComponent as ADA} from '../assets/svg/ADA.svg';
import {ReactComponent as Admin} from '../assets/svg/admin-badge.svg';
import {ReactComponent as Moderator} from '../assets/svg/moderator-badge.svg';

export const logoIcon = [BTC, ADA];
export const badgeIcon = [Admin, Moderator];

const api = axios.create();

export async function getHistoryCommonMessage(skip: number): Promise<Message[]> {
  const messages = (
    await api.get(
      `https://test-chat-backend-hwads.ondigitalocean.app/api/messages?skip=${skip}&limit=20`,
    )
  ).data;
  return messages.map((messageInfo: Message) => {
    const randBadge = Math.floor(Math.random() * 3);
    return {
      ...messageInfo,
      level: Math.floor(Math.random() * 10) + 1,
      logoIcon: logoIcon[Math.floor(Math.random() * logoIcon.length)],
      badgeIcon: randBadge !== 2 ? badgeIcon[randBadge] : null,
    };
  });
}

export async function getHistoryClanMessage(): Promise<Message[]> {
  return [
    {
      id: '5',
      from: 'userName',
      createdAt: '2022-06-09T07:21:10Z',
      text: 'Сегодня идем на Германию',
      level: 1,
      logoIcon: BTC,
      badgeIcon: null,
    },
    {
      id: '4',
      from: 'Skylifesky',
      createdAt: '2022-06-08T11:31:10Z',
      text: 'Цена 1 wac =0,1$ и цена не изменится',
      level: 10,
      logoIcon: BTC,
      badgeIcon: Admin,
    },
    {
      id: '3',
      from: 'Nigativ',
      createdAt: '2022-06-08T11:31:25Z',
      text: 'wac можно только купить',
      level: 3,
      logoIcon: ADA,
      badgeIcon: Moderator,
    },
    {
      id: '2',
      from: 'BivOld',
      createdAt: '2022-06-08T11:28:10Z',
      text: 'Я думал, что они будут пополнятся разв н-ное время. А тут реально игра закончена',
      level: 5,
      logoIcon: BTC,
      badgeIcon: null,
    },
    {
      id: '1',
      from: 'BivOld',
      createdAt: '2022-06-08T11:25:10Z',
      text: 'Прикольно. все СОС потрачены, теперь игра закончена))) ',
      level: 1,
      logoIcon: logoIcon[Math.floor(Math.random() * logoIcon.length)],
      badgeIcon: Moderator,
    },
  ];
}
