import React from 'react';
import Link from 'next/link';

export default function CustoUsuario() {

    const valor = '103,44';

    return (
        <div className="flex bg-white h-14 w-64">
            <div className='w-56 h-56'>
                <Link href="/licenca">
                    <p className='text-gray-600'>Valor médio por Usuário</p>
                    <p>R$ {valor}</p>
                </Link>
            </div>
        </div>
    );
};
