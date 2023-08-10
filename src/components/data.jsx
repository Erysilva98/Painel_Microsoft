import React from "react";

export default function Data () {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.toLocaleString('default', { month: 'long' });
    const ano = dataAtual.getFullYear();

    return (
        <div className='flex items-center text-gray-700 text-sm'>
            <span>{dia}</span>/
            <span>{mes}</span>/
            <span>{ano}</span>
        </div>
    );
}

