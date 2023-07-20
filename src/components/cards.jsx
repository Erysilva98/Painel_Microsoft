"use client";
import React from "react";
import Link from "next/link";

const cards = [
    {
        titulo: 'Palacio',
        subtitulo: 'P Matriz',
        valor: 'R$ 30.060,00'
    },
    {
        titulo: 'xxxxxxx',
        subtitulo: 'yyyyyyy',
        valor: 'R$ 12.500,00'
    },
    {
        titulo: 'aaaaaaaa',
        subtitulo: 'bbbbbbbb',
        valor: 'R$ 30.060,00'
    },
    {
        titulo: 'xxxxxxx',
        subtitulo: 'yyyyyyy',
        valor: 'R$ 12.500,00'
    },
    {
        titulo: 'aaaaaaaa',
        subtitulo: 'bbbbbbbb',
        valor: 'R$ 30.060,00'
    },
    {
        titulo: 'xxxxxxx',
        subtitulo: 'yyyyyyy',
        valor: 'R$ 12.500,00'
    },
    {
        titulo: 'aaaaaaaa',
        subtitulo: 'bbbbbbbb',
        valor: 'R$ 30.060,00'
    },
    {
        titulo: 'xxxxxxx',
        subtitulo: 'yyyyyyy',
        valor: 'R$ 12.500,00'
    },
    {
        titulo: 'aaaaaaaa',
        subtitulo: 'bbbbbbbb',
        valor: 'R$ 30.060,00'
    },
    {
        titulo: 'xxxxxxx',
        subtitulo: 'yyyyyyy',
        valor: 'R$ 12.500,00'
    },
    {
        titulo: 'aaaaaaaa',
        subtitulo: 'bbbbbbbb',
        valor: 'R$ 30.060,00'
    },
    {
        titulo: 'xxxxxxx',
        subtitulo: 'yyyyyyy',
        valor: 'R$ 12.500,00'
    },
    {
        titulo: 'aaaaaaaa',
        subtitulo: 'bbbbbbbb',
        valor: 'R$ 30.060,00'
    },
    {
        titulo: 'xxxxxxx',
        subtitulo: 'yyyyyyy',
        valor: 'R$ 12.500,00'
    },
    {
        titulo: 'aaaaaaaa',
        subtitulo: 'bbbbbbbb',
        valor: 'R$ 30.060,00'
    },
    {
        titulo: 'xxxxxxx',
        subtitulo: 'yyyyyyy',
        valor: 'R$ 12.500,00'
    }
]

export default function Card() {

    return (
        /* Conteúdo do card */
        <div className="flex flex-wrap h-screen ml-24 mr-16">
            {cards.map((card) => (
                <div
                    className=" w-64 h-36 mb-8 mr-8 bg-white border border-gray-300 rounded-lg p-4"
                    key={card.titulo}
                    href={`/matriz`}
                >
                    <Link href={`/matriz`}>
                        <div>
                            <p className="text-gray-900 font-bold text-lg ">{card.titulo}</p>
                            <p className="text-gray-700 text-base mb-2">{card.subtitulo}</p>
                            <p className="text-gray-700 text-base">{card.valor}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}