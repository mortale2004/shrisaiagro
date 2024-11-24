import Providers from '@/Providers';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../public/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Billing',
  description: 'Billing',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <ToastContainer />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
export const dynamic = 'force-dynamic';
