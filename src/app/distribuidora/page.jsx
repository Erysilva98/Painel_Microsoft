import React from "react";
import orderList from "@assets/orderList.svg"

// Componentes
import Sidebar from "@/components/sidebar";
import HeaderPesquisa from "@/components/headerPesquisa";
import Image from "next/image";
import Card from "@/components/cards";

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

                    <section>
                        {/* Titulo da Página com botão de ordenamento*/}
                        <div className="flex justify-between h-9 w-full mr-8 mt-8 mb-8">
                            <h1 className="ml-24 mb-10 text-3xl font-bold text-black ">Distribuidoras</h1>
                            <button className="flex mr-44 items-center">
                                <Image src={orderList} className="mr-2 pt-0.5"/>
                                Ordenar por
                            </button>
                        </div>
                        <div>
                            <Card />
                        </div>
                    </section>
                </div>
            </main>
        </>
    )}