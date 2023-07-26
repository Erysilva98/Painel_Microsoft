"use client";
import React, {useEffect} from "react";
import axios from "axios";
import { Card, Text } from "@tremor/react";
import Image from 'next/image';

//Imagens
import Moeda from "@assets/moeda.svg";


export default function AlterarValor() {

    // Array com as opções de licença
    const opcoesLicenca = [
        "Office 365 E3",
        "Enterprise Mobility",
        "Security",
        "Exchange Online (Plan 1)",
        "Microsoft Power Automate Free",
        "Power BI (Free)",
        "Microsoft Teams Exploratory Mobility",
      ];
    
    const [opcaoSelecionada, setOpcaoSelecionada] = React.useState("");

    // Estados para os dados do formulário
    const [nome, setNome] = React.useState("");
    const [valor, setValor] = React.useState("");

    // Função para enviar os dados para o Banco de Dados
    const enviarDados = (event) => {
        // Evitar que a página seja recarregada
        event.preventDefault(); 

        // Criar objeto Json
        const dados = {
            nome: nome,
            valor: valor
        };

        try {
            // Enviar dados para o Banco de Dados
            const response = axios.post("http://localhost:4000/valoreslicenca",dados);
            console.log(response.dados);
        } catch (error) {
            console.error("Erro ao enviar os dados para o Banco de Dados:", error);
        }
    };

    return (
        <>
           <div className="bg-blue-background" >
                <Card className=" mx-auto mt-10 max-w-4xl mb-40">
                    <div className="flex justify-center">
                        <div className="flex flex-col justify-center">
                            <Image className='w-10 h-10' src={Moeda} alt="Simbolo do Real" />
                            <h1 className="text-2xl">Valores das Licenças</h1>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={enviarDados} className="flex flex-col justify-center">
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mt-2">
                            Selecione a Licença:
                        </label>
                        <div>
                            <select
                                id="nome"
                                name="nome"
                                value={opcaoSelecionada}
                                onChange={(event) => setOpcaoSelecionada(event.target.value)}
                                required
                                className="border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                            >
                                <option value="" disabled>
                                    Selecione uma opção
                                </option>
                                {opcoesLicenca.map((opcao) => (
                                    <option key={opcao} value={opcao}>
                                        {opcao}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                id="valorLicenca"
                                name="valorLicenca"
                                onChange={(e) => setValorLicenca(e.target.value)}
                                required
                                className="mt-2 border border-black rounded-md w-full"
                            />        
                        </div>

                        <div className="mt-3">
                            <select
                                id="nome"
                                name="nome"
                                value={opcaoSelecionada}
                                onChange={(event) => setOpcaoSelecionada(event.target.value)}
                                required
                                className="border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                            >
                                <option value="" disabled>
                                    Selecione uma opção
                                </option>
                                {opcoesLicenca.map((opcao) => (
                                    <option key={opcao} value={opcao}>
                                        {opcao}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                id="valorLicenca"
                                name="valorLicenca"
                                onChange={(e) => setValorLicenca(e.target.value)}
                                required
                                className="mt-2 border border-black rounded-md w-full"
                            />        
                        </div>

                        <div className="mt-3">
                            <select
                                id="nome"
                                name="nome"
                                value={opcaoSelecionada}
                                onChange={(event) => setOpcaoSelecionada(event.target.value)}
                                required
                                className="border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
                            >
                                <option value="" disabled>
                                    Selecione uma opção
                                </option>
                                {opcoesLicenca.map((opcao) => (
                                    <option key={opcao} value={opcao}>
                                        {opcao}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                id="valorLicenca"
                                name="valorLicenca"
                                onChange={(e) => setValorLicenca(e.target.value)}
                                required
                                className="mt-2 border border-black rounded-md w-full"
                            />        
                        </div>

                            <button>
                                <Text className="mt-6 box-border bg-blue-400 text-tremor-content-strong ">Confimar Alteração</Text>
                            </button>
                        </form>
                    </div>
                </Card>
            </div>
        </>
    );
}