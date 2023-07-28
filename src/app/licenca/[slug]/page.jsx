import React from "react";
import Image from "next/image";

// Componentes
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Usuario from "@/components/usuario";

export default function User() {
    return (
        <>
            <header>
                <Header />
            </header>

            <main className="bg-blue-background">
                <div className="flex">
                    {/* Componente do Sidebar */}
                    <div>
                    <Sidebar />
                    </div>
                    <section className="flex-1">
                        <div>
                            <Usuario />
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}