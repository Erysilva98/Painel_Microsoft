import React from 'react';
import {Card} from '@tremor/react';


// Componentes
import ListaLicenca from '@/components/listaLIcenca';
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const data = [
    { Id: "001202901", usuario: 'Amanda Farias Silva/Palacio Matriz', licencas: "Office 365+Interprise Mobility+Security E3", custo: 10000, dataHora: '2023/07/19' },
    { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", csuto: 20000, dataHora: '2023/07/19' },
    { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
    { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
    { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", csuto: 20000, dataHora: '2023/07/19' },
    { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
    { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
    { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", csuto: 20000, dataHora: '2023/07/19' },
    { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' },
    { Id: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
    { Id: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", csuto: 20000, dataHora: '2023/07/19' },
    { Id: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' }
    // Adicione mais objetos ao array, se necessário
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
                <div className="bg-red ml-20 mr-20 mt-10">
                    <p>Icone Seta de Voltar & Licenca Grupo Moura</p>
                </div>
                <div className="bg-blue-500 ml-20 mr-20 mt-10">
                    <text className="w-full h-20">Barra de Icones (Ordenar ) e Barra de Pesquisar </text>
                </div>
                <div className="flex ml-20 mr-20 mt-10 mb-10">
                    <ListaLicenca data={data} />
                </div>
              </section>
            </div>
          </main>
        </>
    )
}