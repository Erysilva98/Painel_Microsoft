import React from 'react';
import { Card, Table, TableHead, TableHeaderCell, TableRow, TableBody, TableCell } from '@tremor/react';

export default function ListaUsuario ( { data }) {
  return (
    <Card>
      <Table className='mt-5 w-auto'>
        <TableHead className='bg-tremor-brand-emphasis'>
          <TableRow>
            <TableHeaderCell className="border text-white">ID</TableHeaderCell>
            <TableHeaderCell className="border text-white">Usuário</TableHeaderCell>
            <TableHeaderCell className="border text-white">Licenças</TableHeaderCell>
            <TableHeaderCell className="border text-white">Custo</TableHeaderCell>
            <TableHeaderCell className="border text-white">Data</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className='bg-gray-400'>
          {data.map((item, index) => (
            <TableRow key={index} className='hover:bg-tremor-brand-emphasis hover:text-white'>
              <TableCell className="border">{item.id}</TableCell>
              <TableCell className="border">{item.nomeExibicao}</TableCell>
              <TableCell className="border">{item.licencas.slice(0, 40)}</TableCell>
              <TableCell className="border">{"R$ "+item.idCustoLicenca}</TableCell>
              <TableCell className="border">{item.dataHoraCriacao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
    </Card>
  );
};