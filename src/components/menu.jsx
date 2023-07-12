import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Data from './data';


import iconeUser from '/public/assets/user.svg';
import Logotipo from './logotipo';
import Usuario from './usuario';
import Pesquisar from './inputPesquisar';

const Menu = () => {

  return (
    <nav className="border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Componente Logotipo.jsx */}
        <Logotipo />
        {/* Componente Pesquisar */}
        <Pesquisar />
        {/* Componente data.jsx */}
        <Data />
        {/* Componente usuario.jsx */}
        <Usuario />
      </div>
    </nav>
  );
};

export default Menu;
