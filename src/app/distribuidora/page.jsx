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
                <aside className="bg-white w-48 h-screen">
                    <Sidebar />
                </aside>
            </main>
        </>
    )
}