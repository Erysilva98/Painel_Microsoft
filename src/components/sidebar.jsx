"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Imagens
import iconeHome from '@assets/home.svg';
import iconeHomeW from '@assets/homeW.svg';
import iconeUsers from '@assets/users.svg';
import iconeUsersW from '@assets/usersW.svg';
import iconeUpload from '@assets/FileArrowUp-r.svg';
import iconeUploadW from '@assets/FileArrowUpW.svg';
import iconeMoeda from "@assets/moeda.svg";

export default function Sidebar() {
  return (
    <aside className='bg-white w-48 min-w-fit h-screen sticky top-0'>
      <ul className='flex flex-col items-center space-y-4 pt-4'>
        <li>
          <Link href="/">
            <div className='group flex px-11 py-1.5 hover:bg-gradient-to-r from-blue-m100 to-blue-m200 rounded-lg'>
              <Image className='w-5 h-5 mr-2 group-hover:hidden' src={iconeHome} alt="Icone da Tela Inicial" />
              <Image className='w-5 h-5 mr-2 hidden group-hover:block animate-[pulse_0.3s_ease-in-out]' src={iconeHomeW} alt="Icone da Tela Inicial" />
              <span className='text-gray-900 text-base group-hover:text-white group-hover:animate-[pulse_0.3s_ease-in-out]'>Início</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/distribuidora">
            <div className='group flex px-3 py-2 hover:bg-gradient-to-r from-blue-m100 to-blue-m200 rounded-lg'>
              <Image className='w-5 h-5 mr-2 group-hover:hidden' src={iconeUsers} alt="Icone de Pessoas" />
              <Image className='w-5 h-5 mr-2 hidden group-hover:block animate-[pulse_0.3s_ease-in-out]' src={iconeUsersW} alt="Icone de Pessoas" />
              <span className='text-gray-900 text-base group-hover:text-white group-hover:animate-[pulse_0.3s_ease-in-out]'>Distribuidoras</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/upload">
            <div className='group flex px-2 py-2 hover:bg-gradient-to-r from-blue-m100 to-blue-m200 rounded-lg'>
              <Image className='w-5 h-5 mr-2 group-hover:hidden' src={iconeUpload} alt="Icone de Upload" />
              <Image className='w-5 h-5 mr-2 hidden group-hover:block animate-[pulse_0.3s_ease-in-out]' src={iconeUploadW} alt='Icone de Upload'/>
              <span className='text-gray-900 text-base group-hover:text-white group-hover:animate-[pulse_0.3s_ease-in-out]'>Importar Dados</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/valores">
            <div className='group flex items-center px-2 py-2 hover:bg-gradient-to-r from-blue-m100 to-blue-m200 rounded-lg'>
              <Image className='w-5 h-5 mr-2 mb-1 group-hover:hidden' src={iconeMoeda} alt="Icone de Upload" />
              <Image className='w-5 h-5 mr-2 mb-1 hidden group-hover:block animate-[pulse_0.3s_ease-in-out]' src={iconeMoeda} alt='Icone de Upload'/>
              <span className='text-gray-900 text-base group-hover:text-white group-hover:animate-[pulse_0.3s_ease-in-out]'>Alterar Valores</span>
            </div>
          </Link>
        </li>
      </ul>
    </aside>
  )
}