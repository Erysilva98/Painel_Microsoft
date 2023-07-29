"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

// Componentes
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import CustoTotal from "@/components/custoTotal";
import GraficoMensal from "@/components/graficoMensal";
import QuantLicenca from "@/components/quantLicenca";

export default function User() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
        try {
            const response = await axios.get("url");
            setData(response.data);
        } catch (error) {
            console.error('Erro ao obter os dados:', error);
        }
        }
        fetchData();
    }, []);


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
                        {/* Titulo da Página */}
                        <div>
                            <h1 className="text-3xl font-bold text-black ml-10 mt-14 mb-10">Nome do Usuário</h1>
                        </div>
                        
                        <div className="flex ml-10 mr-10 mt-10 justify-evenly">
                            {/* Componente de Custo Total */}
                            <Link href="/distribuidora">
                                <CustoTotal data={data}/>
                            </Link>
                            {/* Componente Grafico Mensal */}
                            <Link href="/distribuidora">
                                <GraficoMensal data={data}/>
                            </Link>
                        </div>
                        <div className="flex ml-10 mr-10 mt-10 justify-evenly">
                            {/* Componente Tabela Licenca */}
                            <Link href="/distribuidora">
                                <QuantLicenca data={data}/>
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}