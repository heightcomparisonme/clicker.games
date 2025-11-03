import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';
import { games } from '@/lib/games';

const SITE_URL = 'https://cliker.games';

export const metadata: Metadata = {
  title: 'Cookie Clicker & Idle Games | Play Free Clicker Games Instantly | ClickerGames',
  description:
    'Play Cookie Clicker and the best incremental games online! Click your way to cookie empire domination with idle mechanics, upgrades, and prestige systems. No installs needed—play addictive clicker games instantly on any device.',
  keywords: [
    'cookie clicker',
    'cookie clicker online',
    'cookie clicker free',
    'idle games',
    'incremental games',
    'clicker games',
    'browser games',
    'free clicker games',
    'play cookie clicker',
    'cookie empire',
    'prestige games',
    'upgrade games',
    'passive income games',
    'clicking games',
    'auto clicker games',
    'satisfying games',
    'addictive games',
    'progress games',
    'achievement games',
    'building games',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    url: SITE_URL,
    title: 'Cookie Clicker & Idle Games | Play Free Clicker Games | ClickerGames',
    description:
      'Play Cookie Clicker and hundreds of incremental games! Click cookies, build bakeries, unlock upgrades, and dominate the idle gaming world. Start clicking now!',
    siteName: 'ClickerGames',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Clicker & Idle Games | Play Free Clicker Games | ClickerGames',
    description:
      'Play Cookie Clicker and hundreds of incremental games! Click cookies, build bakeries, unlock upgrades, and dominate the idle gaming world. Start clicking now!',
  },
};

export default function HomePage() 

{
  return <HomePageClient games={games} />;
}
