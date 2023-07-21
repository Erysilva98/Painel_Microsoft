import React from 'react';
import { Card } from '@tremor/react';
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
              <Link href="/matriz">
                <Image src={Voltar} className="w-10 h-10" />
              </Link>
              <h1 className='ml-6 text-3xl font-bold text-black'>Licenca Grupo Moura</h1>
            </div>
            <div className="flex justify-center items-center bg-white ml-20 mr-20 mt-10 h-16 rounded-lg">
              <form>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Image src={iconPesquisar} alt="Pesquisar" />
                  </div>
                  <input
                    type="search" id="default-search"
                    className="block w-80 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Pesquise aqui um Usuário"
                  />
                </div>
              </form>
            </div>
            <div className="flex ml-20 mr-20 mt-5 mb-10">
              <ListaLicenca data={dados} />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}