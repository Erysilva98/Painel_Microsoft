"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Componentes
import Sidebar from "@/components/sidebar";
import HeaderPesquisa from "@/components/headerPesquisa";
import Card from "@/components/cards";

//Icones
import Voltar from "@assets/Circle.svg";

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
                    <section className="flex-1">
                        {/* Titulo da Página com botão de ordenamento*/}
                        <div className="flex ml-24 h-9 w-full mt-10 mb-10">
                            <Link href="/">
                                <Image src={Voltar} className="flex w-10 h-10 mr-6" />
                            </Link>
                            <h1 className="text-3xl font-bold text-black ">Distribuidoras</h1>   
                        </div>
                        <div>
                            <Card distribuidoras={distribuidoras}/>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )}
