import React from 'react';
import ListaLicenca from '@/components/listaLIcenca';


// Componentes
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

const data = [
    { campusId: "001202901", usuario: 'João/Palacio Matriz', licencas: "Office 365 ", custo: 10000, dataHora: '2023/07/19' },
    { campusId: "090211313", usuario: 'Maria/Palacio Matriz', licencas: "Office 365 ", csuto: 20000, dataHora: '2023/07/19' },
    { campusId: "900932300", usuario: 'Pedro/Palacio Matriz', licencas: "Office 365 ", custo: 20020, dataHora: '2023/07/19' }
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
                <ListaLicenca data={data} />
              </section>
            </div>
          </main>
        </>
    )
}


{/* <div className="card-content">
        <table className="w-full">
          <thead>
            <tr>
              <th className="border p-2">Campus ID</th>
              <th className="border p-2">Usuário</th>
              <th className="border p-2">Licenças</th>
              <th className="border p-2">Status do Pedido</th>
              <th className="border p-2">Data e Hora de Criação</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.campusId}</td>
                <td className="border p-2">{item.usuario}</td>
                <td className="border p-2">{item.licencas}</td>
                <td className="border p-2">{item.orderStatus}</td>
                <td className="border p-2">{item.dataHoraCriacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}