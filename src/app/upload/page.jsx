"use client"
import React from "react";
import Sidebar from "@/components/sidebar";

// Componentes
import Data from '/src/components/data.jsx';
import Logotipo from 'src/components/logotipo.jsx';
import Usuario from 'src/components/usuario.jsx';
import ArqUpload from "@/components/arqUpload";

// Pagina Upload
export default function Upload() {

    return (
        <>
            <header>
                <nav className="flex w-full">
                    <div className="flex flex-1 justify-between">
                        {/* Componente Logotipo.jsx */}
                        <div className="ml-16 mt-3 mb-3">
                            <Logotipo />
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
            </header>

            <main className="bg-blue-background">
                <div className="flex">
                    {/* Componente do Sidebar */}
                    <aside className="static">
                        <Sidebar />
                    </aside>
                    <section>
                            <div className="flex">
                                <ArqUpload />
                            </div>
                    </section>
                </div>
            </main>
            <footer className="flex justify-center items-center bg-white h-24">
                <p>Desenvolvido por <a href="#" target="_blank" className="">Erimilson SIlva & Igor Nayan</a></p>
            </footer>
        </>
    )
}