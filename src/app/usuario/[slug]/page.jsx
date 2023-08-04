"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { Card, Metric, Text, List, ListItem, Grid } from "@tremor/react";

// Icones
import Grafico from "@assets/IconGrafico.svg";
import Icone from "@assets/licencaIcon.svg";

// Componentes
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const dados = [
    {
        name: "Microsoft Office 365 E3",
        amount: 50.0,
    },
    {
        name: "Microsoft Office EMS E3",
        amount: 40.0,
    },
    {
        name: "Microsoft Exchange P1",
        amount: 60.0,
    },
];

const tabela = [
    {
        title: "Custo total por Licença",
        tipo: "Valor geral da Licença",
    },
];

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

    const valorC = `${(data?.custoTotal || 200).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
    const valorL = `${(data?.quantidadeLicencasAtivas || 3)}`;

    const corArray = ["amber", "indigo", "sky", "rose", "emerald", "violet", "yellow", "blue", "lime", "slate"];


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

                        <div className='flex'>
                            {/* Custo Total */}
                            <div className="flex flex-col space-y-5 ml-10 mr-10">
                                <div className="flex flex-col bg-white w-9 h-40 hover:shadow-lg rounded-xl">
                                    <div className='mt-6 ml-5'>
                                        <div>
                                            <Image className='w-10 h-10 mb-3' src={Grafico} alt="Gráfico" />
                                        </div>
                                        <div>
                                            <span>Custo Total do Usuário</span>
                                            <Metric className='mb-2.5'>{valorC}</Metric>
                                        </div>
                                    </div>
                                </div>

                                {/* Licenças Ativas */}
                                <div>
                                    <div className="flex flex-col bg-white w-96 h-40 hover:shadow-lg rounded-xl">
                                        <div className='mt-6 ml-5'>
                                            <div>
                                                <Image className='w-10 h-10 mb-3' src={Icone} alt="Gráfico" />
                                            </div>
                                            <span>Quantidade de Licenças Ativas do Usuário</span>
                                            <Metric className='mb-2.5'>{valorL}</Metric>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                {/* Tabela c Licenças */}
                                <div>
                                    <Grid numItemsSm={1} className="gap-6">
                                        {tabela.map((dadosTabela) => (
                                            <Card key={dadosTabela.title} style={{ width: '325px', height: 'fit-content' }}>
                                                <p className="font-bold">{dadosTabela.title}</p>
                                                <Text>{dadosTabela.tipo}</Text>

                                                <List className="mt-4">
                                                    {dados.map((infoDado, index) => {
                                                        const selectCores = corArray[index % corArray.length];
                                                        return (
                                                            <ListItem key={infoDado.name} style={{ marginBottom: '25px' }}>
                                                                <div className="w-full">
                                                                    <div className="flex justify-between">
                                                                        <p className="font-bold">{infoDado.name}</p>
                                                                        <Text>{"R$" + infoDado.amount}</Text>
                                                                    </div>
                                                                </div>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </List>
                                            </Card>
                                        ))}
                                    </Grid>
                                </div>
                            
                        </div>

                    </section>
                </div>
            </main>
        </>
    )
}