"use client";
import React from 'react';
import Image from 'next/image';
import { Badge, Metric } from "@tremor/react";

// Imagens
import Grafico from "@assets/IconGrafico.svg";

export default function CustoTotal({ data }) {

    if (!data) return null;

    // Tratamento de dados para o componente Custo Total
    const valor = parseFloat(data?.custoTotal || 0).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minFracionar: 2,
        maxFracionar: 2,
    });
    const texto = "Custo Total no Mês Atual";

    // Tratamento de dados para o componente Badge
    let status = data?.diferencaDoMesAtualComPassado || 0;

    // Texto do componente Badge
    if (status !== 0) {
        status = `${Math.abs(status).toFixed(2)}% ${status >= 0 ? "de Aumento" : "de Redução em Relação ao Mês Anterior"} `;
    } else {
        status = "Sem Alteração em Relação ao Mês Anterior";
    }

    return (
        <div className="flex flex-col bg-white w-96 h-56 hover:shadow-lg rounded-xl">
            <div className='mt-6 mr-5 ml-5'>
                <div>
                    <Image className='w-10 h-10 mb-3' src={Grafico} alt="Gráfico" />
                </div>
                <div>
                    <span>{texto}</span>
                    <Metric className='mb-2.5'>{valor}</Metric>
                </div>
                {/* Status do componente */}
                <Badge className='text-xs'>{status}</Badge>
            </div>
        </div>
    );
}
