import React from 'react';
import Link from 'next/link';

export default function NumUsuarios() {

    const valor = '3.000';

    return (
        <div className="flex bg-white h-14 w-64">
            <div className='w-56 h-56'>
                <Link href="/licenca">
                    <p className='text-gray-600'>Usuários</p>
                    <p>{valor}</p>
                </Link>
            </div>
        </div>
    );
};
