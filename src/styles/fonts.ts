import { Sono, Nunito } from 'next/font/google';

const sono = Sono({ weight: ['400','600','700','800'], preload: true, subsets: ['latin'] });
const nunito = Nunito({ weight: ['400','600','700','800'], preload: true, subsets: ['latin'] });

export const fonts = {
  sono: sono.style.fontFamily,
  nunito: nunito.style.fontFamily
};