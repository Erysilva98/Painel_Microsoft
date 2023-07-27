"use client";
import React, { useState } from "react";
import { Card } from "@tremor/react";
import Image from 'next/image';
import axios from "axios";

// Imagens
import Moeda from "@assets/moeda.svg";

export default function AlterarValor() {
    const [licencas, setLicencas] = useState([{ nome: "", valor: "" }]);

    const handleAddLicenca = () => {
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
        // Envia os dados das licenças para a URL especificada em formato JSON
        try {
            const response = await axios.post("URL_DA_API", licencas);
            console.log(response.data); // Resposta da API (opcional, você pode fazer o que desejar com a resposta)
        } catch (error) {
            console.error("Erro ao enviar os dados:", error);
        }
    };

    return (
        <>
            <div className="bg-blue-background">
                <Card className=" mx-auto mt-10 max-w-4xl mb-40">
                    <div className="flex justify-center">
                        <div className="flex flex-col justify-center">
                            <Image className='w-10 h-10' src={Moeda} alt="Simbolo do Real" />
                            <h1 className="text-2xl">Valores das Licenças</h1>
                        </div>
                    </div>
                    <div>
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
                                        className="mt-2 border border-black rounded-md w-full"
                                        placeholder=" Ex: Licença 1 "
                                    />

                                    <label htmlFor={`valor-${index}`} className="block text-sm font-medium text-gray-700 mt-2">
                                        Valor da Licença
                                    </label>
                                    <input
                                        type="text"
                                        id={`valor-${index}`}
                                        name={`valor-${index}`}
                                        value={licenca.valor}
                                        onChange={(e) => atualizarLicenca(index, 'valor', e.target.value)}
                                        required
                                        className="mt-2 border border-black rounded-md w-full"
                                        placeholder="  Ex: 100"
                                    />

                                    {index > 0 && (
                                        <button 
                                            type="button" onClick={() => removerLicenca(index)} 
                                            className="text-red-600 bg-red hover:text-red-800 font-bold py-1 px-3 rounded m-2 ">
                                            Remover
                                        </button>
                                    )}
                                </div>
                            ))}
                        </form>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button onClick={handleAddLicenca} className="text-blue-600 hover:text-blue-800">
                            <span className="text-2xl">+</span> Adicionar Licença
                        </button>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button type="submit" form="licencasForm" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                            Enviar
                        </button>
                    </div>
                </Card>
            </div>
        </>
    );
}
