import React from "react";

// Componentes
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import AlterarValor from "@/components/alterarValor";

export default function Valores() {
  return (
    <>
        <header>
            <Header />
        </header>
        
        <main className="bg-blue-background min-w-max">
            <div className="flex">
                {/* Componente do Sidebar */}
                <div>
                    <Sidebar />
                </div>
                <section className="flex-1">
                    <AlterarValor />
                </section>
            </div>
        </main>
    </>
  );
}