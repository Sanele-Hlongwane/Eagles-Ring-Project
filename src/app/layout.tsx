import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eagles Ring',
  description: 'Find Investments ooportunities and investors',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={roboto.className}>
          <Header />
          <main className='container'>{children}</main>
          <ToastContainer />
	  <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
