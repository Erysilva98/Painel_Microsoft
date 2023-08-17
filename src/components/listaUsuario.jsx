import React from 'react';
import { Card, Table, TableHead, TableHeaderCell, TableRow, TableBody, TableCell } from '@tremor/react';

export default function ListaUsuario({ dados }) {
  // Verificar se "dados.user" é um array antes de usar .map()
  if (!dados || !Array.isArray(dados.user)) {
    return null;
  }

  return (
    <Card>
      <Table className='mt-5 w-auto'>
        <TableHead className='bg-tremor-brand-emphasis'>
          <TableRow>
            <TableHeaderCell className="border text-white">Num</TableHeaderCell>
            <TableHeaderCell className="border text-white">Usuário</TableHeaderCell>
            <TableHeaderCell className="border text-white">Licenças</TableHeaderCell>
            <TableHeaderCell className="border text-white">Custo</TableHeaderCell>
            <TableHeaderCell className="border text-white">Data</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className='bg-gray-400'>
          {dados.user.map((item, index) => (
            <TableRow key={index} className='hover:bg-tremor-brand-emphasis hover:text-white'>
              <TableCell className="border">{item.id}</TableCell>
              <TableCell className="border">{item.nomeExibicao}</TableCell>
              <TableCell className="border">{item.Licencas.slice(0, 50)}</TableCell>
              <TableCell className="border">{"R$ " + item.Custo}</TableCell>
              <TableCell className="border">{item.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
    </Card>
  );
}
