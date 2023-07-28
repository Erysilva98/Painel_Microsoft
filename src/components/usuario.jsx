import React from "react";

const dados = {
  id: 1,
  nome: "Fulano de Tal",
  licencas: [
    {
      nome: "Office 365 E3",
      custo: 100,
    },
    {
      nome: "Enterprise Mobility",
      custo: 150,
    },
    // Adicione mais licenças se necessário
  ],
};

export default function ListaCurriculo() {
  const { id, nome, licencas } = dados;
  const custoTotal = licencas.reduce((total, licenca) => total + licenca.custo, 0);

  return (
    <div className="max-w-md justify-center bg-gray-100 p-6 rounded-md shadow-md">
      <div className="mb-4">
        <strong>ID:</strong> {id}
      </div>
      <div className="mb-4">
        <strong>Nome:</strong> {nome}
      </div>
      <div className="mb-4">
        <strong>Licenças:</strong>
        <ul>
          {licencas.map((licenca, index) => (
            <li key={index}>
              <span>{licenca.nome}</span> - <span>{"R$" + licenca.custo}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <strong>Custo Total:</strong> {"R$" + custoTotal}
      </div>
    </div>
  );
}
