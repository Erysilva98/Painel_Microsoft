import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';  

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Painel Microsoft',
  description: 'Painel de Custo da Microsoft',
};

export default function Layout({ children }) {
  return (
    <html lang='pt-br'>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="../../public/favicon.ico"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
