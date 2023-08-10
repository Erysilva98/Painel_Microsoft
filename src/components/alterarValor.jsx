"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@tremor/react";
import Image from 'next/image';
import axios from "axios";

// Imagens
import Moeda from "@assets/moeda.svg";

export default function AlterarValor() {
    const [licencas, setLicencas] = useState([]);
    const [enviado, setEnviado] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:4000/valoreslicenca");
                setLicencas(response.data);
            } catch (error) {
                console.error("Erro ao obter os dados:", error);
            }
        }
        fetchData();
    }, []);

    const adicionarLicenca = () => {
        setLicencas([...licencas, { nome: "", valor: "" }]);
    };

    const atualizarLicenca = (index, field, value) => {
        const updatedLicencas = [...licencas];
        updatedLicencas[index][field] = value;
        setLicencas(updatedLicencas);
    };

    const removerLicenca = (index) => {
        const updatedLicencas = [...licencas];
        updatedLicencas.splice(index, 1);
        setLicencas(updatedLicencas);
    };

    const enviarDados = async (event) => {
        event.preventDefault();
        if (licencas.length > 0) {
            try {
                console.log(licencas);
                console.log("formulário enviado")
                const response = await axios.post("http://localhost:4000/valoreslicenca", { licencas });
                // Atualiza o estado para indicar que os dados foram enviados
                setEnviado(true);
            } catch (error) {
                console.error("Erro ao enviar os dados:", error);
            }
        }
    };

    return (
        <>
            <div className="bg-blue-background">
                <Card className=" mx-auto mt-10 max-w-4xl mb-40">
                    <div className="flex justify-center">
                        <div className="flex items-center">
                            <Image className='w-10 h-10 mr-2' src={Moeda} alt="Simbolo do Real" />
                            <h1 className="text-2xl">Valores das Licenças</h1>
                        </div>
                    </div>
                    <div>
                        {enviado ? (
                            <div className="flex justify-center mt-4">
                                <h2 className="text-green-600 text-xl font-bold">Dados enviados com sucesso!</h2>
                            </div>
                        ) : (
                            <form className="justify-center" onSubmit={enviarDados}>
                                {licencas.map((licenca, index) => (
                                    <div key={index}>
                                        <label htmlFor={`nome-${index}`} className="block text-sm font-medium text-gray-700 mt-2">
                                            Nome da Licença
                                        </label>
                                        <input
                                            type="text"
                                            id={`nome-${index}`}
                                            name={`nome-${index}`}
                                            value={licenca.nome}
                                            onChange={(e) => atualizarLicenca(index, 'nome', e.target.value)}
                                            required
                                            className="mt-2 border border-black rounded-md w-full pl-3 pt-2 pb-2"
                                            placeholder=" Ex: Licença 1 "
                                        />

                                        <label htmlFor={`valor-${index}`} className="block text-sm font-medium text-gray-700 mt-2">
                                            Valor da Licença
                                        </label>
                                        <input
                                            type="number"
                                            id={`valor-${index}`}
                                            name={`valor-${index}`}
                                            value={licenca.valor}
                                            onChange={(e) => {
                                                const novoValor = e.target.value.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos
                                                atualizarLicenca(index, 'valor', novoValor);
                                            }}
                                            required
                                            className="mt-2 border border-black rounded-md w-full  pl-3 pt-2 pb-2"
                                            placeholder="  Ex: 100"
                                        />
                                        <div className="flex justify-end">
                                            <button
                                                type="button" onClick={() => removerLicenca(index)}
                                                className="mt-4 mr-5 text-white bg-red-500 hover:bg-red-600 font-bold py-1 px-3 rounded m-2 ">
                                                <span>Remover</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex justify-center mt-4">
                                    <button onClick={adicionarLicenca} className="text-blue-600 hover:text-blue-800 hover:underline">
                                        <span className="text-2xl">+</span> Adicionar Licença
                                    </button>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <button type="submit" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                                        <span>Confirmar alterações</span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </Card>
            </div>
        </>
    );
}
