"use client";
import React from 'react';
import Link from "next/link";
import Image from 'next/image';

//Icones
import Voltar from "@assets/Circle.svg";
import iconPesquisar from "@assets/Search-s.svg";

// Componentes
import ListaLicenca from '@/components/listaLIcenca';
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const dados = [
  { Id: "001202901", usuario: 'Amanda Farias Silva/Palacio Matriz', licencas: "Office 365+Interprise Mobility+Security E3", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  // Adicione mais objetos ao array, se necessário

  { Id: "001202901", usuario: 'Amanda Farias Silva/Palacio Matriz', licencas: "Office 365+Interprise Mobility+Security E3", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },

  { Id: "001202901", usuario: 'Amanda Farias Silva/Palacio Matriz', licencas: "Office 365+Interprise Mobility+Security E3", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },

  { Id: "001202901", usuario: 'Amanda Farias Silva/Palacio Matriz', licencas: "Office 365+Interprise Mobility+Security E3", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },


  { Id: "001202901", usuario: 'Amanda Farias Silva/Palacio Matriz', licencas: "Office 365+Interprise Mobility+Security E3", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
  { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
  { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", custo: 20000, dataHora: '2023/07/19' },
  { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
];

export default function Licenca() {
  return (
    <>
      {/* <ListaLicenca data={data} /> */}
      <header>
        <Header />
      </header>
      <main className="bg-blue-background">
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
            <div className="flex ml-20 mr-20 mt-5 mb-10">
              <Link href="/licenca/User">
                <ListaLicenca data={dados} />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}