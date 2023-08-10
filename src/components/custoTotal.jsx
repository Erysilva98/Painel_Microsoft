"use client";
import React from 'react';
import Image from 'next/image';
import { BadgeDelta, Metric } from "@tremor/react";

// Imagens
import Grafico from "@assets/IconGrafico.svg";

export default function CustoTotal({data}) {
    
    // Tratamento de dados para o componente Custo Total
    const valor = `${(data?.custoTotal || 0)}`;
    const texto = "Custo Total";
    
    // Tratamento de dados para o componente BadgeDelta
    let status = data?.diferencaDoMesAtualComPassado || 0;
    let seta = status > 0 ? "moderateIncrease" : status < 0 ? "moderateDecrease" : "unchanged";

    // Texto do componente BadgeDelta
    if (status !== 0) {
        status = `${Math.abs(status).toFixed(2)}% ${status >= 0 ? "de Aumento" : "de Redução"} em Relação ao Mês Anterior`;
    } else {
        status = "Sem Alteração em Relação ao Mês Anterior";
    }

    return (
        <div className="flex flex-col bg-white w-96 h-56 hover:shadow-lg rounded-xl">
            <div className='mt-6 ml-5'>
                <div>
                    <Image className='w-10 h-10 mb-3' src={Grafico} alt="Gráfico" />
                </div>
                    <div>
                        <span>{texto}</span>
                        <Metric className='mb-2.5'>R$ {valor}</Metric>
                    </div>
                <BadgeDelta deltaType={seta}>{status}</BadgeDelta>
            </div>
        </div>
    );
}
