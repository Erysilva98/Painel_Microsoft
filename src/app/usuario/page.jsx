"use client";
import React, {useState, useEffect} from 'react';
import axios from "axios";
import Link from "next/link";
import Image from 'next/image';

//Icones
import Voltar from "@assets/Circle.svg";

// Componentes
import ListaUsuario from '@/components/listaUsuario';
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function Licenca() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/listar/")
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar as distribuidoras:", error);
      });
  }, []);


  return (
    <>
      {/* <ListaLicenca data={data} /> */}
      <header>
        <Header />
      </header>
      <main className="bg-blue-background min-w-max">
        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <section className="flex-1">
            <div className="flex text-lg ml-20 mr-20 mt-10 items-center">
              <Link href="/distribuidora">
                <Image src={Voltar} className="w-10 h-10" />
              </Link>
              <h1 className='ml-6 text-3xl font-bold text-black'>Licenca Grupo Moura</h1>
            </div>
            <div className="flex justify-center items-center bg-white ml-20 mr-20 mt-10 h-16 rounded-lg">
              <h2>Tabela de Licença dos Usúarios</h2>
            </div>
            <div className="ml-20 mr-20 mt-5 mb-10">
              <Link href="/usuario/User">
                <ListaUsuario data={dados} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}