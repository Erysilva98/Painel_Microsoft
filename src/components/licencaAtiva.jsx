import React from 'react';
import Image from 'next/image';
import { BadgeDelta, Metric,} from "@tremor/react";

//Icones 
import Icone from "@assets/licencaIcon.svg";

export default function LicencaAtiva({ data }) {

    // Tratamento de dados para o componente Custo Total
    const valor = `${(data?.quantidadeLicencasAtivas || 0)}`;
    const texto = "Licenças Ativas";
    let status = data?.diferencaLicecasAtuaisEAnteriores || 0;
    let seta = status >= 0 ? "moderateIncrease" : "moderateDecrease";

    // Texto do componente BadgeDelta
    if (status !== 0) {
        status = `${Math.abs(status).toFixed(2)}% ${status >= 0 ? "de Aumento" : "de Redução"} em Relação ao Mês Anterior`;
    } else {
        status = "Sem Alteração em Relação ao Mês Anterior";
        seta = "unchanged";
    }

    return (
        <div className="flex flex-col bg-white w-96 h-56 hover:shadow-lg rounded-xl">
            <div className='mt-6 ml-5'>
                <div>
                    <Image className='w-10 h-10 mb-3' src={Icone} alt="Gráfico" />
                </div>

                <span>{texto}</span>
                <Metric className='mb-2.5'>{valor}</Metric>
                <BadgeDelta deltaType={seta}>{status}</BadgeDelta>
            </div>
        </div>
    );
};
