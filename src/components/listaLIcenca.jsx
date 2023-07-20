import React from 'react';
import { Card, Title, Table, TableHead, TableHeaderCell, TableRow, TableBody, TableCell } from '@tremor/react';

export default function ListaLicenca ( { data }) {
  return (
    <Card>
      <Title>Lsta de Licenca</Title>
      <Table className='mt-5'>
        <TableHead className='bg-gray-500'>
          <TableRow>
            <TableHeaderCell className="border">ID</TableHeaderCell>
            <TableHeaderCell className="border">Usuário</TableHeaderCell>
            <TableHeaderCell className="border">Licenças</TableHeaderCell>
            <TableHeaderCell className="border">Custo</TableHeaderCell>
            <TableHeaderCell className="border">Data</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className='bg-gray-400'>
          {data.map((item, index) => (
            <TableRow key={index} className='hover:bg-gray-500'>
              <TableCell className="border">{item.Id}</TableCell>
              <TableCell className="border">{item.usuario}</TableCell>
              <TableCell className="border">{item.licencas}</TableCell>
              <TableCell className="border">{"R$ "+item.custo}</TableCell>
              <TableCell className="border">{item.dataHora}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
    </Card>
  );
};