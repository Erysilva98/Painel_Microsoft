import React from "react";

// Componentes
import Sidebar from "@/components/sidebar";
import HeaderPesquisa from "@/components/headerPesquisa";

export default function Geral() {
    return (
        <>
            <header>
                <HeaderPesquisa />
            </header>

            <main className="bg-blue-background">
                <div className="flex">
                    <aside className="bg-white w-48 h-screen">
                        <Sidebar />
                    </aside>

                    <section className="flex-1">
                        {/* Titulo da Página */}
                        <div className="flex justify-between h-9 w-full m-8">
                            <h1 className="text-3xl font-bold text-black ">Distribuidoras</h1>
                            <button className="mr-16"> ordenar por</button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )}