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
                    <Link href="/">
                        <div className='flex px-12 hover:bg-gray-300 rounded-lg'>
                            <Image className='w-5 h-5 mr-2' src={iconeHome} alt="Icone da Tela Inicial" />
                            <span className='text-gray-900 text-base'>Início</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/distribuidora">
                        <div className='flex px-3 hover:bg-gray-300 rounded-lg'>
                            <Image className='w-5 h-5 mr-2' src={iconeUsers} alt="Icone de Pessoas" />
                            <span className='text-gray-900'>Distribuidoras</span>
                        </div>
                    </Link>
                </li>   
                <li>
                    <Link href="/upload">
                        <div className='flex px-2 hover:bg-gray-300 rounded-lg'>
                            <Image className='w-5 h-5 mr-2' src={iconeUpload} alt="Icone de Upload" />
                            <span className='text-gray-900'>Importar Dados</span>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}