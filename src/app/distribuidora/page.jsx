import React from "react";

// Componentes
import Data from '/src/components/data.jsx';
import Logotipo from 'src/components/logotipo.jsx';
import Usuario from 'src/components/usuario.jsx';
import Pesquisar from 'src/components/inputPesquisar.jsx';

export default function Geral() {
    return (
        <header>
            <nav className="border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Componente Logotipo.jsx */}
                <Logotipo />
                {/* Componente Pesquisar */}
                <Pesquisar />
                {/* Componente data.jsx */}
                <Data />
                {/* Componente usuario.jsx */}
                <Usuario />
            </div>
            </nav>
        </header>
    )
}