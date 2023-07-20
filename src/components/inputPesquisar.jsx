import React from "react";
import Image from "next/image";

//Icones
import iconPesquisar from "@assets/Search-s.svg";

export default function Pesquisar() {
    return (
        <form>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Image src={iconPesquisar} alt="Pesquisar" />
                </div>
                <input 
                    type="search"
                    className="block w-80 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Pesquise aqui uma Distribuidora" 
                />
            </div>
        </form>
    )
}