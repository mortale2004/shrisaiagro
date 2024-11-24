import dynamic from 'next/dynamic';
const Vehicle = dynamic(() => import('@/modules/lorry'));

export default async function LadingPage() {
  return <Vehicle />;
}
