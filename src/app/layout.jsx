import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';  

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <html lang='pt-br'>
      <Head>
        <title>Painel Microsoft</title>
        <meta name="description" content="Painel de Custo da Microsoft" />
        <link rel="icon" href="../../public/favicon.ico"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
