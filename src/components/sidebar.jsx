import React from 'react';
import Image from 'next/image';
import iconeHome from '@assets/home.svg';
import iconeUsers from '@assets/users.svg';
import iconeUpload from '@assets/FileArrowUp-r.svg';
import Link from 'next/link';

export default function Sidebar() {
    return (
        <div>
            <ul className='flex flex-col mt-5 items-center space-y-6'>
                <li>
                    <Link className='flex flex-row' href="/">
                        <Image className='w-5 h-5 mr-2' src={iconeHome} alt="Icone da Tela Inicial" />
                        <span className='text-gray-900 text-base'>Início</span>
                    </Link>
                </li>
                <li>
                    <Link className='flex flex-row' href="/distribuidora">
                        <Image className='w-5 h-5 mr-2' src={iconeUsers} alt="Icone de Pessoas" />
                        <span className='text-gray-900'>Distribuidoras</span>
                    </Link>
                </li>   
                <li>
                    <Link className='flex flex-row' href="/upload">
                        <Image className='w-5 h-5 mr-2' src={iconeUpload} alt="Icone de Upload" />
                        <span className='text-gray-900'>Importar Dados</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}