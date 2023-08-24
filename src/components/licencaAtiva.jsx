import React from 'react';
import Image from 'next/image';
import { Badge, Metric,} from "@tremor/react";

//Icones 
import Icone from "@assets/licencaIcon.svg";

export default function LicencaAtiva({ data }) {

    if(!data) return null;
    
    // Tratamento de dados para o componente Custo Total
    const valor = `${(data?.quantidadeLicencasAtivas || 0)}`;
    const texto = "Licenças Ativas no Mês Atual";

    let status = data?.diferencaLicecasAtuaisEAnteriores || 0;
    let badgeCor = "";

    // Formatação do componente Badge
    if (status !== 0) {
        if (status < 0) {
            status = `${Math.abs(status).toFixed(2)}% de Redução em Relação ao Mês Anterior `;
            badgeCor = "teal";
        }
        else{
            status = `${Math.abs(status).toFixed(2)}% de Aumento em Relação ao Mês Anterior `;
            badgeCor = "red";
        }

    } else {
        status = "Sem Alteração em Relação ao Mês Anterior";
    }

    return (
        <div className="flex flex-col bg-white w-96 h-56 hover:shadow-lg rounded-xl">
            <div className='mt-6 ml-5'>
                <div>
                    <Image className='w-10 h-10 mb-3' src={Icone} alt="Gráfico" />
                </div>

                <span>{texto}</span>
                <Metric className='mb-2.5'>{valor}</Metric>
                <Badge className='text-xs'>{status}</Badge>
            </div>
        </div>
    );
};
