import { Sono, Nunito } from 'next/font/google';

const sono = Sono({ weight: ['400'], preload: true, subsets: ['latin'] });
const nunito = Nunito({ weight: ['400'], preload: true, subsets: ['latin'] });

export const fonts = {
  sono,
  nunito
};