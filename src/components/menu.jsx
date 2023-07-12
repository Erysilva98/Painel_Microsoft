import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Data from './data';

import logoMoura from '/public/assets/logo.svg';
import iconeUser from '/public/assets/user.svg';

const Menu = () => {

  return (
    <nav className="border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#" className="flex items-center">
          <Image
            src={logoMoura}
            className="h-25 mr-5"
            alt="Logo Moura"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Custo Geral
          </span>
        </Link>
        <div>
          <Data />
        </div>
        <div className="flex items-center md:order-2">
          <Image
            className="w-8 h-8 rounded-full"
            src={iconeUser}
            alt="Icone de usuário"
          />
          <div className=''>
            <p>User Name</p>
            <p>User E-mail</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
