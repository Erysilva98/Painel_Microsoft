import React from "react"
import Data from '@/components/data.jsx';
import Logotipo from '@/components/logotipo.jsx';
import Usuario from '@/components/usuario.jsx';
import Pesquisar from "./inputPesquisar";

export default function HeaderPesquisa() {
    return (
        <nav className="flex w-full">
            <div className="flex flex-1 justify-between items-center">
                {/* Componente Logotipo.jsx */}
                <div className="ml-16 mt-3 mb-3">
                    <Logotipo />
                </div>
                <div>
                    {/* Componente Pesquisar */}
                    <Pesquisar />
                </div>
                {/* Componente data.jsx */}
                <div className="flex space-x-24 items-center mr-16">
                    {/* Componente data.jsx */}
                    <Data />
                    {/* Componente usuario.jsx */}
                    <Usuario />
                </div>
            </div>
        </nav>
    )
}