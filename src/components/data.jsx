import React from "react";

export default function data() {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.toLocaleString('default', { month: 'long' });
    const ano = dataAtual.getFullYear();

    return (
        <div className='text-gray-700'>
            <span className='font-bold'>{dia}</span>/
            <span className='font-bold'>{mes}</span>/
            <span className='font-bold'>{ano}</span>
        </div>
    )
}