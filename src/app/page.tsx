import dynamic from 'next/dynamic';
const Landing = dynamic(() => import('@/modules/landing'));

export default async function LadingPage() {
  return <Landing />;
}
