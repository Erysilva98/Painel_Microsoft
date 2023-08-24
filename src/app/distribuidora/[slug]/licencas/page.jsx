"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Icones
import Voltar from "@assets/Circle.svg";

// Componentes
import ListaUsuario from "@/components/listaUsuario";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import api from "@api";

async function getIdDistribuidoraFromSlug(slug) {
  try {
    const response = await api.get("/distribuidoras/");
    const distribuidoras = response.data;
    const distribuidora = distribuidoras.find((d) => d.slug === slug);
    return distribuidora ? distribuidora.idDistribuidora : null;
  } catch (error) {
    console.error("Erro ao buscar as distribuidoras:", error);
    return null;
  }
}

export default function Licenca({ params }) {
  const [dados, setDados] = useState([]);
  const [idDistribuidora, setIdDistribuidora] = useState(null);

  const slug = params.slug;

  useEffect(() => {
    async function fetchData() {
      const distribuidoraId = await getIdDistribuidoraFromSlug(params.slug);
      setIdDistribuidora(distribuidoraId);
      // Aqui você pode fazer qualquer outra operação com idDistribuidora
    }
    fetchData();
  }, [params.slug]);

  useEffect(() => {
    api
      .get(`/distribuidora/${slug}/usuarios`)
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os usuários:", error);
      });
  }, [slug]);

  return (
    <>
      <header>
        {/* Componente Header */}
        <Header />
      </header>
      <main className="bg-blue-background min-w-max">
        <div className="flex">
          <div>
            {/* Componente Sidebar */}
            <Sidebar />
          </div>
          <section className="flex-1">
            <div className="flex text-lg ml-20 mr-20 mt-10 items-center">
              <Link href={`../${slug}`}>
                <Image src={Voltar} className="w-10 h-10" />
              </Link>
              <h1 className="ml-6 text-2xl font-bold text-black">
                LICENÇAS {idDistribuidora}
              </h1>
            </div>
            <div className="ml-20 mr-20 mt-5 mb-10">
              {/* Componente ListaUsuario */}
              <ListaUsuario dados={dados} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
