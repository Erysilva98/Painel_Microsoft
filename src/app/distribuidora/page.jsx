import React from "react";
import orderList from "@assets/orderList.svg"

// Componentes
import Sidebar from "@/components/sidebar";
import HeaderPesquisa from "@/components/headerPesquisa";
import Image from "next/image";
import Card from "@/components/cards";

export default function Distribuidora() {
    return (
        <>
            <header>
                <HeaderPesquisa />
            </header>

            <main className="bg-blue-background">
                <div className="flex">
                    <div>
                        <Sidebar />
                    </div>
                    <section>
                        {/* Titulo da Página com botão de ordenamento*/}
                        <div className="flex justify-between h-9 w-full mr-8 mt-8 mb-8">
                            <h1 className="ml-24 mb-10 text-3xl font-bold text-black ">Distribuidoras</h1>
                        </div>
                        <div>
                            <Card />
                        </div>
                    </section>
                </div>
            </main>
        </>
    )}