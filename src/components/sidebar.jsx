import React from 'react';
import Image from 'next/image';
import iconeHome from '@assets/home.svg';
import iconeUsers from '@assets/users.svg';
import iconeUpload from '@assets/FileArrowUp-r.svg';
import Link from 'next/link';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__menu">
                <ul>
                    <li>
                        <Link className='flex flex-row' href="/">
                            <Image src={iconeHome} alt="Icone da Tela Inicial" />
                            <span>Início</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex flex-row' href="/distribuidora">
                            <Image src={iconeUsers} alt="Icone de Pessoas" />
                            <span>Distribuidora</span>
                        </Link>
                    </li>   
                    <li>
                        <Link className='flex flex-row' href="/upload">
                            <Image src={iconeUpload} alt="Icone de Upload" />
                            <span>Upload</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}