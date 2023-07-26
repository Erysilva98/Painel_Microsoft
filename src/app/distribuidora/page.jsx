"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Componentes
import Sidebar from "@/components/sidebar";
import HeaderPesquisa from "@/components/headerPesquisa";
import Card from "@/components/cards";

export default function Distribuidora() {

    const [distribuidoras, setDistribuidoras] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:4000/distribuidoras")
        .then((response) => setDistribuidoras(response.data))
        .catch((error) => {
            console.error("Erro ao buscar as distribuidoras:", error);
        });
    }, []);

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
                            <Card distribuidoras={distribuidoras}/>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )}