import React from 'react';
import Grafico from "@assets/IconGrafico.svg";
import Image from 'next/image';
import Link from 'next/link';

export default function CustoTotal() {

    // Tratamento de dados para o componente Custo Total
    const valor = 'R$ 3.600,00';
    const texto = "Custo Total";

    return (
        <div className="flex bg-white h-48 w-64">
            <div>
                <Link href="/distribuidora">
                    <Image src={Grafico} alt="Icone de Grafico"
                        className='w-10 h-10'
                    />
                    <p className='text-gray-600'>Custo Total</p>
                    <p>{valor}</p>
                    <p>{texto}</p>
                </Link>
            </div>
        </div>
    );
};
