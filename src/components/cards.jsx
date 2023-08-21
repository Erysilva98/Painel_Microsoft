import React from "react";
import Link from "next/link";

export default function Card({ distribuidoras }) {

  if(!distribuidoras) {
    return (
      <div className="flex justify-center">
        <p className="text-gray-700 text-base">
          Nenhuma distribuidora encontrada
        </p>
      </div>
    )
  }

  return (
    <div className="flex justify-between flex-wrap">
      {distribuidoras.map((distribuidora) => (
        <Link href={`/distribuidora/${distribuidora.slug}`} key={distribuidora.idDistribuidora}>
          <div  className="w-64 h-36 mb-4 bg-white border border-gray-300 rounded-lg p-4 hover:shadow-lg">
            <div>
              <p className="text-gray-900 font-bold text-lg">
                {distribuidora.distribuidora}
              </p>
              <p className="text-gray-700 text-base mb-2">
                {distribuidora.idDistribuidora} 
              </p>
              <p className="text-gray-700 text-base">
                Valor Total: R$ {distribuidora.valorTotal}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
