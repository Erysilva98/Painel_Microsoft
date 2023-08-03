"use client";
import React, {useEffect, useState} from "react";

// Componentes
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import CustoTotal from "@/components/custoTotal";
import LicencaAtiva from "@/components/licencaAtiva";

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

            <main className="bg-blue-background min-w-max">
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
                           <div className="flex space-x-2">
                            {/* Componente de Custo Total */}
                            <CustoTotal data={data}/>
               
                            {/* Componente de Licenças */}
                            <LicencaAtiva data={data} />
                           </div>
                        </div>

                    </section>
                </div>
            </main>
        </>
    )
}