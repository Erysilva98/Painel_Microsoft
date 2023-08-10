"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

// Imagens
import Voltar from '@assets/Circle.svg';

// Componentes
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';

export default function DistribuidoraSlug({ params }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:4000/distribuidora/${params.slug}`); 
        setData(response.data);
      } catch (error) {
        console.error('Erro ao obter os dados:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <header className='sticky'>
        {/* Componente do Header */}
        <Header />
      </header>
      <main className="bg-blue-background min-w-max">
        <div className='flex'>
            {/* Componente do Sidebar */}
            <div>
              <Sidebar />
            </div>
            <section className="flex-1">
              {/* Titulo da Página com botão de ordenamento*/}
              <div className="flex ml-24 h-9 mt-10 mb-10">
                <Link href="/distribuidora">
                  <Image src={Voltar} className="flex w-10 h-10 mr-6" />
                </Link>
                <h1 className="text-3xl font-bold text-black mb-10">{params.slug}</h1>   
              </div>
                            
            </section>
        </div>
      </main>
    </>
  );
}
