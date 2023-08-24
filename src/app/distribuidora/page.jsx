"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import api from "@/services/api"
//Icones
import Voltar from "@assets/Circle.svg";

// Componentes
import Sidebar from "@/components/sidebar";
import Card from "@/components/cards";
import Header from "@/components/header";

export default function Distribuidora() {

    const [distribuidoras, setDistribuidoras] = useState([]);

    // Função para buscar os dados de cada Distribuidora
    useEffect(() => {
    api.get("/distribuidoras/") 
      .then((response) => {
        setDistribuidoras(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar as distribuidoras:", error);
      });
  }, []);

    return (
        <>
            <header>
                {/* Componente Header */}
                <Header />
            </header>

            <main className="bg-blue-background">
                <div className="flex">
                    <div>
                        {/* Componente Sidebar */}
                        <Sidebar />
                    </div>
                    <section className="flex-1">
                        <div className="flex ml-24 h-9 mt-10 mb-10">
                            <Link href="/">
                                <Image src={Voltar} className="flex w-10 h-10 mr-6" />
                            </Link>
                            <h1 className="text-2xl font-bold text-black ">DISTRIBUIDORAS</h1>
                        </div>

                        <div className="w-5/6 ml-32">
                            {/* Componente Cards */}
                            <Card distribuidoras={distribuidoras} />
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
