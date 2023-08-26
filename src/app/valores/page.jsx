import React from "react";

// Componentes
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import AlterarValor from "@/components/alterarValor";

export default function Valores() {
    return (
        <>
            <header>
                {/* Componente do Header */}
                <Header />
            </header>

            <main className="bg-blue-background min-w-max">
                <div className="flex">
                    {/* Componente do Sidebar */}
                    <div>
                        {/* Componente do Sidebar */}
                        <Sidebar />
                    </div>
                    <section className="flex-1">
                        {/* Componente do AlterarValor */}
                        <AlterarValor />
                    </section>
                </div>
            </main>
        </>
    );
}